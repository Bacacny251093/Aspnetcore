import { navigateTo, internalFunctions as navigationManagerInternalFunctions } from './Services/NavigationManager';
import { attachRootComponentToElement } from './Rendering/Renderer';
import { domFunctions } from './DomWrapper';
import { Virtualize } from './Virtualize';

// Make the following APIs available in global scope for invocation from JS
window['Blazor'] = {
  navigateTo,

  _internal: {
    attachRootComponentToElement,
    navigationManager: navigationManagerInternalFunctions,
    domWrapper: domFunctions,
    Virtualize,
  },
};
