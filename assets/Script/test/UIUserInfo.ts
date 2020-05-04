import UIBase from "../UIFrame/UIBase";
import { UIFormType } from "../UIFrame/config/SysDefine";
import AdapterManager, { AdaptationType } from "../UIFrame/AdapterManager";
import { UIType } from "../UIFrame/FormType";
import GEventManager from "../UIFrame/GEventManager";
import UILogin from "./UILogin";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIUserInfo extends UIBase {

    formType = new UIType(UIFormType.Fixed);   
    
    @property(cc.Node)
    backNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdapterManager.getInstance().adapatByType(AdaptationType.Top, this.node);
        this.backNode.on('click', () => {
            UILogin.show(1, 2, 3);
        });

        /**  */
        GEventManager.on('SendGold', (gold: number) => {
            cc.log('收到了来自FriendRankForm的消息');
        }, this);
    }

    // update (dt) {}
}