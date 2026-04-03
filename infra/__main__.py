"""An Azure RM Python Pulumi program"""

from pulumi_azure_native import resources, web

RESOURCE_GROUP_NAME = "jochemloedeman.nl"
STATIC_WEB_APP_NAME = "website"

resource_group = resources.ResourceGroup(
    "jochemloedemannl",
    resource_group_name=RESOURCE_GROUP_NAME,
)

static_web_app = web.StaticSite(
    "static_web_app",
    name=STATIC_WEB_APP_NAME,
    resource_group_name=RESOURCE_GROUP_NAME,
    sku=web.SkuDescriptionArgs(name="Free", tier="Free"),
    allow_config_file_updates=True,
    branch="main",
    enterprise_grade_cdn_status="Disabled",
    provider="GitHub",
    repository_url="https://github.com/jochemloedeman/jochemloedeman.nl",
    staging_environment_policy="Enabled",
)
