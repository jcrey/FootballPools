using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FootballPools.Startup))]
namespace FootballPools
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
