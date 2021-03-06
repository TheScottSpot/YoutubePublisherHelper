using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using YouPub.Services.Interfaces;
using YouPub.Services.Implementation;
using YouPub.Entities.Data;
using YouPub.Common.Extensions;
using YouPub.Entities.Models;
using YouPub.Entities.Models.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.IdentityModel.Tokens;


namespace YouPub
{
  public class Startup
  {
    private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
    private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddAutoMapper();
      services.AddMvc().AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());
      services.AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

      }).AddJwtBearer(options =>
      {
        options.Authority = "https://pubtube.auth0.com/";
        options.Audience = "https://pubtube-api.com";
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      // Catch all requests and route them back to the angular application
      app.Use(async (context, next) =>
        {
          await next();
          if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
          {
            context.Request.Path = "/index.html";
            await next();
          }
        })
        .UseDefaultFiles(new DefaultFilesOptions {DefaultFileNames = new List<string> {"index.html"}});

      app.UseExceptionHandler(
        builder =>
        {
          builder.Run(
            async context =>
            {
              context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;
              context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

              var error = context.Features.Get<IExceptionHandlerFeature>();
              if (error != null)
              {
                context.Response.AddApplicationError(error.Error.Message);
                await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
              }
            });
        });

      app.UseAuthentication();
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseMvc();
    }
  }
}
