// plugin-manager.js

/*

*/
import Joi from 'joi-browser';

const schemaPlugin = {
  url: Joi.string().required(),
  reducers: Joi.object().required(),
  routes: Joi.object()
};

let validatePlugin = (plugin) => {
  const {
    error,
    value
  } = Joi.validate(plugin, schemaPlugin);
  if(error){
    throw error
  }
}
class PluginManager {
  constructor() {
    var self = this;
    self.plugins = new Set()
    self.register = (plugin) => {
      validatePlugin(plugin)
      if (!self.plugins.has(plugin)) {
        self.plugins.add(plugin)
      }
      return self.plugins
    }
    self.unregister = (plugin) => {
      self.plugins.delete(plugin)
      return self.plugins
    }
    self.getPlugins = () => {
      return self.plugins
    }
    self.toArray = () => {
      return Array.from(self.plugins)
    }
  }
}

export let pluginManager = new PluginManager();