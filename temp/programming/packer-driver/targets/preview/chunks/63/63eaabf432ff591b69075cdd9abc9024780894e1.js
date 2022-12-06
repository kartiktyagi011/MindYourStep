System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, animation, _dec, _class, _crd, ccclass, property, AnimationGraphComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      animation = _cc.animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e1b9TGsOpF8q5DulIlMukh", "AnimationGraphComponent", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationGraphComponent", AnimationGraphComponent = (_dec = ccclass("AnimationGraphComponent"), _dec(_class = class AnimationGraphComponent extends animation.StateMachineComponent {
        /**
         * Called right after a motion state is entered.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */
        onMotionStateEnter(controller, motionStateStatus) {// Can be overrode
        }
        /**
         * Called when a motion state is about to exit.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */


        onMotionStateExit(controller, motionStateStatus) {// Can be overrode
        }
        /**
         * Called when a motion state updated except for the first and last frame.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */


        onMotionStateUpdate(controller, motionStateStatus) {// Can be overrode
        }
        /**
         * Called right after a state machine is entered.
         * @param controller The animation controller it within.
         */


        onStateMachineEnter(controller) {// Can be overrode
        }
        /**
         * Called right after a state machine is entered.
         * @param controller The animation controller it within.
         */


        onStateMachineExit(controller) {// Can be overrode
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63eaabf432ff591b69075cdd9abc9024780894e1.js.map