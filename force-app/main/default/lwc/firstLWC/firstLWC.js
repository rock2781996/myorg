import { LightningElement, track, api } from 'lwc';

export default class FirstLWC extends LightningElement {
    @track trackProperty='track property is set initially';
    @api apiProperty = 'api property is set initially';
    nonreactive='non reactive property is set initially';

    updateProperty(){
        this.nonreactive='nonreactive';
        this.trackProperty='trackProperty';
        this.apiProperty='apiProperty';
    }
}