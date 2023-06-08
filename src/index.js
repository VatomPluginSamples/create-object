import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'

/**
 * This is the main entry point for your plugin.
 *
 * All information regarding plugin development can be found at
 * https://developer.vatom.com/spaces/plugins-in-spaces/guide-create-plugin
 *
 * @license MIT
 * @author Vatom Inc.
 */
export default class CreateObjPlugin extends BasePlugin {
  // Plugin info
  static get id()             { return 'createobj-plugin' };
  static get name()           { return 'CreateObjPlugin' };
  static get description()    { return 'A button creates an object in the space.' };


	onLoad() {
		// Create a button in the toolbar
		this.menus.register({
			icon: this.paths.absolute('button-icon.png'),
			text: 'Plugin',
			action: () => this.onButtonPress()
		})
	}// onLoad()


	async onButtonPress() {
		console.log(`onButtonPress`);
		//
		/*---*/
		const objId = await this.objects.create({
			type: 'plane',
			scale_x: 16 / 9,
			clientOnly: false
		});
		
		/*---* /
		const objId = await this.objects.create({
			type: 'cylinder',
			scale_x: 1.0, scale_y: 1.0, scale_z: 1.0,
			disabled: false
		});
		/*---* /
		const userId = await this.user.getID();
		const objId = await this.objects.createStatusItem({
			userID: userId,
			size: 0.2
		},{
			type: 'text',
			text: 'Hello',
			textBold: true
		});
		/*---* /
		const objId = await this.objects.create({ type: 'plane', scale_x: 16 / 9 });
		/*---*/
		//
		console.log(`created obj: ${objId}`);
	}// onButtonPress()


}// class CreateObjPlugin


// EOF