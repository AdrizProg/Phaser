import { Scene } from 'phaser';
import consulta from '../components/callApi';
import { Bugfender } from '@bugfender/sdk';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background');

        const logo = this.add.image(512, 300, 'logo');

        this.add.text(512, 460, 'Bienvenido', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#000',
            stroke: '#fff', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.tweens.add({
            targets: logo,
            y: 250,
            duration: 1000, 

            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo:true
        });

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });

        consulta();

        Bugfender.init({
            appKey: 'TtLs7bzyn6Opnjbcp8nUqkziFWNQegLa',
            // overrideConsoleMethods: true,
            // printToConsole: true,
            // registerErrorHandler: true,
            // logBrowserEvents: true,
            // logUIEvents: true,
            // version: '',
            // build: '',
        });

        Bugfender.log('Pagina de inicio "MAinMenu.js"')
    }
}
