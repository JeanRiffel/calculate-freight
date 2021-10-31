
import { ItemInterface } from "../../domain/entity/ItemInterface";
import { VolumeAbstract } from "../../domain/entity/VolumeAbstract";

export class Volume extends VolumeAbstract {

    constructor(readonly item : ItemInterface ){
        super(item.length, item.width, item.height );        
    }
    
}