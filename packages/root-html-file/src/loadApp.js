import { importEntry } from 'import-html-entry';
import Sandbox from './sandbox';

export async function loadApp(app) {
  const { entry, name: appName, props, container } = app;
  
  const containerElement = document.createElement('div')
  containerElement.setAttribute('id', container.replace('#', ''));
  document.body.appendChild(containerElement);
  
  const { template, execScripts, assetPublicPath } = await importEntry(entry);
  
  const sandbox = new Sandbox(appName);
  sandbox.active();
  const { mount, ...otherConfig } = await execScripts(sandbox.proxy, true);
  const customProps = {
    appName,
    container: containerElement,
    ...props
  };
  
  return {
    mount: () => {
      while (containerElement.hasChildNodes()) {
        const firstChild = containerElement.firstChild;
        containerElement.removeChild(firstChild);
      }

      const appWrapperElement = document.createElement('div');
      appWrapperElement.setAttribute('id', 'app');
      containerElement.appendChild(appWrapperElement);

      return mount(customProps);
    },
    ...otherConfig,
  };
}