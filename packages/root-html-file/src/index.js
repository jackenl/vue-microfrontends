import { registerApplication, start } from 'single-spa';
import { loadApp } from './loadApp';

window.__MICRO_APP__ = true

const apps = [
  {
    name: 'navbar',
    entry: '//localhost:8080',
    container: '#micro-navbar',
    activeRule: () => true,
  },
  {
    name: 'app1',
    entry: '//localhost:8081',
    container: '#micro-app1',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: '//localhost:8082',
    container: '#micro-app2',
    activeRule: '/app2',
  },
];

apps.forEach((app) => {
  const { name, activeRule, props } = app;

  registerApplication({
    name,
    app: async () => {
      const { bootstrap, mount, unmount } = await loadApp(app);

      return {
        bootstrap,
        mount,
        unmount,
      };
    },
    activeWhen: activeRule,
    customProps: props,
  });
});

start();
