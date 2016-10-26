/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './not-found-page';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/material/card/card';
import * as import11 from '@angular/material/button/button';
import * as import12 from '@angular/router/src/directives/router_link';
import * as import13 from '../../node_modules/@angular/material/card/card.ngfactory';
import * as import14 from '../../node_modules/@angular/material/button/button.ngfactory';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/router/src/router_state';
import * as import18 from '@angular/common/src/location/location_strategy';
var renderType_NotFoundPageComponent_Host:import0.RenderComponentType = (null as any);
class _View_NotFoundPageComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _NotFoundPageComponent_0_4:import3.NotFoundPageComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NotFoundPageComponent_Host0,renderType_NotFoundPageComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('bc-not-found-page',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NotFoundPageComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NotFoundPageComponent_0_4 = new import3.NotFoundPageComponent();
    this._appEl_0.initComponent(this._NotFoundPageComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._NotFoundPageComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.NotFoundPageComponent) && (0 === requestNodeIndex))) { return this._NotFoundPageComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_NotFoundPageComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_NotFoundPageComponent_Host === (null as any))) { (renderType_NotFoundPageComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_NotFoundPageComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const NotFoundPageComponentNgFactory:import9.ComponentFactory<import3.NotFoundPageComponent> = new import9.ComponentFactory<import3.NotFoundPageComponent>('bc-not-found-page',viewFactory_NotFoundPageComponent_Host0,import3.NotFoundPageComponent);
const styles_NotFoundPageComponent:any[] = ['[_nghost-%COMP%] {\n      text-align: center;\n    }'];
var renderType_NotFoundPageComponent:import0.RenderComponentType = (null as any);
class _View_NotFoundPageComponent0 extends import1.AppView<import3.NotFoundPageComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _appEl_1:import2.AppElement;
  _MdCard_1_4:import10.MdCard;
  _text_2:any;
  _el_3:any;
  _MdCardTitle_3_3:import10.MdCardTitle;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _MdCardContent_6_3:import10.MdCardContent;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _MdCardActions_12_3:import10.MdCardActions;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import2.AppElement;
  _MdButton_14_4:import11.MdButton;
  _RouterLink_14_5:import12.RouterLink;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NotFoundPageComponent0,renderType_NotFoundPageComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'md-card',(null as any));
    this._appEl_1 = new import2.AppElement(1,(null as any),this,this._el_1);
    var compView_1:any = import13.viewFactory_MdCard0(this.viewUtils,this.injector(1),this._appEl_1);
    this._MdCard_1_4 = new import10.MdCard();
    this._appEl_1.initComponent(this._MdCard_1_4,([] as any[]),compView_1);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = this.renderer.createElement((null as any),'md-card-title',(null as any));
    this._MdCardTitle_3_3 = new import10.MdCardTitle();
    this._text_4 = this.renderer.createText(this._el_3,'404: Not Found',(null as any));
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'md-card-content',(null as any));
    this._MdCardContent_6_3 = new import10.MdCardContent();
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'p',(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Hey! It looks like this page doesn\'t exist yet.',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'md-card-actions',(null as any));
    this._MdCardActions_12_3 = new import10.MdCardActions();
    this._text_13 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'button',(null as any));
    this.renderer.setElementAttribute(this._el_14,'color','primary');
    this.renderer.setElementAttribute(this._el_14,'md-raised-button','');
    this.renderer.setElementAttribute(this._el_14,'routerLink','/');
    this._appEl_14 = new import2.AppElement(14,12,this,this._el_14);
    var compView_14:any = import14.viewFactory_MdButton0(this.viewUtils,this.injector(14),this._appEl_14);
    this._MdButton_14_4 = new import11.MdButton(new import15.ElementRef(this._el_14),this.renderer);
    this._RouterLink_14_5 = new import12.RouterLink(this.parentInjector.get(import16.Router),this.parentInjector.get(import17.ActivatedRoute),this.parentInjector.get(import18.LocationStrategy));
    this._appEl_14.initComponent(this._MdButton_14_4,([] as any[]),compView_14);
    this._text_15 = this.renderer.createText((null as any),'Take Me Home',(null as any));
    compView_14.create(this._MdButton_14_4,[([] as any[]).concat([this._text_15])],(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._text_17 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_1.create(this._MdCard_1_4,[([] as any[]).concat([
        this._text_2,
        this._el_3,
        this._text_5,
        this._el_6,
        this._text_11,
        this._el_12,
        this._text_17
      ]
    )],(null as any));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_14,'mousedown',this.eventHandler(this._handle_mousedown_14_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_14,'focus',this.eventHandler(this._handle_focus_14_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_14,'blur',this.eventHandler(this._handle_blur_14_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_14,'click',this.eventHandler(this._handle_click_14_3.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.MdCardTitle) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdCardTitle_3_3; }
    if (((token === import10.MdCardContent) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdCardContent_6_3; }
    if (((token === import11.MdButton) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdButton_14_4; }
    if (((token === import12.RouterLink) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLink_14_5; }
    if (((token === import10.MdCardActions) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdCardActions_12_3; }
    if (((token === import10.MdCard) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._MdCard_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    changed = false;
    const currVal_4:any = 'primary';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._MdButton_14_4.color = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) { this._appEl_14.componentView.markAsCheckOnce(); }
    const currVal_6:any = '/';
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._RouterLink_14_5.routerLink = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = this._MdButton_14_4._isKeyboardFocused;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_14,'md-button-focus',currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mousedown_14_0($event:any):boolean {
    this._appEl_14.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_14_4._setMousedown()) !== false);
    return (true && pd_0);
  }
  private _handle_focus_14_1($event:any):boolean {
    this._appEl_14.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_14_4._setKeyboardFocus()) !== false);
    return (true && pd_0);
  }
  private _handle_blur_14_2($event:any):boolean {
    this._appEl_14.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MdButton_14_4._removeKeyboardFocus()) !== false);
    return (true && pd_0);
  }
  private _handle_click_14_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLink_14_5.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_NotFoundPageComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.NotFoundPageComponent> {
  if ((renderType_NotFoundPageComponent === (null as any))) { (renderType_NotFoundPageComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_NotFoundPageComponent,{})); }
  return new _View_NotFoundPageComponent0(viewUtils,parentInjector,declarationEl);
}