import PanelComponent from './panel.vue';

export default {
	id: 'custom',
	name: 'Custom',
	icon: 'box',
	description: 'This is my custom panel!',
	component: PanelComponent,
	options: [
		{
			field: 'collection',
			type: 'string',
			name: '$t:collection',
			meta: {
			  interface: 'system-collection',
			  options: {
				includeSystem: true,
			  },
			  selectedCollection: '',
			  hasBeenSelected: false,
			  width: 'half',
			},
		},
	],
	minWidth: 12,
	minHeight: 8,
};
