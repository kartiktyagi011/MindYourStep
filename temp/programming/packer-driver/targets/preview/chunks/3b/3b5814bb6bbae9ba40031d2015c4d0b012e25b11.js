System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, input, Input, _dec, _class, _crd, ccclass, property, PlayerController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f7d1rnhCBEdKyEdyFGvmrl", "PlayerController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass("PlayerController"), _dec(_class = class PlayerController extends Component {
        constructor() {
          super(...arguments);
          this._startJump = false;
          this._jumpStep = 0;
          this._curJumpTime = 0;
          this._jumpTime = 0.1;
          this._curJumpSpeed = 0;
          this._curPos = new Vec3();
          this._deltaPos = new Vec3(0, 0, 0);
          this._targetPos = new Vec3();
          this._isMoving = false;
        }

        start() {
          // Your initialization goes here.
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        onMouseUp(event) {
          if (event.getButton() === 0) {
            this.jumpByStep(1);
          } else if (event.getButton() === 2) {
            this.jumpByStep(2);
          }
        }

        jumpByStep(step) {
          if (this._isMoving) {
            return;
          }

          this._startJump = true;
          this._jumpStep = step;
          this._curJumpTime = 0;
          this._curJumpSpeed = this._jumpStep / this._jumpTime;
          this.node.getPosition(this._curPos);
          Vec3.add(this._targetPos, this._curPos, new Vec3(this._jumpStep, 0, 0));
          this._isMoving = true;
        }

        onOnceJumpEnd() {
          this._isMoving = false;
        }

        update(deltaTime) {
          if (this._startJump) {
            this._curJumpTime += deltaTime;

            if (this._curJumpTime > this._jumpTime) {
              // end
              this.node.setPosition(this._targetPos);
              this._startJump = false;
              this.onOnceJumpEnd();
            } else {
              // tween
              this.node.getPosition(this._curPos);
              this._deltaPos.x = this._curJumpSpeed * deltaTime;
              Vec3.add(this._curPos, this._curPos, this._deltaPos);
              this.node.setPosition(this._curPos);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b5814bb6bbae9ba40031d2015c4d0b012e25b11.js.map