exports.migrate = function (input) {
    input.properties[".properties.catalog_services_0_guid"] = "09cac1c6-1b0a-11e6-b6ba-3e1d05defe78";
    input.properties[".properties.catalog_services_1_guid"] = "f3cbab6a-5172-4ff1-a5c7-72990f0ce2aa";
    input.properties[".properties.catalog_services_2_guid"] = "ff9b7835-b3bc-41b2-ad41-789baf64f41a";

    input.properties[".properties.catalog_plan_collection0"].value[0].guid = "09cac5b8-1b0a-11e6-b6ba-3e1d05defe78";
    input.properties[".properties.catalog_plan_collection1"].value[0].guid = "8e777d49-0a78-4cf4-810a-b5f5173b019d";
    input.properties[".properties.catalog_plan_collection1"].value[1].guid = "89d20694-9ab0-4a98-bc6a-868d6d4ecf31";
    input.properties[".properties.catalog_plan_collection2"].value[0].guid = "d9685d6c-0fd2-4748-b031-0946481e5096";
    input.properties[".properties.catalog_plan_collection2"].value[1].guid = "009802fb-d1ba-4a30-a9ea-a5be12ef2952";
    
    return input;
};
