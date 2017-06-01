using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DataVisualizationWithMVC.Startup))]
namespace DataVisualizationWithMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
