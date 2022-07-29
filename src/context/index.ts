import * as React from 'react';
import RootStore from 'stores/RootStore';

export const storesContext = React.createContext(new RootStore());
