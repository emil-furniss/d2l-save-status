import 'd2l-localize-behavior/d2l-localize-behavior.js';
import './_namespace.js';
import './lang/all.js';
/**
 * Localizes the d2l-save-status component.
 * @polymerBehavior D2L.PolymerBehaviors.SaveStatus.LocalizeBehavior
 */
D2L.PolymerBehaviors.SaveStatus.LocalizeBehaviorImpl = {
	properties: {
		/**
		 * Localization resources.
		 */
		resources: {
			value: function() {
				return window.D2L.PolymerBehaviors.SaveStatus.LangTerms;
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.SaveStatus.LocalizeBehavior */
D2L.PolymerBehaviors.SaveStatus.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.SaveStatus.LocalizeBehaviorImpl
];
