import QdtComponents from 'qdt-components';

const useUniqueSessionID = Math.random().toString(32).substr(2, 8);
const deployOptions = window.location.hostname === 'localhost' ? 'react' : 'qlik';

// const prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf('/extensions') + 1);

const options = {
  config: {
    host: deployOptions === 'react' ? 'localhost' : window.location.hostname,
    secure: deployOptions === 'react' ? false : window.location.protocol === 'https:',
    port: deployOptions === 'react' ? 4848 : window.location.port,
    prefix: deployOptions === 'react' ? '' : '',
    appId: '54ba6993-1558-42ab-9981-7ae205a30242', // Helpdesk
  },
  connections: {
    vizApi: true,
    engineApi: true,
    useUniqueSessionID,
  },
};

const options2 = {
  config: {
    host: deployOptions === 'react' ? 'localhost' : window.location.hostname,
    secure: deployOptions === 'react' ? false : window.location.protocol === 'https:',
    port: deployOptions === 'react' ? 4848 : window.location.port,
    prefix: deployOptions === 'react' ? '' : '/',
    appId: '84839b74-b053-40e3-bdf2-28a4482baa79', // Consumer Sales
  },
  connections: {
    vizApi: true,
    engineApi: false,
    useUniqueSessionID,
  },
};

const options3 = {
  config: {
    host: deployOptions === 'react' ? 'localhost' : window.location.hostname,
    secure: deployOptions === 'react' ? false : window.location.protocol === 'https:',
    port: deployOptions === 'react' ? 4848 : window.location.port,
    prefix: deployOptions === 'react' ? '' : '/',
    appId: '4052680c-fd97-4f49-ac83-e026cdd26d65', // Swipe Night
  },
  connections: {
    vizApi: false,
    engineApi: true,
    useUniqueSessionID,
  },
};

const options4 = {
  config: {
    host: deployOptions === 'react' ? 'localhost' : window.location.hostname,
    secure: deployOptions === 'react' ? false : window.location.protocol === 'https:',
    port: deployOptions === 'react' ? 4848 : window.location.port,
    prefix: deployOptions === 'react' ? '' : '/',
    appId: '61b83b90-3fa2-4fac-a771-c534100a6005', // MLS Salaries
  },
  connections: {
    vizApi: false,
    engineApi: true,
    useUniqueSessionID,
  },
};

console.log(`options.config: ${JSON.stringify(options.config)}`);
const qdtComponents = new QdtComponents(options.config, options.connections);
const qdtComponents2 = new QdtComponents(options2.config, options2.connections);
const qdtComponents3 = new QdtComponents(options3.config, options3.connections);
const qdtComponents4 = new QdtComponents(options4.config, options4.connections);
const { picasso } = QdtComponents;

export {
  qdtComponents, picasso, qdtComponents2, qdtComponents3, qdtComponents4,
};
