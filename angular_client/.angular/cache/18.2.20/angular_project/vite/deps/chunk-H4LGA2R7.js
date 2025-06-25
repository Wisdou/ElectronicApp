import {
  ChangeDetectorRef,
  Directive,
  INJECTOR$1,
  InjectionToken,
  Injector,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-ZNP3AC3U.js";

// node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
var POLYMORPHEUS_CONTEXT = new InjectionToken("");
function injectContext(options = {}) {
  return inject(POLYMORPHEUS_CONTEXT, options);
}
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }]
    });
  }
};
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
function isPrimitive(value) {
  return Object(value) !== value;
}
var PolymorpheusTemplate = class _PolymorpheusTemplate {
  constructor(template = inject(TemplateRef, {
    self: true
  }), cdr = inject(ChangeDetectorRef)) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  check() {
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function PolymorpheusTemplate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PolymorpheusTemplate,
      selectors: [["ng-template", "polymorpheus", ""]],
      inputs: {
        polymorpheus: "polymorpheus"
      },
      exportAs: ["polymorpheus"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[polymorpheus]",
      inputs: ["polymorpheus"],
      exportAs: "polymorpheus"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var PolymorpheusOutlet = class _PolymorpheusOutlet {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.i = inject(INJECTOR$1);
    this.t = inject(TemplateRef);
    this.content = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  ngOnChanges({
    content
  }) {
    const context = this.getContext();
    this.c?.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = context && new Proxy(ensureContext(context), {
      get: (_, key) => ensureContext(this.getContext())?.[key]
    });
    if (isComponent(this.content)) {
      this.process(this.content, proxy);
    } else if ((context instanceof PolymorpheusContext && context.$implicit) != null) {
      this.vcr.createEmbeddedView(this.template, proxy, {
        injector: this.i
      });
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  getContext() {
    if (isTemplate(this.content) || isComponent(this.content)) {
      return this.context;
    }
    return new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context ?? {}) : this.content);
  }
  process(content, proxy) {
    const injector = content.createInjector(this.i, proxy);
    this.c = this.vcr.createComponent(content.component, {
      injector
    });
  }
  static {
    this.ɵfac = function PolymorpheusOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolymorpheusOutlet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PolymorpheusOutlet,
      selectors: [["", "polymorpheusOutlet", ""]],
      inputs: {
        content: [0, "polymorpheusOutlet", "content"],
        context: [0, "polymorpheusOutletContext", "context"]
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutlet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[polymorpheusOutlet]"
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["polymorpheusOutlet"]
    }],
    context: [{
      type: Input,
      args: ["polymorpheusOutletContext"]
    }]
  });
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}
function ensureContext(context) {
  if (context && isPrimitive(context)) {
    return new PolymorpheusContext(context);
  }
  return context;
}

export {
  POLYMORPHEUS_CONTEXT,
  injectContext,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutlet
};
//# sourceMappingURL=chunk-H4LGA2R7.js.map
