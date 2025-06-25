import {
  TUI_ITEMS_HANDLERS,
  TuiTooltip
} from "./chunk-4ZY343MJ.js";
import {
  CHAR_PLUS,
  EMPTY_FUNCTION,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_TEXTFIELD_OPTIONS,
  TUI_VERSION,
  TuiAppearance,
  TuiControl,
  TuiDataListDirective,
  TuiDropdownOpen,
  TuiDropdownOpenLegacy,
  TuiHintOptionsDirective,
  TuiIcon,
  TuiMonthPipe,
  TuiValidationError,
  TuiValueTransformer,
  WA_NAVIGATOR,
  WA_WINDOW,
  isApple,
  takeUntilDestroyed,
  toSignal,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiDropdownOptionsProvider,
  tuiGetClosestFocusable,
  tuiInjectElement,
  tuiInjectId,
  tuiIsHTMLElement,
  tuiIsInput,
  tuiIsNativeFocusedIn,
  tuiIsPresent,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiRetargetedBoundaryCrossing,
  tuiWatch
} from "./chunk-F2RBK7JG.js";
import {
  PolymorpheusOutlet,
  PolymorpheusTemplate
} from "./chunk-H4LGA2R7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel
} from "./chunk-O3XW73IH.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgIf
} from "./chunk-N22DYD6F.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Input,
  NgModule,
  Optional,
  Output,
  Self,
  TemplateRef,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-ZNP3AC3U.js";
import {
  BehaviorSubject,
  EMPTY,
  NEVER,
  Subject,
  __decorate,
  delay,
  distinctUntilChanged,
  filter,
  from,
  fromEvent,
  identity,
  map,
  merge,
  of,
  shareReplay,
  startWith,
  switchMap
} from "./chunk-565WYVFV.js";

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-tokens.mjs
var TUI_COUNTRIES_MASKS = tuiCreateToken({
  AD: "+376###-###",
  AE: "+971-##-###-####",
  AF: "+93##-###-####",
  AG: "+1(268) ###-####",
  AI: "+1(264) ###-####",
  AL: "+355(###) ###-###",
  AM: "+374##-###-###",
  AO: "+244(###) ###-###",
  AR: "+54(###) ####-####",
  AT: "+43(###) ###-####",
  AU: "+61#-####-####",
  AW: "+297###-####",
  AZ: "+994##-###-##-##",
  BA: "+387 ###-####-##",
  BB: "+1(246) ###-####",
  BD: "+880##-###-###",
  BE: "+32(###) ###-###",
  BF: "+226##-##-####",
  BG: "+359(###) ###-###",
  BH: "+973####-####",
  BI: "+257##-##-####",
  BJ: "+229##-##-####",
  BL: "+590 ## ## ## ## ##",
  BM: "+1(441) ###-####",
  BN: "+673###-####",
  BO: "+591#-###-####",
  BQ: "+599-###-####",
  BR: "+55(##) ####-####",
  BS: "+1(242) ###-####",
  BT: "+975#-###-###",
  BW: "+267##-###-###",
  BY: "+375(##) ###-##-##",
  BZ: "+501###-####",
  CA: "+1(###) ###-####",
  CD: "+243(###) ###-###",
  CF: "+236-##-##-####",
  CG: "+242##-###-####",
  CH: "+41##-###-####",
  CI: "+225##-##-###-###",
  CL: "+56#-####-####",
  CM: "+237#####-####",
  CN: "+86(###) ####-####",
  CO: "+57(###) ###-####",
  CR: "+506####-####",
  CU: "+53#-###-####",
  CV: "+238(###) ##-##",
  CW: "+5999-###-####",
  CY: "+357##-###-###",
  CZ: "+420(###) ###-###",
  DE: "+49(###) ###-###-##",
  DJ: "+253##-##-##-##",
  DK: "+45##-##-##-##",
  DM: "+1(767) ###-####",
  DO: "+1(###) ###-####",
  DZ: "+213##-###-####",
  EC: "+593##-###-####",
  EE: "+372####-####",
  EG: "+20(###) ###-####",
  ER: "+291#-###-###",
  ES: "+34(###) ###-###",
  ET: "+251##-###-####",
  FI: "+358(###) ###-##-##",
  FJ: "+679##-#####",
  FK: "+500#####",
  FM: "+691###-####",
  FR: "+33 ## ## ## ## ##",
  GA: "+241##-##-##-##",
  GB: "+44##-####-####",
  GD: "+1(473) ###-####",
  GE: "+995(###) ###-###",
  GF: "+594 ## ## ## ## ##",
  GH: "+233(###) ###-###",
  GI: "+350###-#####",
  GL: "+299##-##-##",
  GM: "+220(###) ##-##",
  GN: "+224##-###-###",
  GP: "+590 ## ## ## ## ##",
  GQ: "+240##-###-####",
  GR: "+30(###) ###-####",
  GT: "+502#-###-####",
  GW: "+245#-######",
  GY: "+592###-####",
  HK: "+852####-####",
  HN: "+504####-####",
  HR: "+385##-###-####",
  HT: "+509##-##-####",
  HU: "+36(###) ###-###",
  ID: "+62(###) ###-##-###",
  IE: "+353(###) ###-###",
  IL: "+972##-###-####",
  IN: "+91(####) ###-###",
  IQ: "+964(###) ###-####",
  IR: "+98(###) ###-####",
  IS: "+354###-####",
  IT: "+39(###) ####-###",
  JM: "+1(876) ###-####",
  JO: "+962#-####-####",
  JP: "+81-##-####-####",
  KE: "+254###-######",
  KG: "+996(###) ###-###",
  KH: "+855##-###-###",
  KM: "+269##-#####",
  KN: "+1(869) ###-####",
  KP: "+850####-#############",
  KR: "+82##-###-####",
  KW: "+965####-####",
  KY: "+1(345) ###-####",
  KZ: "+7(###) ###-##-##",
  LA: "+856##-##-###-###",
  LB: "+961##-###-###",
  LC: "+1(758) ###-####",
  LI: "+423(###) ###-####",
  LK: "+94##-###-####",
  LR: "+231##-###-###",
  LS: "+266#-###-####",
  LT: "+370(###) ##-###",
  LU: "+352(###) ###-###",
  LV: "+371##-###-###",
  LY: "+218##-###-####",
  MA: "+212##-####-###",
  MC: "+377###-###-###",
  MD: "+373####-####",
  ME: "+382##-###-###",
  MF: "+590 ## ## ## ## ##",
  MG: "+261##-##-#####",
  MK: "+389##-###-###",
  ML: "+223##-##-####",
  MM: "+95##-###-###",
  MN: "+976##-##-####",
  MO: "+853####-####",
  MQ: "+596 ## ## ## ## ##",
  MR: "+222##-##-####",
  MS: "+1(664) ###-####",
  MT: "+356####-####",
  MU: "+230####-####",
  MV: "+960###-####",
  MW: "+265#-####-####",
  MX: "+52(###) ###-####",
  MY: "+60(###) ###-###",
  MZ: "+258##-###-###",
  NA: "+264##-###-####",
  NC: "+687 ### ###",
  NE: "+227##-##-####",
  NG: "+234(###) ###-####",
  NI: "+505####-####",
  NL: "+31##-###-####",
  NO: "+47(###) ##-###",
  NP: "+977##-###-###",
  NZ: "+64(###) ###-####",
  OM: "+968##-###-###",
  PA: "+507###-####",
  PE: "+51(###) ###-###",
  PF: "+689 ## ## ## ##",
  PG: "+675(###) ##-###",
  PH: "+63(###) ###-####",
  PK: "+92(###) ###-####",
  PL: "+48(###) ###-###",
  PT: "+351##-###-####",
  PW: "+680###-####",
  PY: "+595(###) ###-###",
  QA: "+974####-####",
  RE: "+262 ## ## ## ## ##",
  RO: "+40##-###-####",
  RS: "+381##-###-####",
  RU: "+7### ###-##-##",
  RW: "+250(###) ###-###",
  SA: "+966#-####-####",
  SB: "+677###-####",
  SC: "+248#-###-###",
  SD: "+249##-###-####",
  SE: "+46##-###-####",
  SG: "+65####-####",
  SH: "+290####",
  SI: "+386##-###-###",
  SK: "+421(###) ###-###",
  SL: "+232##-######",
  SM: "+378####-######",
  SN: "+221##-###-####",
  SO: "+252##-###-###",
  SR: "+597###-####",
  ST: "+239##-#####",
  SV: "+503##-##-####",
  SX: "+1(721) ###-####",
  SY: "+963##-####-###",
  SZ: "+268##-##-####",
  TC: "+1(649) ###-####",
  TD: "+235##-##-##-##",
  TG: "+228##-###-###",
  TH: "+66##-###-####",
  TJ: "+992##-###-####",
  TL: "+670###-#####",
  TM: "+993#-###-####",
  TN: "+216##-###-###",
  TO: "+676#####",
  TR: "+90(###) ###-####",
  TT: "+1(868) ###-####",
  TW: "+886#-####-####",
  TZ: "+255##-###-####",
  UA: "+380(##) ###-##-##",
  UG: "+256(###) ###-###",
  US: "+1(###) ###-####",
  UY: "+598#-###-##-##",
  UZ: "+998##-###-####",
  VC: "+1(784) ###-####",
  VE: "+58(###) ###-####",
  VG: "+1(284)###-####",
  VN: "+84(###) ####-###",
  VU: "+678##-#####",
  WS: "+685##-####",
  XK: "+383##-###-###",
  YE: "+967###-###-###",
  YT: "+262 ## ## ## ## ##",
  ZA: "+27##-###-####",
  ZM: "+260##-###-####",
  ZW: "+263#-######",
  VA: "+39 #### ###-####",
  WF: "+681 ## ##-##",
  VI: "+1(340) ###-####",
  JE: "+44(####) ######",
  AC: "+247###-####",
  TV: "+686###-####",
  TK: "+690###-####",
  TA: "+290###-####",
  SS: "+211### ###-###",
  SJ: "+47 ## ##-##-##",
  PS: "+970 #### ###-###",
  PR: "+1(###) ###-####",
  PM: "+508 ### ##-##-##",
  NU: "+683 ###-####",
  NR: "+674 ###-####",
  NF: "+672##-####",
  MP: "+1(670) ###-####",
  MH: "+692 ###-####",
  KI: "+686 ####-####",
  IO: "+246 ### ####",
  IM: "+44(####) ######",
  GU: "+1(###) ###-###",
  GG: "+44(###) ###-####",
  FO: "+298 ######",
  EH: "+212 #### #####",
  CX: "+61 # ####-####",
  CK: "+682 ## ###",
  CC: "+61 # ####-####",
  AX: "+358 ## ###-####",
  AS: "+1(###) ###-####"
});
var TUI_FOCUSABLE_ITEM_ACCESSOR = tuiCreateToken();
function tuiAsFocusableItemAccessor(accessor) {
  return tuiProvide(TUI_FOCUSABLE_ITEM_ACCESSOR, accessor);
}
var TUI_FONTS_READY = tuiCreateTokenFromFactory(() => from(inject(DOCUMENT).fonts?.ready || EMPTY).pipe(shareReplay({
  bufferSize: 1,
  refCount: false
})));
var TUI_ICON_STARTS = tuiCreateToken({});
var TUI_IS_APPLE = tuiCreateTokenFromFactory(() => isApple(inject(WA_NAVIGATOR)));
var TUI_IS_CHROMIUM = tuiCreateTokenFromFactory(() => !!inject(WA_WINDOW).chrome);
var TUI_IS_FIREFOX = tuiCreateTokenFromFactory(() => inject(WA_WINDOW)?.mozCancelFullScreen !== void 0);
var TUI_IS_STACKBLITZ = tuiCreateTokenFromFactory(() => inject(WA_WINDOW).location.host.endsWith("stackblitz.io"));
var TUI_MONTH_FORMATTER = tuiCreateToken();
var TUI_MONTH_FORMATTER_PROVIDER = {
  provide: TUI_MONTH_FORMATTER,
  deps: [TuiMonthPipe],
  useFactory: (pipe) => (month) => month ? pipe.transform(month).pipe(map((formatted) => `${formatted} ${month.formattedYear}`)) : of("")
};
var TUI_SANITIZER = tuiCreateToken();
var TUI_TEXTFIELD_APPEARANCE = tuiCreateToken("textfield");
var TUI_TEXTFIELD_HOST = tuiCreateToken();
function tuiAsTextfieldHost(host) {
  return tuiProvide(TUI_TEXTFIELD_HOST, host);
}
var TUI_TOUCH_SUPPORTED = tuiCreateTokenFromFactory(() => inject(WA_WINDOW).matchMedia("(any-pointer: coarse)").matches);
var TUI_VALUE_ACCESSOR = tuiCreateToken();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-classes.mjs
var TUI = "tui_interactive_";
var AbstractTuiInteractive = class _AbstractTuiInteractive {
  constructor() {
    this.autoIdString = `${TUI}${_AbstractTuiInteractive.autoId++}${Date.now()}`;
    this.focusVisible = false;
    this.pseudoHover = null;
    this.pseudoActive = null;
    this.pseudoFocus = null;
    this.focusable = true;
    this.nativeId = "";
    this.focusedChange = new EventEmitter();
    this.focusVisibleChange = new EventEmitter();
  }
  static {
    this.autoId = 0;
  }
  get computedDisabled() {
    return this.disabled;
  }
  get computedFocused() {
    return !this.computedDisabled && (this.pseudoFocus ?? this.focused);
  }
  get computedFocusVisible() {
    return !this.computedDisabled && (this.pseudoFocus ?? this.focusVisible);
  }
  get computedFocusable() {
    return !this.computedDisabled && (this.focusable || this.focused);
  }
  // TODO: 3.0 Consider removing since native input is exposed
  get id() {
    return this.nativeId || this.autoIdString;
  }
  updateFocused(focused) {
    this.focusedChange.emit(focused);
  }
  updateFocusVisible(focusVisible) {
    if (this.focusVisible === focusVisible) {
      return;
    }
    this.focusVisible = focusVisible;
    this.focusVisibleChange.emit(focusVisible);
  }
  static {
    this.ɵfac = function AbstractTuiInteractive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiInteractive)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiInteractive,
      hostVars: 7,
      hostBindings: function AbstractTuiInteractive_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-focused", ctx.pseudoFocus);
          ɵɵclassProp("_disabled", ctx.computedDisabled)("_focused", ctx.computedFocused)("_focus-visible", ctx.computedFocusVisible);
        }
      },
      inputs: {
        pseudoHover: "pseudoHover",
        pseudoActive: "pseudoActive",
        pseudoFocus: "pseudoFocus",
        focusable: "focusable",
        nativeId: "nativeId"
      },
      outputs: {
        focusedChange: "focusedChange",
        focusVisibleChange: "focusVisibleChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiInteractive, [{
    type: Directive,
    args: [{
      standalone: false,
      host: {
        "[attr.data-focused]": "pseudoFocus",
        "[class._disabled]": "computedDisabled",
        "[class._focused]": "computedFocused",
        "[class._focus-visible]": "computedFocusVisible"
      }
    }]
  }], null, {
    pseudoHover: [{
      type: Input
    }],
    pseudoActive: [{
      type: Input
    }],
    pseudoFocus: [{
      type: Input
    }],
    focusable: [{
      type: Input
    }],
    nativeId: [{
      type: Input
    }],
    focusedChange: [{
      type: Output
    }],
    focusVisibleChange: [{
      type: Output
    }]
  });
})();
var AbstractTuiControl = class _AbstractTuiControl extends AbstractTuiInteractive {
  constructor() {
    super();
    this.ngControl = inject(NgControl, {
      optional: true
    });
    this.refresh$ = new Subject();
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.fallbackValue = this.getFallbackValue();
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.valueTransformer = inject(TuiValueTransformer, {
      optional: true
    });
    this.readOnly = false;
    this.pseudoInvalid = null;
    this.update$ = new Subject();
    if (ngDevMode && this.ngControl === null) {
      console.assert(false, `NgControl not injected in ${this.constructor.name}!
`, "Use [(ngModel)] or [formControl] or formControlName for correct work.");
    }
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  get computedInvalid() {
    return this.interactive && (this.pseudoInvalid !== null ? this.pseudoInvalid : this.touched && this.invalid);
  }
  get value() {
    return this.previousInternalValue ?? this.fallbackValue;
  }
  set value(value) {
    this.updateValue(value);
    this.update$.next();
  }
  get safeCurrentValue() {
    return this.rawValue ?? this.fallbackValue;
  }
  get invalid() {
    return this.safeNgControlData(({
      invalid
    }) => invalid, false);
  }
  get valid() {
    return this.safeNgControlData(({
      valid
    }) => valid, false);
  }
  get touched() {
    return this.safeNgControlData(({
      touched
    }) => touched, false);
  }
  get disabled() {
    return this.safeNgControlData(({
      disabled
    }) => disabled, false);
  }
  get interactive() {
    return !this.readOnly && !this.computedDisabled;
  }
  get control() {
    return this.safeNgControlData(({
      control
    }) => control, null);
  }
  get computedName() {
    return this.controlName?.toString() ?? null;
  }
  get controlName() {
    return this.ngControl?.name?.toString() ?? null;
  }
  ngOnInit() {
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.ngControl?.control), filter(tuiIsPresent), distinctUntilChanged(), switchMap((control) => merge(control.valueChanges, control.statusChanges, control.events || EMPTY)), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.refreshLocalValue(this.safeCurrentValue);
    });
  }
  checkControlUpdate() {
    this.cdr.markForCheck();
  }
  registerOnChange(onChange) {
    this.onChange = (componentValue) => {
      onChange(this.toControlValue(componentValue));
    };
    this.refresh$.next();
  }
  registerOnTouched(onTouched) {
    this.onTouched = onTouched;
  }
  setDisabledState() {
    this.checkControlUpdate();
  }
  writeValue(value) {
    const controlValue = this.ngControl instanceof NgModel && this.previousInternalValue === void 0 ? this.ngControl.model : value;
    this.refreshLocalValue(this.fromControlValue(controlValue));
  }
  updateFocused(focused) {
    if (!focused) {
      this.controlMarkAsTouched();
    }
    super.updateFocused(focused);
  }
  /**
   * @deprecated use `value` setter
   */
  updateValue(value) {
    if (this.disabled || this.valueIdenticalComparator(this.value, value)) {
      return;
    }
    this.previousInternalValue = value;
    this.controlSetValue(value);
  }
  valueIdenticalComparator(oldValue, newValue) {
    return oldValue === newValue;
  }
  get rawValue() {
    const {
      ngControl
    } = this;
    if (ngControl === null) {
      return void 0;
    }
    const controlValue = ngControl instanceof NgModel && this.previousInternalValue === void 0 ? ngControl.viewModel : ngControl.value;
    return this.fromControlValue(controlValue);
  }
  safeNgControlData(extractor, defaultFieldValue) {
    return (this.ngControl && extractor(this.ngControl)) ?? defaultFieldValue;
  }
  controlMarkAsTouched() {
    this.onTouched();
    this.checkControlUpdate();
  }
  controlSetValue(value) {
    this.onChange(value);
    this.checkControlUpdate();
  }
  refreshLocalValue(value) {
    this.previousInternalValue = value;
    this.checkControlUpdate();
  }
  fromControlValue(controlValue) {
    return this.valueTransformer ? this.valueTransformer.fromControlValue(controlValue) : controlValue;
  }
  toControlValue(componentValue) {
    return this.valueTransformer ? this.valueTransformer.toControlValue(componentValue) : componentValue;
  }
  static {
    this.ɵfac = function AbstractTuiControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiControl)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiControl,
      hostVars: 4,
      hostBindings: function AbstractTuiControl_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_readonly", ctx.readOnly)("_invalid", ctx.computedInvalid);
        }
      },
      inputs: {
        readOnly: "readOnly",
        pseudoInvalid: "pseudoInvalid"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiControl, [{
    type: Directive,
    args: [{
      standalone: false,
      host: {
        "[class._readonly]": "readOnly",
        "[class._invalid]": "computedInvalid"
      }
    }]
  }], function() {
    return [];
  }, {
    readOnly: [{
      type: Input
    }],
    pseudoInvalid: [{
      type: Input
    }]
  });
})();
function tuiAsControl(control) {
  return [tuiProvide(AbstractTuiControl, control), tuiProvide(TuiControl, control)];
}
var AbstractTuiNativeSelect = class _AbstractTuiNativeSelect {
  constructor() {
    this.datalist = null;
    this.autoId = tuiInjectId();
    this.el = tuiInjectElement();
    this.host = inject(TUI_TEXTFIELD_HOST);
    this.control = inject(AbstractTuiControl);
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.disabledItemHandler = null;
    this.placeholder = "";
  }
  get id() {
    return this.el.id || this.autoId;
  }
  get emptyOption() {
    return !!this.placeholder && !this.control.value;
  }
  static {
    this.ɵfac = function AbstractTuiNativeSelect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiNativeSelect)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiNativeSelect,
      viewQuery: function AbstractTuiNativeSelect_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiDataListDirective, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function AbstractTuiNativeSelect_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.id);
        }
      },
      inputs: {
        disabledItemHandler: "disabledItemHandler",
        placeholder: "placeholder"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiNativeSelect, [{
    type: Directive,
    args: [{
      standalone: false,
      host: {
        "[id]": "id"
      }
    }]
  }], null, {
    datalist: [{
      type: ViewChild,
      args: [TuiDataListDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    disabledItemHandler: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var AbstractTuiTextfieldHost = class _AbstractTuiTextfieldHost {
  constructor() {
    this.host = inject(AbstractTuiControl, {
      optional: true
    });
  }
  get readOnly() {
    return this.host.readOnly;
  }
  get disabled() {
    return this.host.computedDisabled;
  }
  get invalid() {
    return this.host.computedInvalid;
  }
  get focusable() {
    return this.host.computedFocusable;
  }
  get inputMode() {
    return "text";
  }
  get value() {
    return this.host.value?.toString() || "";
  }
  process(_input) {
  }
  static {
    this.ɵfac = function AbstractTuiTextfieldHost_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiTextfieldHost)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiTextfieldHost
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiTextfieldHost, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiController = class _AbstractTuiController {
  constructor() {
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  static {
    this.ɵfac = function AbstractTuiController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiController)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiController,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiController, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiMultipleControl = class _AbstractTuiMultipleControl extends AbstractTuiControl {
  clear() {
    this.value = [];
  }
  getFallbackValue() {
    return [];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAbstractTuiMultipleControl_BaseFactory;
      return function AbstractTuiMultipleControl_Factory(__ngFactoryType__) {
        return (ɵAbstractTuiMultipleControl_BaseFactory || (ɵAbstractTuiMultipleControl_BaseFactory = ɵɵgetInheritedFactory(_AbstractTuiMultipleControl)))(__ngFactoryType__ || _AbstractTuiMultipleControl);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiMultipleControl,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiMultipleControl, [{
    type: Directive
  }], null, null);
})();
var TuiNamedDay = class {
  constructor(day, name, displayDay = day) {
    this.day = day;
    this.name = name;
    this.displayDay = displayDay;
  }
  toString() {
    return this.name;
  }
};
var AbstractTuiNullableControl = class _AbstractTuiNullableControl extends AbstractTuiControl {
  getFallbackValue() {
    return null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAbstractTuiNullableControl_BaseFactory;
      return function AbstractTuiNullableControl_Factory(__ngFactoryType__) {
        return (ɵAbstractTuiNullableControl_BaseFactory || (ɵAbstractTuiNullableControl_BaseFactory = ɵɵgetInheritedFactory(_AbstractTuiNullableControl)))(__ngFactoryType__ || _AbstractTuiNullableControl);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiNullableControl,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiNullableControl, [{
    type: Directive
  }], null, null);
})();
var TuiStringifiableItem = class {
  constructor(item, stringify) {
    this.item = item;
    this.stringify = stringify;
  }
  toString() {
    return this.stringify(this.item);
  }
};

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-legacy-dropdown-open-monitor.mjs
var TuiLegacyDropdownOpenMonitorDirective = class _TuiLegacyDropdownOpenMonitorDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.host = inject(TuiDropdownOpen, {
      self: true
    });
    this.external = inject(TuiDropdownOpenLegacy, {
      optional: true
    });
  }
  ngAfterViewInit() {
    this.external?.tuiDropdownOpenChange.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((open) => {
      if (open) {
        tuiGetClosestFocusable({
          initial: this.el,
          root: this.el
        })?.focus();
      }
      this.host.toggle(open);
    });
    this.host.driver.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((open) => this.external?.emitOpenChange(open));
  }
  static {
    this.ɵfac = function TuiLegacyDropdownOpenMonitorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLegacyDropdownOpenMonitorDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLegacyDropdownOpenMonitorDirective,
      selectors: [["", "tuiDropdownOpenMonitor", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLegacyDropdownOpenMonitorDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownOpenMonitor]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-textfield-controller.mjs
var TuiTextfieldController = class {
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  constructor(change$, options, legacyAppearance, appearanceDirective, cleanerDirective, customContentDirective, iconDirective, iconLeftDirective, labelOutsideDirective, sizeDirective, prefixDirective, postfixDirective, fillerDirective) {
    this.change$ = change$;
    this.options = options;
    this.legacyAppearance = legacyAppearance;
    this.appearanceDirective = appearanceDirective;
    this.cleanerDirective = cleanerDirective;
    this.customContentDirective = customContentDirective;
    this.iconDirective = iconDirective;
    this.iconLeftDirective = iconLeftDirective;
    this.labelOutsideDirective = labelOutsideDirective;
    this.sizeDirective = sizeDirective;
    this.prefixDirective = prefixDirective;
    this.postfixDirective = postfixDirective;
    this.fillerDirective = fillerDirective;
  }
  get appearance() {
    return this.appearanceDirective.appearance || this.legacyAppearance;
  }
  get cleaner() {
    return this.cleanerDirective.cleaner;
  }
  get customContent() {
    return this.customContentDirective.customContent || "";
  }
  get icon() {
    return this.iconDirective.icon;
  }
  get iconStart() {
    return this.iconLeftDirective.iconStart;
  }
  get labelOutside() {
    return this.labelOutsideDirective.labelOutside;
  }
  get size() {
    return this.sizeDirective.size;
  }
  get prefix() {
    return this.prefixDirective.prefix;
  }
  get postfix() {
    return this.postfixDirective.postfix;
  }
  get filler() {
    return this.fillerDirective.filler;
  }
};
var TUI_TEXTFIELD_DEFAULT_OPTIONS = {
  iconCleaner: "@tui.x",
  hintOnDisabled: false
};
var TUI_TEXTFIELD_OPTIONS2 = tuiCreateToken(TUI_TEXTFIELD_DEFAULT_OPTIONS);
function tuiTextfieldOptionsProvider(options) {
  return tuiProvideOptions(TUI_TEXTFIELD_OPTIONS2, options, TUI_TEXTFIELD_DEFAULT_OPTIONS);
}
var TUI_TEXTFIELD_APPEARANCE_DIRECTIVE = tuiCreateTokenFromFactory(() => new TuiTextfieldAppearanceDirective());
var TuiTextfieldAppearanceDirective = class _TuiTextfieldAppearanceDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.appearance = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldAppearanceDirective_BaseFactory;
      return function TuiTextfieldAppearanceDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldAppearanceDirective_BaseFactory || (ɵTuiTextfieldAppearanceDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldAppearanceDirective)))(__ngFactoryType__ || _TuiTextfieldAppearanceDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldAppearanceDirective,
      selectors: [["", "tuiTextfieldAppearance", ""]],
      inputs: {
        appearance: [0, "tuiTextfieldAppearance", "appearance"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, _TuiTextfieldAppearanceDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldAppearanceDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldAppearance]",
      providers: [tuiProvide(TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TuiTextfieldAppearanceDirective)]
    }]
  }], null, {
    appearance: [{
      type: Input,
      args: ["tuiTextfieldAppearance"]
    }]
  });
})();
var TUI_TEXTFIELD_CLEANER = tuiCreateTokenFromFactory(() => new TuiTextfieldCleanerDirective());
var TuiTextfieldCleanerDirective = class _TuiTextfieldCleanerDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.cleaner = false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldCleanerDirective_BaseFactory;
      return function TuiTextfieldCleanerDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldCleanerDirective_BaseFactory || (ɵTuiTextfieldCleanerDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldCleanerDirective)))(__ngFactoryType__ || _TuiTextfieldCleanerDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldCleanerDirective,
      selectors: [["", "tuiTextfieldCleaner", ""]],
      inputs: {
        cleaner: [0, "tuiTextfieldCleaner", "cleaner"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_CLEANER, _TuiTextfieldCleanerDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldCleanerDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_CLEANER, TuiTextfieldCleanerDirective)]
    }]
  }], null, {
    cleaner: [{
      type: Input,
      args: ["tuiTextfieldCleaner"]
    }]
  });
})();
var TUI_TEXTFIELD_CUSTOM_CONTENT = tuiCreateTokenFromFactory(() => new TuiTextfieldCustomContentDirective());
var TuiTextfieldCustomContentDirective = class _TuiTextfieldCustomContentDirective extends AbstractTuiController {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldCustomContentDirective_BaseFactory;
      return function TuiTextfieldCustomContentDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldCustomContentDirective_BaseFactory || (ɵTuiTextfieldCustomContentDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldCustomContentDirective)))(__ngFactoryType__ || _TuiTextfieldCustomContentDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldCustomContentDirective,
      selectors: [["", "tuiTextfieldCustomContent", ""]],
      inputs: {
        customContent: [0, "tuiTextfieldCustomContent", "customContent"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_CUSTOM_CONTENT, _TuiTextfieldCustomContentDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldCustomContentDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldCustomContent]",
      providers: [tuiProvide(TUI_TEXTFIELD_CUSTOM_CONTENT, TuiTextfieldCustomContentDirective)]
    }]
  }], null, {
    customContent: [{
      type: Input,
      args: ["tuiTextfieldCustomContent"]
    }]
  });
})();
var TUI_TEXTFIELD_FILLER = tuiCreateTokenFromFactory(() => new TuiTextfieldFillerDirective());
var TuiTextfieldFillerDirective = class _TuiTextfieldFillerDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.filler = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldFillerDirective_BaseFactory;
      return function TuiTextfieldFillerDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldFillerDirective_BaseFactory || (ɵTuiTextfieldFillerDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldFillerDirective)))(__ngFactoryType__ || _TuiTextfieldFillerDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldFillerDirective,
      selectors: [["", "tuiTextfieldFiller", ""]],
      inputs: {
        filler: [0, "tuiTextfieldFiller", "filler"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_FILLER, _TuiTextfieldFillerDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldFillerDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldFiller]",
      providers: [tuiProvide(TUI_TEXTFIELD_FILLER, TuiTextfieldFillerDirective)]
    }]
  }], null, {
    filler: [{
      type: Input,
      args: ["tuiTextfieldFiller"]
    }]
  });
})();
var TUI_TEXTFIELD_ICON = tuiCreateTokenFromFactory(() => new TuiTextfieldIconDirective());
var TuiTextfieldIconDirective = class _TuiTextfieldIconDirective extends AbstractTuiController {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldIconDirective_BaseFactory;
      return function TuiTextfieldIconDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldIconDirective_BaseFactory || (ɵTuiTextfieldIconDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldIconDirective)))(__ngFactoryType__ || _TuiTextfieldIconDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldIconDirective,
      selectors: [["", "tuiTextfieldIcon", ""]],
      inputs: {
        icon: [0, "tuiTextfieldIcon", "icon"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_ICON, _TuiTextfieldIconDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldIconDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldIcon]",
      providers: [tuiProvide(TUI_TEXTFIELD_ICON, TuiTextfieldIconDirective)]
    }]
  }], null, {
    icon: [{
      type: Input,
      args: ["tuiTextfieldIcon"]
    }]
  });
})();
var TUI_TEXTFIELD_ICON_LEFT = tuiCreateTokenFromFactory(() => new TuiTextfieldIconLeftDirective());
var TuiTextfieldIconLeftDirective = class _TuiTextfieldIconLeftDirective extends AbstractTuiController {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldIconLeftDirective_BaseFactory;
      return function TuiTextfieldIconLeftDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldIconLeftDirective_BaseFactory || (ɵTuiTextfieldIconLeftDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldIconLeftDirective)))(__ngFactoryType__ || _TuiTextfieldIconLeftDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldIconLeftDirective,
      selectors: [["", "tuiTextfieldIconLeft", ""]],
      inputs: {
        iconStart: [0, "tuiTextfieldIconLeft", "iconStart"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_ICON_LEFT, _TuiTextfieldIconLeftDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldIconLeftDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldIconLeft]",
      providers: [tuiProvide(TUI_TEXTFIELD_ICON_LEFT, TuiTextfieldIconLeftDirective)]
    }]
  }], null, {
    iconStart: [{
      type: Input,
      args: ["tuiTextfieldIconLeft"]
    }]
  });
})();
var TUI_TEXTFIELD_LABEL_OUTSIDE = tuiCreateTokenFromFactory(() => new TuiTextfieldLabelOutsideDirective());
var TuiTextfieldLabelOutsideDirective = class _TuiTextfieldLabelOutsideDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.labelOutside = false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldLabelOutsideDirective_BaseFactory;
      return function TuiTextfieldLabelOutsideDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldLabelOutsideDirective_BaseFactory || (ɵTuiTextfieldLabelOutsideDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldLabelOutsideDirective)))(__ngFactoryType__ || _TuiTextfieldLabelOutsideDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldLabelOutsideDirective,
      selectors: [["", "tuiTextfieldLabelOutside", ""]],
      inputs: {
        labelOutside: [0, "tuiTextfieldLabelOutside", "labelOutside"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_LABEL_OUTSIDE, _TuiTextfieldLabelOutsideDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldLabelOutsideDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldLabelOutside]",
      providers: [tuiProvide(TUI_TEXTFIELD_LABEL_OUTSIDE, TuiTextfieldLabelOutsideDirective)]
    }]
  }], null, {
    labelOutside: [{
      type: Input,
      args: ["tuiTextfieldLabelOutside"]
    }]
  });
})();
var TUI_TEXTFIELD_POSTFIX = tuiCreateTokenFromFactory(() => new TuiTextfieldPostfixDirective());
var TuiTextfieldPostfixDirective = class _TuiTextfieldPostfixDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.postfix = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldPostfixDirective_BaseFactory;
      return function TuiTextfieldPostfixDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldPostfixDirective_BaseFactory || (ɵTuiTextfieldPostfixDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldPostfixDirective)))(__ngFactoryType__ || _TuiTextfieldPostfixDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldPostfixDirective,
      selectors: [["", "tuiTextfieldPostfix", ""]],
      inputs: {
        postfix: [0, "tuiTextfieldPostfix", "postfix"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_POSTFIX, _TuiTextfieldPostfixDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldPostfixDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldPostfix]",
      providers: [tuiProvide(TUI_TEXTFIELD_POSTFIX, TuiTextfieldPostfixDirective)]
    }]
  }], null, {
    postfix: [{
      type: Input,
      args: ["tuiTextfieldPostfix"]
    }]
  });
})();
var TUI_TEXTFIELD_PREFIX = tuiCreateTokenFromFactory(() => new TuiTextfieldPrefixDirective());
var TuiTextfieldPrefixDirective = class _TuiTextfieldPrefixDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.prefix = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldPrefixDirective_BaseFactory;
      return function TuiTextfieldPrefixDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldPrefixDirective_BaseFactory || (ɵTuiTextfieldPrefixDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldPrefixDirective)))(__ngFactoryType__ || _TuiTextfieldPrefixDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldPrefixDirective,
      selectors: [["", "tuiTextfieldPrefix", ""]],
      inputs: {
        prefix: [0, "tuiTextfieldPrefix", "prefix"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_PREFIX, _TuiTextfieldPrefixDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldPrefixDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldPrefix]",
      providers: [tuiProvide(TUI_TEXTFIELD_PREFIX, TuiTextfieldPrefixDirective)]
    }]
  }], null, {
    prefix: [{
      type: Input,
      args: ["tuiTextfieldPrefix"]
    }]
  });
})();
var TUI_TEXTFIELD_SIZE = tuiCreateTokenFromFactory(() => new TuiTextfieldSizeDirective());
var TuiTextfieldSizeDirective = class _TuiTextfieldSizeDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.size = "l";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldSizeDirective_BaseFactory;
      return function TuiTextfieldSizeDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldSizeDirective_BaseFactory || (ɵTuiTextfieldSizeDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldSizeDirective)))(__ngFactoryType__ || _TuiTextfieldSizeDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldSizeDirective,
      selectors: [["", "tuiTextfieldSize", ""]],
      inputs: {
        size: [0, "tuiTextfieldSize", "size"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_SIZE, _TuiTextfieldSizeDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldSizeDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldSize]",
      providers: [tuiProvide(TUI_TEXTFIELD_SIZE, TuiTextfieldSizeDirective)]
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiTextfieldSize"]
    }]
  });
})();
var TuiTextfieldControllerModule = class _TuiTextfieldControllerModule {
  static {
    this.ɵfac = function TuiTextfieldControllerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldControllerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiTextfieldControllerModule,
      declarations: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective],
      imports: [PolymorpheusOutlet, PolymorpheusTemplate],
      exports: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective, PolymorpheusOutlet, PolymorpheusTemplate]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldControllerModule, [{
    type: NgModule,
    args: [{
      imports: [PolymorpheusOutlet, PolymorpheusTemplate],
      declarations: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective],
      exports: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective, PolymorpheusOutlet, PolymorpheusTemplate]
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_WATCHED_CONTROLLER = tuiCreateToken();
var TEXTFIELD_CONTROLLER_PROVIDER = [{
  provide: TUI_TEXTFIELD_WATCHED_CONTROLLER,
  deps: [ChangeDetectorRef, TUI_TEXTFIELD_OPTIONS2, TUI_TEXTFIELD_APPEARANCE, TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TUI_TEXTFIELD_CLEANER, TUI_TEXTFIELD_CUSTOM_CONTENT, TUI_TEXTFIELD_ICON, TUI_TEXTFIELD_ICON_LEFT, TUI_TEXTFIELD_LABEL_OUTSIDE, TUI_TEXTFIELD_SIZE, TUI_TEXTFIELD_PREFIX, TUI_TEXTFIELD_POSTFIX, TUI_TEXTFIELD_FILLER],
  useFactory: (cdr, options, legacyAppearance, ...controllers) => {
    const change$ = merge(...controllers.map(({
      change$: change$2
    }) => change$2 || NEVER)).pipe(tuiWatch(cdr), takeUntilDestroyed());
    change$.subscribe();
    return new TuiTextfieldController(change$, options, legacyAppearance, ...controllers);
  }
}];

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-unfinished-validator.mjs
function tuiCreateUnfinishedValidator(nativeInputGetter, message) {
  return ({
    value
  }) => {
    const nativeInput = nativeInputGetter();
    return value === null && nativeInput && tuiIsHTMLElement(nativeInput.nativeFocusableElement) && tuiIsInput(nativeInput.nativeFocusableElement) && nativeInput.nativeFocusableElement.value !== "" ? {
      unfinished: new TuiValidationError(message)
    } : null;
  };
}
var TuiUnfinishedValidator = class _TuiUnfinishedValidator {
  constructor() {
    this.default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
    this.injector = inject(INJECTOR$1);
    this.tuiUnfinishedValidator = "";
    this.validate = tuiCreateUnfinishedValidator(() => this.injector.get(TUI_FOCUSABLE_ITEM_ACCESSOR), () => this.tuiUnfinishedValidator || this.default());
  }
  static {
    this.ɵfac = function TuiUnfinishedValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiUnfinishedValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiUnfinishedValidator,
      selectors: [["", "tuiUnfinishedValidator", ""]],
      inputs: {
        tuiUnfinishedValidator: "tuiUnfinishedValidator"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiUnfinishedValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiUnfinishedValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiUnfinishedValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)]
    }]
  }], null, {
    tuiUnfinishedValidator: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-value-accessor.mjs
var TUI_VALUE_ACCESSOR_PROVIDER = {
  provide: TUI_VALUE_ACCESSOR,
  deps: [[new Optional(), new Self(), NG_VALUE_ACCESSOR]],
  useFactory: identity
};
var TuiValueAccessorDirective = class _TuiValueAccessorDirective {
  static {
    this.ɵfac = function TuiValueAccessorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValueAccessorDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiValueAccessorDirective,
      selectors: [["", "tuiValueAccessor", ""]],
      features: [ɵɵProvidersFeature([TUI_VALUE_ACCESSOR_PROVIDER])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueAccessorDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiValueAccessor]",
      providers: [TUI_VALUE_ACCESSOR_PROVIDER]
    }]
  }], null, null);
})();
var TuiValueAccessorModule = class _TuiValueAccessorModule {
  static {
    this.ɵfac = function TuiValueAccessorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValueAccessorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiValueAccessorModule,
      declarations: [TuiValueAccessorDirective],
      exports: [TuiValueAccessorDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueAccessorModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiValueAccessorDirective],
      exports: [TuiValueAccessorDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-wrapper.mjs
var TuiWrapperDirective = class _TuiWrapperDirective {
  constructor() {
    this.disabled = false;
    this.readOnly = false;
    this.hover = null;
    this.active = null;
    this.focus = false;
    this.invalid = false;
    this.appearance = "";
  }
  get computedInvalid() {
    return !this.disabled && !this.readOnly && this.invalid;
  }
  get computedFocused() {
    return this.focus && !this.disabled;
  }
  get interactiveState() {
    if (this.disabled) {
      return "disabled";
    }
    if (this.readOnly) {
      return "readonly";
    }
    if (this.active) {
      return "active";
    }
    if (this.hover) {
      return "hover";
    }
    return null;
  }
  get noHover() {
    return this.readOnly || this.hover === false;
  }
  get noActive() {
    return this.readOnly || this.active === false;
  }
  static {
    this.ɵfac = function TuiWrapperDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWrapperDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWrapperDirective,
      selectors: [["", "tuiWrapper", ""]],
      hostAttrs: ["tuiAppearance", ""],
      hostVars: 10,
      hostBindings: function TuiWrapperDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.appearance)("data-state", ctx.interactiveState);
          ɵɵclassProp("_invalid", ctx.computedInvalid)("_focused", ctx.computedFocused)("_no-hover", ctx.noHover)("_no-active", ctx.noActive);
        }
      },
      inputs: {
        disabled: "disabled",
        readOnly: "readOnly",
        hover: "hover",
        active: "active",
        focus: "focus",
        invalid: "invalid",
        appearance: "appearance"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWrapperDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiWrapper]",
      host: {
        tuiAppearance: "",
        "[attr.data-appearance]": "appearance",
        "[class._invalid]": "computedInvalid",
        "[class._focused]": "computedFocused",
        "[attr.data-state]": "interactiveState",
        "[class._no-hover]": "noHover",
        "[class._no-active]": "noActive"
      }
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    hover: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    focus: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();
var TuiWrapperModule = class _TuiWrapperModule {
  static {
    this.ɵfac = function TuiWrapperModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWrapperModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiWrapperModule,
      declarations: [TuiWrapperDirective],
      exports: [TuiWrapperDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWrapperModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiWrapperDirective],
      exports: [TuiWrapperDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-utils.mjs
function tuiCapitalizeFirstLetter(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
var TUI_DATE_MODE_MASKITO_ADAPTER = {
  DMY: "dd/mm/yyyy",
  MDY: "mm/dd/yyyy",
  YMD: "yyyy/mm/dd"
};
function tuiFormatPhone(value, countryCode, phoneMask) {
  if (!value) {
    return "";
  }
  let result = countryCode;
  countryCode = countryCode.replaceAll(/[()]/g, "");
  if (!value.startsWith(countryCode)) {
    value = countryCode + value.replace(CHAR_PLUS, "");
  }
  const splitPhoneMask = phoneMask.split("");
  const splitValue = value.slice(countryCode.length).split("");
  result += " ";
  if (splitValue.length === 0) {
    return result;
  }
  for (const mask of splitPhoneMask) {
    if (splitValue.length === 0) {
      break;
    }
    if (mask === "#") {
      result += splitValue[0] || "";
      splitValue.splice(0, 1);
    } else {
      result += mask;
    }
  }
  return result;
}
var ITEM_SIZE = 1.5;
var CONTENT_SIZE = 2.5;
function tuiGetBorder(hasIcon, hasCleaner = false, hasTooltip = false, hasContent = false, size = "m") {
  const offset = size === "s" ? 0 : 0.25;
  let border = 0;
  if (hasIcon) {
    border += ITEM_SIZE + offset;
  }
  if (hasCleaner) {
    border += ITEM_SIZE + offset;
  }
  if (hasTooltip) {
    border += ITEM_SIZE + offset;
  }
  if (hasContent) {
    border += CONTENT_SIZE + offset;
  }
  return border;
}
function tuiGetMaxAllowedPhoneLength(countries, isoCode) {
  return countries[isoCode].replaceAll(/[()\- ]/g, "").length;
}
function tuiGetSafeAreaSize() {
  if (!CSS.supports("padding-top: env(safe-area-inset-top)")) {
    return 0;
  }
  const div = document.createElement("div");
  div.style.paddingTop = "env(safe-area-inset-top)";
  document.body.appendChild(div);
  const safeAreaSize = parseInt(window.getComputedStyle(div).paddingTop, 10) || 0;
  document.body.removeChild(div);
  return safeAreaSize;
}
var TUI_CACHE_BUSTING_PAYLOAD = `?v=${TUI_VERSION}`;
var DEFAULT_ICONS_PATH = (name) => name.includes(".svg#") ? name : `#${name}`;
function tuiIconsPathFactory(staticPath) {
  const base = staticPath.endsWith("/") ? staticPath : `${staticPath}/`;
  return (name) => {
    if (name.startsWith("tuiIcon")) {
      return `${base}${name}.svg${TUI_CACHE_BUSTING_PAYLOAD}#${name}`;
    }
    return DEFAULT_ICONS_PATH(name);
  };
}
var tuiIsApple = isApple;
function tuiIsPresumedHTMLString(candidate) {
  const trimmed = candidate.trim();
  return trimmed.startsWith("<") && trimmed.endsWith(">");
}
var MASK_AFTER_CODE_REGEXP = /\(#+\)|[#\- ]/g;
function tuiIsoToCountryCode(countriesMasks, isoCode) {
  return countriesMasks[isoCode].replaceAll(MASK_AFTER_CODE_REGEXP, "");
}
function tuiNotKzRegion(value) {
  const region = Number(value.slice(1, 4));
  return region < 600 || region > 799;
}
var WIDTH_SEARCH = 'width="';
var HEIGHT_SEARCH = 'height="';
var START = "<svg";
function tuiProcessIcon(source, name) {
  if (source.includes(`id="${name}"`)) {
    return source;
  }
  const src = source.slice(Math.max(0, source.indexOf(START)));
  const attributes = src.slice(0, Math.max(0, src.indexOf(">")));
  if (!attributes?.includes(WIDTH_SEARCH) || !attributes.includes(HEIGHT_SEARCH)) {
    return `${src.replace(START, `<svg xmlns="http://www.w3.org/2000/svg"><g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg`)}</g></svg>`;
  }
  const indexOfWidth = attributes.indexOf(WIDTH_SEARCH);
  const indexOfHeight = attributes.indexOf(HEIGHT_SEARCH);
  const widthOffset = indexOfWidth + WIDTH_SEARCH.length;
  const heightOffset = indexOfHeight + HEIGHT_SEARCH.length;
  const widthString = attributes.slice(widthOffset, attributes.indexOf('"', widthOffset));
  const heightString = attributes.slice(heightOffset, attributes.indexOf('"', heightOffset));
  if (!heightString || !widthString || widthString.includes("%") || heightString.includes("%") || widthString.includes("em") || heightString.includes("em")) {
    return src.replace(START, `<svg id="${name}"`);
  }
  const width = parseInt(widthString, 10);
  const height = parseInt(heightString, 10);
  return `<g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg  x="50%" y="50%" width="${width / 16}em" height="${height / 16}em" overflow="visible" viewBox="0 0 ${width} ${height}"><svg x="${-width / 2}" y="${-height / 2}">${src}</svg></svg></g>`;
}
var FIXED_DROPDOWN_CONTROLLER_PROVIDER = tuiDropdownOptionsProvider({
  limitWidth: "fixed",
  align: "right"
});

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-tooltip.mjs
var TuiTooltipComponent = class _TuiTooltipComponent extends TuiHintOptionsDirective {
  constructor() {
    super(...arguments);
    this.describeId = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTooltipComponent_BaseFactory;
      return function TuiTooltipComponent_Factory(__ngFactoryType__) {
        return (ɵTuiTooltipComponent_BaseFactory || (ɵTuiTooltipComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiTooltipComponent)))(__ngFactoryType__ || _TuiTooltipComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTooltipComponent,
      selectors: [["tui-tooltip"]],
      inputs: {
        content: "content",
        direction: "direction",
        appearance: "appearance",
        showDelay: "showDelay",
        hideDelay: "hideDelay",
        describeId: "describeId",
        context: "context"
      },
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 7,
      consts: [["automation-id", "tui-tooltip__icon", 3, "tuiHintAppearance", "tuiHintContext", "tuiHintDirection", "tuiHintHideDelay", "tuiHintShowDelay", "tuiTooltip", "tuiTooltipDescribe"]],
      template: function TuiTooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "tui-icon", 0);
        }
        if (rf & 2) {
          ɵɵproperty("tuiHintAppearance", ctx.appearance || "")("tuiHintContext", ctx.context)("tuiHintDirection", ctx.direction)("tuiHintHideDelay", ctx.hideDelay)("tuiHintShowDelay", ctx.showDelay)("tuiTooltip", ctx.content)("tuiTooltipDescribe", ctx.describeId);
        }
      },
      dependencies: [TuiIcon, TuiTooltip],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-tooltip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      inputs: ["content", "direction", "appearance", "showDelay", "hideDelay"],
      template: `<tui-icon
    automation-id="tui-tooltip__icon"
    [tuiHintAppearance]="appearance || ''"
    [tuiHintContext]="context"
    [tuiHintDirection]="direction"
    [tuiHintHideDelay]="hideDelay"
    [tuiHintShowDelay]="showDelay"
    [tuiTooltip]="content"
    [tuiTooltipDescribe]="describeId"
/>
`
    }]
  }], null, {
    describeId: [{
      type: Input
    }],
    context: [{
      type: Input
    }]
  });
})();
var TuiTooltipModule = class _TuiTooltipModule {
  static {
    this.ɵfac = function TuiTooltipModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTooltipModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiTooltipModule,
      declarations: [TuiTooltipComponent],
      imports: [TuiIcon, TuiTooltip],
      exports: [TuiTooltipComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [TuiIcon]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [TuiIcon, TuiTooltip],
      declarations: [TuiTooltipComponent],
      exports: [TuiTooltipComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-primitive-textfield.mjs
var _c0 = ["pre"];
var _c1 = ["focusableElement"];
var _c2 = [[["input"]], [["select"]], [["tuiContent"]], "*"];
var _c3 = ["input", "select", "tuiContent", "*"];
var _c4 = () => ({
  standalone: true
});
var _c5 = (a0) => ({
  $implicit: a0
});
function TuiPrimitiveTextfieldComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiPrimitiveTextfieldComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiPrimitiveTextfieldComponent_div_13_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 19);
  }
  if (rf & 2) {
    const src_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r2.toString());
  }
}
function TuiPrimitiveTextfieldComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_13_tui_icon_1_Template, 1, 1, "tui-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconLeftContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c5, ctx_r2.size));
  }
}
function TuiPrimitiveTextfieldComponent_label_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 20);
    ɵɵprojection(1, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("t-placeholder_raised", ctx_r2.placeholderRaised);
    ɵɵproperty("for", ctx_r2.computedId);
  }
}
function TuiPrimitiveTextfieldComponent_div_21_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 23);
  }
  if (rf & 2) {
    const src_r4 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r4);
  }
}
function TuiPrimitiveTextfieldComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_21_tui_icon_1_Template, 1, 1, "tui-icon", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.controller.customContent);
  }
}
function TuiPrimitiveTextfieldComponent_span_22_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 26);
  }
  if (rf & 2) {
    const src_r6 = ctx.polymorpheusOutlet;
    ɵɵstyleProp("border", "0.25rem solid transparent");
    ɵɵproperty("icon", src_r6.toString());
  }
}
function TuiPrimitiveTextfieldComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 24);
    ɵɵlistener("click.stop", function TuiPrimitiveTextfieldComponent_span_22_Template_span_click_stop_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_span_22_tui_icon_1_Template, 1, 3, "tui-icon", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconCleaner || ctx_r2.controller.options.iconCleaner)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c5, ctx_r2.size));
  }
}
function TuiPrimitiveTextfieldComponent_tui_tooltip_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-tooltip", 27);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("content", ctx_r2.hintOptions == null ? null : ctx_r2.hintOptions.content)("describeId", ctx_r2.computedId);
  }
}
function TuiPrimitiveTextfieldComponent_div_24_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 19);
  }
  if (rf & 2) {
    const src_r7 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r7.toString());
  }
}
function TuiPrimitiveTextfieldComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_24_tui_icon_1_Template, 1, 1, "tui-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c5, ctx_r2.size));
  }
}
var _c6 = ["tuiTextfieldLegacy", ""];
var TuiValueDecorationComponent = class _TuiValueDecorationComponent {
  constructor() {
    this.textfield = inject(TUI_FOCUSABLE_ITEM_ACCESSOR);
    this.fontsReady$ = inject(TUI_FONTS_READY);
    this.prefix$ = new BehaviorSubject("");
    this.pre$ = merge(this.fontsReady$, this.prefix$).pipe(delay(0), filter(() => !!this.pre?.nativeElement.isConnected), map(() => this.pre?.nativeElement.offsetWidth || 0), distinctUntilChanged());
  }
  ngDoCheck() {
    this.prefix$.next(this.prefix);
  }
  get isContextTable() {
    return this.textfield.appearance === "table";
  }
  get filler() {
    const {
      focused,
      placeholder,
      exampleText,
      value,
      textfield
    } = this;
    if (placeholder && exampleText) {
      return "";
    }
    return focused ? exampleText || textfield.filler.slice(value.length) : "";
  }
  get value() {
    return this.textfield.value;
  }
  get prefix() {
    return this.decorationsVisible ? this.textfield.prefix : "";
  }
  get postfix() {
    return this.decorationsVisible ? this.computedPostfix : "";
  }
  get placeholder() {
    return this.textfield.nativeFocusableElement?.placeholder || "";
  }
  get exampleText() {
    return !this.value && this.focused ? this.placeholder : "";
  }
  get decorationsVisible() {
    return !!this.value || this.focused && !this.placeholder;
  }
  get focused() {
    return this.textfield.computedFocused && !this.textfield.readOnly;
  }
  get computedPostfix() {
    return this.textfield.postfix && (this.filler || this.value) ? ` ${this.textfield.postfix}` : this.textfield.postfix;
  }
  static {
    this.ɵfac = function TuiValueDecorationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValueDecorationComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiValueDecorationComponent,
      selectors: [["tui-value-decoration"]],
      viewQuery: function TuiValueDecorationComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pre = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function TuiValueDecorationComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationstart", function TuiValueDecorationComponent_animationstart_HostBindingHandler() {
            return ctx.ngDoCheck();
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_table", ctx.isContextTable)("_filler", ctx.filler);
        }
      },
      decls: 5,
      vars: 4,
      consts: [["pre", ""], [1, "t-prefix", 3, "textContent"], [1, "t-ghost", 3, "textContent"], [1, "t-filler", 3, "textContent"], [1, "t-postfix", 3, "textContent"]],
      template: function TuiValueDecorationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "span", 1, 0)(2, "span", 2)(3, "span", 3)(4, "span", 4);
        }
        if (rf & 2) {
          ɵɵproperty("textContent", ctx.prefix);
          ɵɵadvance(2);
          ɵɵproperty("textContent", ctx.value);
          ɵɵadvance();
          ɵɵproperty("textContent", ctx.filler);
          ɵɵadvance();
          ɵɵproperty("textContent", ctx.postfix);
        }
      },
      styles: ['[_nghost-%COMP%]{position:absolute;display:block;inline-size:100%;line-height:var(--tui-height);margin-top:calc(var(--tui-height) / -2);box-sizing:content-box;color:var(--tui-text-tertiary);animation:tuiPresent 1s;white-space:nowrap}._table[_nghost-%COMP%]{position:static;margin-top:0}._filler[_nghost-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]{line-height:calc(var(--tui-height) - .25rem)}.t-ghost[_ngcontent-%COMP%]{visibility:hidden;white-space:pre;text-overflow:clip}.t-prefix[_ngcontent-%COMP%], .t-postfix[_ngcontent-%COMP%]{white-space:pre;color:var(--tui-text-primary)}.t-filler[_ngcontent-%COMP%]{max-inline-size:100%;white-space:nowrap}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueDecorationComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-value-decoration",
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "[class._table]": "isContextTable",
        "[class._filler]": "filler",
        "(animationstart)": "ngDoCheck()"
      },
      template: '<span\n    #pre\n    class="t-prefix"\n    [textContent]="prefix"\n></span>\n<span\n    class="t-ghost"\n    [textContent]="value"\n></span>\n<span\n    class="t-filler"\n    [textContent]="filler"\n></span>\n<span\n    class="t-postfix"\n    [textContent]="postfix"\n></span>\n',
      styles: [':host{position:absolute;display:block;inline-size:100%;line-height:var(--tui-height);margin-top:calc(var(--tui-height) / -2);box-sizing:content-box;color:var(--tui-text-tertiary);animation:tuiPresent 1s;white-space:nowrap}:host._table{position:static;margin-top:0}:host._filler{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host-context(tui-primitive-textfield[data-size="m"]:not(._label-outside)) :host{line-height:calc(var(--tui-height) - .25rem)}.t-ghost{visibility:hidden;white-space:pre;text-overflow:clip}.t-prefix,.t-postfix{white-space:pre;color:var(--tui-text-primary)}.t-filler{max-inline-size:100%;white-space:nowrap}\n']
    }]
  }], null, {
    pre: [{
      type: ViewChild,
      args: ["pre", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var TUI_ICON_START_PADDINGS = {
  s: 1.25,
  m: 1.75,
  l: 2.25
};
var TuiPrimitiveTextfieldComponent = class _TuiPrimitiveTextfieldComponent extends AbstractTuiInteractive {
  constructor() {
    super(...arguments);
    this.legacyOptions = inject(TUI_TEXTFIELD_OPTIONS2);
    this.el = tuiInjectElement();
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.hintOptions = inject(TuiHintOptionsDirective, {
      optional: true
    });
    this.autofilled = false;
    this.editable = true;
    this.iconCleaner = this.legacyOptions.iconCleaner;
    this.readOnly = false;
    this.invalid = false;
    this.disabled = false;
    this.value = "";
    this.valueChange = new EventEmitter();
  }
  get prefix() {
    return this.controller.prefix;
  }
  get postfix() {
    return this.controller.postfix;
  }
  get filler() {
    return this.controller.filler;
  }
  get nativeFocusableElement() {
    if (this.computedDisabled || !this.focusableElement) {
      return null;
    }
    const {
      nativeElement
    } = this.focusableElement;
    return nativeElement.previousElementSibling || nativeElement;
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.el);
  }
  get appearance() {
    return this.options.appearance() === "table" ? "table" : this.controller.appearance;
  }
  onModelChange(value) {
    this.updateValue(value);
  }
  get labelOutside() {
    return this.appearance === "table" || this.size === "s" || this.controller.labelOutside;
  }
  get size() {
    return this.controller.size;
  }
  get computedInvalid() {
    return !this.readOnly && !this.disabled && this.invalid;
  }
  get inputHidden() {
    return !!this.content?.length;
  }
  get borderStart() {
    return this.iconLeftContent ? this.iconPaddingLeft : 0;
  }
  get borderEnd() {
    return tuiGetBorder(!!this.iconContent, this.hasCleaner, this.hasTooltip, this.hasCustomContent, this.size);
  }
  get hasValue() {
    return !!this.value;
  }
  get hasCleaner() {
    return this.controller.cleaner && this.hasValue && !this.computedDisabled && !this.readOnly;
  }
  get hasTooltip() {
    return !!this.hintOptions?.content && !this.computedDisabled;
  }
  get hasCustomContent() {
    return !!this.controller.customContent;
  }
  get placeholderVisible() {
    const hasDecor = this.nativeFocusableElement?.placeholder || this.prefix || this.postfix || this.filler;
    const showDecor = hasDecor && !this.readOnly && this.computedFocused;
    return !this.hasValue && !showDecor;
  }
  get hasPlaceholder() {
    const placeholder = this.placeholderRaisable || this.placeholderVisible;
    return this.appearance === "table" && !this.nativeFocusableElement?.readOnly && (this.prefix || this.postfix) ? placeholder && !this.value && !this.computedFocused : placeholder;
  }
  get placeholderRaised() {
    return this.placeholderRaisable && (this.computedFocused && !this.readOnly || this.hasValue || this.autofilled);
  }
  get iconContent() {
    return this.controller.icon;
  }
  get iconLeftContent() {
    return this.controller.iconStart;
  }
  get showHint() {
    return !!this.hintOptions?.content && (this.legacyOptions.hintOnDisabled || !this.computedDisabled);
  }
  // Safari expiration date autofill workaround
  get name() {
    return this.nativeFocusableElement?.autocomplete === "cc-exp" ? "ccexpiryyear" : null;
  }
  get computedId() {
    return this.nativeFocusableElement?.id || "";
  }
  getIndent$(element) {
    return fromEvent(element, "scroll").pipe(map(() => -1 * Math.max(element.scrollLeft, 0)));
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  clear() {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.value = "";
    }
    this.updateValue("");
  }
  onMouseDown(event) {
    const {
      nativeFocusableElement
    } = this;
    if (!nativeFocusableElement || event.target === nativeFocusableElement) {
      return;
    }
    event.preventDefault();
    nativeFocusableElement.focus();
  }
  transitionStartHandler({
    propertyName,
    target
  }) {
    const matchedAutofill = propertyName.includes("box-shadow") && target?.matches("input");
    if (matchedAutofill) {
      this.onAutofilled(!this.autofilled);
    }
  }
  onAutofilled(autofilled) {
    this.updateAutofilled(autofilled);
  }
  detectRetargetFromLabel(event) {
    if (tuiRetargetedBoundaryCrossing(event)) {
      event.stopImmediatePropagation();
    }
  }
  get iconPaddingLeft() {
    return TUI_ICON_START_PADDINGS[this.size];
  }
  get placeholderRaisable() {
    return !this.labelOutside;
  }
  updateAutofilled(autofilled) {
    if (this.autofilled === autofilled) {
      return;
    }
    this.autofilled = autofilled;
  }
  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPrimitiveTextfieldComponent_BaseFactory;
      return function TuiPrimitiveTextfieldComponent_Factory(__ngFactoryType__) {
        return (ɵTuiPrimitiveTextfieldComponent_BaseFactory || (ɵTuiPrimitiveTextfieldComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiPrimitiveTextfieldComponent)))(__ngFactoryType__ || _TuiPrimitiveTextfieldComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPrimitiveTextfieldComponent,
      selectors: [["tui-primitive-textfield"]],
      contentQueries: function TuiPrimitiveTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, PolymorpheusOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t);
        }
      },
      viewQuery: function TuiPrimitiveTextfieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusableElement = _t.first);
        }
      },
      hostVars: 15,
      hostBindings: function TuiPrimitiveTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiPrimitiveTextfieldComponent_focusin_HostBindingHandler() {
            return ctx.onFocused(true);
          })("focusout", function TuiPrimitiveTextfieldComponent_focusout_HostBindingHandler() {
            return ctx.onFocused(false);
          })("transitionstart.capture", function TuiPrimitiveTextfieldComponent_transitionstart_capture_HostBindingHandler($event) {
            return ctx.transitionStartHandler($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-border-start", ctx.borderStart, "rem")("--t-border-end", ctx.borderEnd, "rem");
          ɵɵclassProp("_readonly", ctx.readOnly)("_hidden", ctx.inputHidden)("_invalid", ctx.computedInvalid)("_autofilled", ctx.autofilled)("_label-outside", ctx.labelOutside);
        }
      },
      inputs: {
        editable: "editable",
        iconCleaner: "iconCleaner",
        readOnly: "readOnly",
        invalid: "invalid",
        disabled: "disabled",
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiPrimitiveTextfieldComponent), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c3,
      decls: 25,
      vars: 40,
      consts: [["focusableElement", ""], ["decor", ""], [4, "ngIf"], ["automation-id", "tui-primitive-textfield__wrapper", "tuiWrapper", "", 3, "click.prevent.zoneless", "mousedown", "active", "appearance", "disabled", "focus", "hover", "invalid", "readOnly"], ["automation-id", "tui-primitive-textfield__native-input", 1, "t-input", 3, "ngModelChange", "disabled", "id", "ngModel", "ngModelOptions", "readOnly", "tabIndex"], ["automation-id", "tui-primitive-textfield__value", 1, "t-input", "t-input_template"], [1, "t-content"], ["class", "t-icon t-icon_left t-textfield-icon", 4, "ngIf"], [1, "t-wrapper"], ["automation-id", "tui-primitive-textfield__placeholder", "class", "t-placeholder", 3, "t-placeholder_raised", "for", 4, "ngIf"], [1, "t-wrapper-value-decoration"], ["aria-hidden", "true", "automation-id", "tui-primitive-textfield__value-decoration", 1, "t-value-decoration"], [1, "t-icons"], ["automation-id", "tui-primitive-textfield__custom-content", "class", "t-custom-content", 4, "ngIf"], ["appearance", "icon", "automation-id", "tui-primitive-textfield__cleaner", "tuiWrapper", "", "class", "t-cleaner", 3, "click.stop", 4, "ngIf"], ["automation-id", "tui-primitive-textfield__tooltip", "class", "t-tooltip", 3, "content", "describeId", 4, "ngIf"], ["class", "t-icon t-textfield-icon", 4, "ngIf"], [1, "t-icon", "t-icon_left", "t-textfield-icon"], ["tuiAppearance", "icon", 3, "icon", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiAppearance", "icon", 3, "icon"], ["automation-id", "tui-primitive-textfield__placeholder", 1, "t-placeholder", 3, "for"], ["automation-id", "tui-primitive-textfield__custom-content", 1, "t-custom-content"], ["class", "t-custom-icon", 3, "icon", 4, "polymorpheusOutlet"], [1, "t-custom-icon", 3, "icon"], ["appearance", "icon", "automation-id", "tui-primitive-textfield__cleaner", "tuiWrapper", "", 1, "t-cleaner", 3, "click.stop"], [3, "icon", "border", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "icon"], ["automation-id", "tui-primitive-textfield__tooltip", 1, "t-tooltip", 3, "content", "describeId"], [1, "t-icon", "t-textfield-icon"]],
      template: function TuiPrimitiveTextfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c2);
          ɵɵtemplate(0, TuiPrimitiveTextfieldComponent_ng_container_0_Template, 1, 0, "ng-container", 2);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiPrimitiveTextfieldComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
          ɵɵpipe(3, "async");
          ɵɵelementStart(4, "div", 3);
          ɵɵpipe(5, "async");
          ɵɵlistener("click.prevent.zoneless", function TuiPrimitiveTextfieldComponent_Template_div_click_prevent_zoneless_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.detectRetargetFromLabel($event));
          })("mousedown", function TuiPrimitiveTextfieldComponent_Template_div_mousedown_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMouseDown($event));
          });
          ɵɵprojection(6);
          ɵɵprojection(7, 1);
          ɵɵelementStart(8, "input", 4, 0);
          ɵɵlistener("ngModelChange", function TuiPrimitiveTextfieldComponent_Template_input_ngModelChange_8_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onModelChange($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(10, "div", 5);
          ɵɵprojection(11, 2);
          ɵɵelementEnd();
          ɵɵelementStart(12, "div", 6);
          ɵɵtemplate(13, TuiPrimitiveTextfieldComponent_div_13_Template, 2, 4, "div", 7);
          ɵɵelementStart(14, "div", 8);
          ɵɵtemplate(15, TuiPrimitiveTextfieldComponent_label_15_Template, 2, 3, "label", 9);
          ɵɵelementStart(16, "div", 10);
          ɵɵelement(17, "tui-value-decoration", 11, 1);
          ɵɵpipe(19, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(20, "div", 12);
          ɵɵtemplate(21, TuiPrimitiveTextfieldComponent_div_21_Template, 2, 1, "div", 13)(22, TuiPrimitiveTextfieldComponent_span_22_Template, 2, 4, "span", 14)(23, TuiPrimitiveTextfieldComponent_tui_tooltip_23_Template, 1, 2, "tui-tooltip", 15)(24, TuiPrimitiveTextfieldComponent_div_24_Template, 2, 4, "div", 16);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const focusableElement_r8 = ɵɵreference(9);
          const decor_r9 = ɵɵreference(18);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 31, ctx.content == null ? null : ctx.content.changes));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 33, ctx.hintOptions == null ? null : ctx.hintOptions.change$));
          ɵɵadvance(2);
          ɵɵstyleProp("--t-text-indent", ɵɵpipeBind1(5, 35, decor_r9.pre$), "px");
          ɵɵproperty("active", ctx.pseudoActive)("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
          ɵɵadvance(4);
          ɵɵproperty("disabled", ctx.computedDisabled)("id", ctx.id)("ngModel", ctx.value)("ngModelOptions", ɵɵpureFunction0(39, _c4))("readOnly", ctx.readOnly || !ctx.editable)("tabIndex", ctx.computedFocusable ? 0 : -1);
          ɵɵattribute("aria-invalid", ctx.computedInvalid)("name", ctx.name);
          ɵɵadvance(2);
          ɵɵclassProp("t-input_template_hidden", !ctx.inputHidden);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.iconLeftContent);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.hasPlaceholder);
          ɵɵadvance(2);
          ɵɵstyleProp("text-indent", ɵɵpipeBind1(19, 37, ctx.getIndent$(focusableElement_r8)), "px");
          ɵɵclassProp("t-has-value", ctx.value);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ctx.hasCustomContent);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasCleaner);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showHint);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.iconContent);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, PolymorpheusOutlet, TuiWrapperDirective, TuiTooltipComponent, TuiIcon, TuiAppearance, TuiValueDecorationComponent, AsyncPipe],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;text-align:start;border-radius:var(--tui-radius-m);block-size:var(--tui-height);min-block-size:var(--tui-height);max-block-size:var(--tui-height)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0);text-indent:var(--t-text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[inputMode=none][_ngcontent-%COMP%]{caret-color:transparent}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input[_ngcontent-%COMP%]::-webkit-caps-lock-indicator, .t-input[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]{padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em}.t-content[_ngcontent-%COMP%]{display:flex;block-size:100%;inline-size:100%;box-sizing:border-box;align-items:center;overflow:hidden}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-l)}.t-wrapper[_ngcontent-%COMP%]{flex:1;min-inline-size:0;padding-inline-end:.25rem}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-text-negative)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin:0 .125rem 0 -.375rem}[data-size=m][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin-inline-start:-.125rem;margin-inline-end:.375rem}[data-size=l][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin-inline-end:.75rem}.t-icons[_ngcontent-%COMP%]{display:flex;align-items:center}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{margin-inline-end:-.125rem}[data-size=s][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{margin-inline-end:-.375rem}[_nghost-%COMP%]:not([data-size=s])   .t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-inline-start:.25rem}[_nghost-%COMP%]     input{transition:box-shadow .01s}._autofilled[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled[_nghost-%COMP%]   .t-value-decoration[_ngcontent-%COMP%]:not(.t-has-value){visibility:hidden}[data-size=s][_nghost-%COMP%]   tui-icon[_ngcontent-%COMP%]{border-width:.25rem}.t-custom-content[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-inline-size:2rem;block-size:2rem;pointer-events:none}.t-custom-icon[_ngcontent-%COMP%]{inline-size:2rem;block-size:100%}.t-input[_ngcontent-%COMP%]:not(:first-child){display:none}[data-size][_nghost-%COMP%]   .t-input_template[_ngcontent-%COMP%]{display:flex;inline-size:calc(100% - 1rem);max-inline-size:calc(100% - 1rem);align-items:center;pointer-events:none;padding-inline-end:0}.t-input_template_hidden[_ngcontent-%COMP%]{display:none}.t-text-template[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-wrapper-value-decoration[_ngcontent-%COMP%]{position:relative;pointer-events:none}._readonly[_nghost-%COMP%]   .t-textfield-icon[_ngcontent-%COMP%]     [tuiAppearance][data-appearance=icon]{pointer-events:none}@media (hover: hover) and (pointer: fine){[_nghost-%COMP%]:not(._readonly):not(._disabled):hover   .t-textfield-icon[_ngcontent-%COMP%]     [tuiAppearance][data-appearance=icon]:after{color:var(--tui-text-secondary)}}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiPrimitiveTextfieldComponent.prototype, "getIndent$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-primitive-textfield",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiPrimitiveTextfieldComponent), TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        "[attr.data-size]": "size",
        "[class._readonly]": "readOnly",
        "[class._hidden]": "inputHidden",
        "[class._invalid]": "computedInvalid",
        "[class._autofilled]": "autofilled",
        "[style.--t-border-start.rem]": "borderStart",
        "[style.--t-border-end.rem]": "borderEnd",
        "[class._label-outside]": "labelOutside",
        "(focusin)": "onFocused(true)",
        "(focusout)": "onFocused(false)",
        "(transitionstart.capture)": "transitionStartHandler($event)"
      },
      template: `<ng-container *ngIf="content?.changes | async" />
<ng-container *ngIf="hintOptions?.change$ | async" />
<div
    automation-id="tui-primitive-textfield__wrapper"
    tuiWrapper
    [active]="pseudoActive"
    [appearance]="appearance"
    [disabled]="disabled"
    [focus]="computedFocused"
    [hover]="pseudoHover"
    [invalid]="computedInvalid"
    [readOnly]="readOnly"
    [style.--t-text-indent.px]="decor.pre$ | async"
    (click.prevent.zoneless)="detectRetargetFromLabel($event)"
    (mousedown)="onMouseDown($event)"
>
    <ng-content select="input" />
    <ng-content select="select" />
    <input
        #focusableElement
        automation-id="tui-primitive-textfield__native-input"
        class="t-input"
        [attr.aria-invalid]="computedInvalid"
        [attr.name]="name"
        [disabled]="computedDisabled"
        [id]="id"
        [ngModel]="value"
        [ngModelOptions]="{standalone: true}"
        [readOnly]="readOnly || !editable"
        [tabIndex]="computedFocusable ? 0 : -1"
        (ngModelChange)="onModelChange($event)"
    />
    <div
        automation-id="tui-primitive-textfield__value"
        class="t-input t-input_template"
        [class.t-input_template_hidden]="!inputHidden"
    >
        <ng-content select="tuiContent" />
    </div>
    <div class="t-content">
        <div
            *ngIf="iconLeftContent"
            class="t-icon t-icon_left t-textfield-icon"
        >
            <tui-icon
                *polymorpheusOutlet="iconLeftContent as src; context: {$implicit: size}"
                tuiAppearance="icon"
                [icon]="src.toString()"
            />
        </div>
        <div class="t-wrapper">
            <label
                *ngIf="hasPlaceholder"
                automation-id="tui-primitive-textfield__placeholder"
                class="t-placeholder"
                [class.t-placeholder_raised]="placeholderRaised"
                [for]="computedId"
            >
                <ng-content />
            </label>
            <div class="t-wrapper-value-decoration">
                <tui-value-decoration
                    #decor
                    aria-hidden="true"
                    automation-id="tui-primitive-textfield__value-decoration"
                    class="t-value-decoration"
                    [class.t-has-value]="value"
                    [style.textIndent.px]="getIndent$(focusableElement) | async"
                />
            </div>
        </div>
        <div class="t-icons">
            <div
                *ngIf="hasCustomContent"
                automation-id="tui-primitive-textfield__custom-content"
                class="t-custom-content"
            >
                <tui-icon
                    *polymorpheusOutlet="controller.customContent as src"
                    class="t-custom-icon"
                    [icon]="src"
                />
            </div>
            <span
                *ngIf="hasCleaner"
                appearance="icon"
                automation-id="tui-primitive-textfield__cleaner"
                tuiWrapper
                class="t-cleaner"
                (click.stop)="clear()"
            >
                <tui-icon
                    *polymorpheusOutlet="
                        iconCleaner || controller.options.iconCleaner as src;
                        context: {$implicit: size}
                    "
                    [icon]="src.toString()"
                    [style.border]="'0.25rem solid transparent'"
                />
            </span>
            <tui-tooltip
                *ngIf="showHint"
                automation-id="tui-primitive-textfield__tooltip"
                class="t-tooltip"
                [content]="hintOptions?.content"
                [describeId]="computedId"
            />
            <div
                *ngIf="iconContent"
                class="t-icon t-textfield-icon"
            >
                <tui-icon
                    *polymorpheusOutlet="iconContent as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    [icon]="src.toString()"
                />
            </div>
        </div>
    </div>
</div>
`,
      styles: [':host{position:relative;display:block;text-align:start;border-radius:var(--tui-radius-m);block-size:var(--tui-height);min-block-size:var(--tui-height);max-block-size:var(--tui-height)}:host[data-size=s]{--tui-height: var(--tui-height-s);font:var(--tui-font-text-s)}:host[data-size=m]{--tui-height: var(--tui-height-m);font:var(--tui-font-text-s)}:host[data-size=l]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}:host :host-context(*:disabled){pointer-events:none}.t-input{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0);text-indent:var(--t-text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input:-webkit-autofill,.t-input:-webkit-autofill:hover,.t-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[inputMode=none]{caret-color:transparent}.t-input:-webkit-autofill,.t-input:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input::-webkit-caps-lock-indicator,.t-input::-webkit-contacts-auto-fill-button,.t-input::-webkit-credit-card-auto-fill-button,.t-input::-webkit-credentials-auto-fill-button,.t-input::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input::placeholder{color:var(--tui-text-tertiary);opacity:0}:host._focused:not(._readonly) .t-input::placeholder,:host-context(tui-primitive-textfield._focused:not(._readonly)) .t-input::placeholder,:host-context(tui-textarea._focused:not(._readonly)) .t-input::placeholder,:host-context(tui-text-area._focused:not(._readonly)) .t-input::placeholder{opacity:1}:host[data-size=s] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="s"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="s"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="s"]):not(tui-text-area){padding:0 var(--tui-padding-s)}:host[data-size=m] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="m"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="m"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="m"]):not(tui-text-area){padding:0 var(--tui-padding-m)}:host[data-size=l] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="l"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="l"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="l"]):not(tui-text-area){padding:0 var(--tui-padding-l)}:host._disabled .t-input,.t-input :host-context(tui-primitive-textfield._disabled),.t-input :host-context(tui-textarea._disabled),.t-input :host-context(tui-text-area._disabled){pointer-events:none}:host[data-size=l]:not(._label-outside) .t-input,.t-input :host-context(tui-primitive-textfield[data-size="l"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1.25rem}:host[data-size=m]:not(._label-outside) .t-input,.t-input :host-context(tui-primitive-textfield[data-size="m"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1rem}:host[data-size=l]:not(._label-outside) .t-input{padding-top:1.25rem}:host[data-size=l]:not(._label-outside) .t-input:-webkit-autofill+.t-content .t-placeholder{font-size:.8156rem;transform:translateY(-.625rem)}:host[data-size=m]:not(._label-outside) .t-input:-webkit-autofill+.t-content .t-placeholder{font-size:.69rem;transform:translateY(-.5rem)}:host._hidden input.t-input,.t-input :host-context(tui-primitive-textfield._hidden){opacity:0;text-indent:-10em}.t-content{display:flex;block-size:100%;inline-size:100%;box-sizing:border-box;align-items:center;overflow:hidden}:host[data-size=s] .t-content{padding:0 var(--tui-padding-s)}:host[data-size=m] .t-content{padding:0 var(--tui-padding-m)}:host[data-size=l] .t-content{padding:0 var(--tui-padding-l)}.t-wrapper{flex:1;min-inline-size:0;padding-inline-end:.25rem}.t-placeholder{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised{transform:translateY(-.625rem)}:host[data-size=m] .t-placeholder_raised{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}:host._invalid:not(._focused) .t-placeholder_raised,:host._invalid:not(._focused):hover .t-placeholder_raised{color:var(--tui-text-negative)}:host._focused .t-placeholder,:host[data-size=m]._focused._label-outside .t-placeholder,:host[data-size=l]._focused._label-outside .t-placeholder{color:var(--tui-text-tertiary)}:host[data-size=l] .t-placeholder{font:var(--tui-font-text-m);line-height:1.25rem}:host[data-size=l] .t-placeholder_raised{font-size:.8156rem}:host[data-size=m]._focused:not(._label-outside) .t-placeholder,:host[data-size=l]._focused:not(._label-outside) .t-placeholder{color:var(--tui-text-primary)}.t-cleaner{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}:host._readonly .t-cleaner,:host._disabled .t-cleaner{pointer-events:none}.t-icon{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}:host[data-size=s] .t-icon_left{margin:0 .125rem 0 -.375rem}:host[data-size=m] .t-icon_left{margin-inline-start:-.125rem;margin-inline-end:.375rem}:host[data-size=l] .t-icon_left{margin-inline-end:.75rem}.t-icons{display:flex;align-items:center}:host[data-size=m] .t-icons{margin-inline-end:-.125rem}:host[data-size=s] .t-icons{margin-inline-end:-.375rem}:host:not([data-size=s]) .t-icons>:not(:first-child){margin-inline-start:.25rem}:host ::ng-deep input{transition:box-shadow .01s}:host._autofilled[data-size=s] .t-placeholder,:host._autofilled._label-outside .t-placeholder,:host._autofilled .t-value-decoration:not(.t-has-value){visibility:hidden}:host[data-size=s] tui-icon{border-width:.25rem}.t-custom-content{position:relative;display:flex;align-items:center;justify-content:center;min-inline-size:2rem;block-size:2rem;pointer-events:none}.t-custom-icon{inline-size:2rem;block-size:100%}.t-input:not(:first-child){display:none}:host[data-size] .t-input_template{display:flex;inline-size:calc(100% - 1rem);max-inline-size:calc(100% - 1rem);align-items:center;pointer-events:none;padding-inline-end:0}.t-input_template_hidden{display:none}.t-text-template{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-wrapper-value-decoration{position:relative;pointer-events:none}:host._readonly .t-textfield-icon ::ng-deep [tuiAppearance][data-appearance=icon]{pointer-events:none}@media (hover: hover) and (pointer: fine){:host:not(._readonly):not(._disabled):hover .t-textfield-icon ::ng-deep [tuiAppearance][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n']
    }]
  }], null, {
    focusableElement: [{
      type: ViewChild,
      args: ["focusableElement"]
    }],
    content: [{
      type: ContentChildren,
      args: [PolymorpheusOutlet, {
        descendants: true
      }]
    }],
    editable: [{
      type: Input
    }],
    iconCleaner: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    getIndent$: []
  });
})();
var TuiPrimitiveTextfieldDirective = class _TuiPrimitiveTextfieldDirective extends AbstractTuiTextfieldHost {
  constructor() {
    super(...arguments);
    this.host = inject(TuiPrimitiveTextfieldComponent);
  }
  get readOnly() {
    return this.host.readOnly || !this.host.editable;
  }
  onValueChange(value) {
    this.host.onModelChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPrimitiveTextfieldDirective_BaseFactory;
      return function TuiPrimitiveTextfieldDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPrimitiveTextfieldDirective_BaseFactory || (ɵTuiPrimitiveTextfieldDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPrimitiveTextfieldDirective)))(__ngFactoryType__ || _TuiPrimitiveTextfieldDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPrimitiveTextfieldDirective,
      selectors: [["tui-primitive-textfield"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiPrimitiveTextfieldDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-primitive-textfield",
      providers: [tuiAsTextfieldHost(TuiPrimitiveTextfieldDirective)]
    }]
  }], null, null);
})();
var TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.autoId = tuiInjectId();
    this.el = tuiInjectElement();
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.host = inject(TUI_TEXTFIELD_HOST);
    this.host.process(this.el);
  }
  get id() {
    return this.el.id || this.autoId;
  }
  get inputMode() {
    return this.el.inputMode || this.host.inputMode;
  }
  static {
    this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldComponent,
      selectors: [["input", "tuiTextfieldLegacy", ""], ["textarea", "tuiTextfieldLegacy", ""]],
      hostAttrs: ["type", "text"],
      hostVars: 7,
      hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiTextfieldComponent_input_HostBindingHandler($event) {
            return ctx.host.onValueChange($event.target.value);
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("tabIndex", ctx.host.focusable ? 0 : -1)("readOnly", ctx.host.readOnly)("value", ctx.host.value);
          ɵɵattribute("id", ctx.id)("inputMode", ctx.inputMode)("aria-invalid", ctx.host.invalid)("disabled", ctx.host.disabled || null);
        }
      },
      features: [ɵɵProvidersFeature([TEXTFIELD_CONTROLLER_PROVIDER])],
      attrs: _c6,
      decls: 0,
      vars: 0,
      template: function TuiTextfieldComponent_Template(rf, ctx) {
      },
      styles: ['[_nghost-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0);text-indent:var(--t-text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:hover, [_nghost-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}[inputMode=none][_nghost-%COMP%]{caret-color:transparent}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}[_nghost-%COMP%]::-webkit-caps-lock-indicator, [_nghost-%COMP%]::-webkit-contacts-auto-fill-button, [_nghost-%COMP%]::-webkit-credit-card-auto-fill-button, [_nghost-%COMP%]::-webkit-credentials-auto-fill-button, [_nghost-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}[_nghost-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   [_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost{padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em}textarea[_nghost-%COMP%]{white-space:pre-wrap}textarea[_nghost-%COMP%]   tui-textarea._ios[_nghost-%COMP%], tui-textarea._ios   [_nghost-%COMP%], textarea[_nghost-%COMP%]   tui-text-area._ios[_nghost-%COMP%], tui-text-area._ios   [_nghost-%COMP%]{padding-left:.8125rem}textarea[_nghost-%COMP%]   tui-textarea[data-size="s"][_nghost-%COMP%], tui-textarea[data-size="s"]   [_nghost-%COMP%], textarea[_nghost-%COMP%]   tui-textarea[data-size="m"][_nghost-%COMP%], tui-textarea[data-size="m"]   [_nghost-%COMP%]{font:var(--tui-font-text-s)}textarea[_nghost-%COMP%]   tui-textarea[data-size="l"][_nghost-%COMP%], tui-textarea[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m)}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "input[tuiTextfieldLegacy], textarea[tuiTextfieldLegacy]",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        type: "text",
        "[attr.id]": "id",
        "[attr.inputMode]": "inputMode",
        "[attr.aria-invalid]": "host.invalid",
        "[attr.disabled]": "host.disabled || null",
        "[tabIndex]": "host.focusable ? 0 : -1",
        "[readOnly]": "host.readOnly",
        "[value]": "host.value",
        "(input)": "host.onValueChange($event.target.value)"
      },
      styles: [':host{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0);text-indent:var(--t-text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}:host:-webkit-autofill,:host:-webkit-autofill:hover,:host:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}:host[inputMode=none]{caret-color:transparent}:host:-webkit-autofill,:host:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}:host::-webkit-caps-lock-indicator,:host::-webkit-contacts-auto-fill-button,:host::-webkit-credit-card-auto-fill-button,:host::-webkit-credentials-auto-fill-button,:host::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}:host::placeholder{color:var(--tui-text-tertiary);opacity:0}:host._focused:not(._readonly) :host::placeholder,:host-context(tui-primitive-textfield._focused:not(._readonly)) :host::placeholder,:host-context(tui-textarea._focused:not(._readonly)) :host::placeholder,:host-context(tui-text-area._focused:not(._readonly)) :host::placeholder{opacity:1}:host[data-size=s] :host,:host :host-context(tui-primitive-textfield[data-size="s"]):not(tui-primitive-textfield),:host :host-context(tui-textarea[data-size="s"]):not(tui-textarea),:host :host-context(tui-text-area[data-size="s"]):not(tui-text-area){padding:0 var(--tui-padding-s)}:host[data-size=m] :host,:host :host-context(tui-primitive-textfield[data-size="m"]):not(tui-primitive-textfield),:host :host-context(tui-textarea[data-size="m"]):not(tui-textarea),:host :host-context(tui-text-area[data-size="m"]):not(tui-text-area){padding:0 var(--tui-padding-m)}:host[data-size=l] :host,:host :host-context(tui-primitive-textfield[data-size="l"]):not(tui-primitive-textfield),:host :host-context(tui-textarea[data-size="l"]):not(tui-textarea),:host :host-context(tui-text-area[data-size="l"]):not(tui-text-area){padding:0 var(--tui-padding-l)}:host._disabled :host,:host :host-context(tui-primitive-textfield._disabled),:host :host-context(tui-textarea._disabled),:host :host-context(tui-text-area._disabled){pointer-events:none}:host[data-size=l]:not(._label-outside) :host,:host :host-context(tui-primitive-textfield[data-size="l"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1.25rem}:host[data-size=m]:not(._label-outside) :host,:host :host-context(tui-primitive-textfield[data-size="m"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1rem}:host[data-size=l]:not(._label-outside) :host{padding-top:1.25rem}:host[data-size=l]:not(._label-outside) :host:-webkit-autofill+.t-content .t-placeholder{font-size:.8156rem;transform:translateY(-.625rem)}:host[data-size=m]:not(._label-outside) :host:-webkit-autofill+.t-content .t-placeholder{font-size:.69rem;transform:translateY(-.5rem)}:host._hidden input:host,:host :host-context(tui-primitive-textfield._hidden){opacity:0;text-indent:-10em}textarea:host{white-space:pre-wrap}textarea:host :host-context(tui-textarea._ios),textarea:host :host-context(tui-text-area._ios){padding-left:.8125rem}textarea:host :host-context(tui-textarea[data-size="s"]),textarea:host :host-context(tui-textarea[data-size="m"]){font:var(--tui-font-text-s)}textarea:host :host-context(tui-textarea[data-size="l"]){font:var(--tui-font-text-m)}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiPrimitiveTextfieldModule = class _TuiPrimitiveTextfieldModule {
  static {
    this.ɵfac = function TuiPrimitiveTextfieldModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPrimitiveTextfieldModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiPrimitiveTextfieldModule,
      declarations: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent, TuiValueDecorationComponent],
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiWrapperModule, TuiTooltipModule, TuiIcon, TuiAppearance],
      exports: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, TuiWrapperModule, TuiTooltipModule, TuiIcon]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiWrapperModule, TuiTooltipModule, TuiIcon, TuiAppearance],
      declarations: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent, TuiValueDecorationComponent],
      exports: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent]
    }]
  }], null, null);
})();
var TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS = TUI_TEXTFIELD_DEFAULT_OPTIONS;
var TUI_PRIMITIVE_TEXTFIELD_OPTIONS = TUI_TEXTFIELD_OPTIONS2;
var tuiPrimitiveTextfieldOptionsProvider = tuiTextfieldOptionsProvider;

export {
  TUI_COUNTRIES_MASKS,
  TUI_FOCUSABLE_ITEM_ACCESSOR,
  tuiAsFocusableItemAccessor,
  TUI_FONTS_READY,
  TUI_ICON_STARTS,
  TUI_IS_APPLE,
  TUI_IS_CHROMIUM,
  TUI_IS_FIREFOX,
  TUI_IS_STACKBLITZ,
  TUI_MONTH_FORMATTER,
  TUI_MONTH_FORMATTER_PROVIDER,
  TUI_SANITIZER,
  TUI_TEXTFIELD_APPEARANCE,
  TUI_TEXTFIELD_HOST,
  tuiAsTextfieldHost,
  TUI_TOUCH_SUPPORTED,
  TUI_VALUE_ACCESSOR,
  AbstractTuiInteractive,
  AbstractTuiControl,
  tuiAsControl,
  AbstractTuiNativeSelect,
  AbstractTuiTextfieldHost,
  AbstractTuiController,
  AbstractTuiMultipleControl,
  TuiNamedDay,
  AbstractTuiNullableControl,
  TuiStringifiableItem,
  TuiLegacyDropdownOpenMonitorDirective,
  TuiTextfieldController,
  TUI_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_TEXTFIELD_OPTIONS2 as TUI_TEXTFIELD_OPTIONS,
  tuiTextfieldOptionsProvider,
  TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
  TuiTextfieldAppearanceDirective,
  TUI_TEXTFIELD_CLEANER,
  TuiTextfieldCleanerDirective,
  TUI_TEXTFIELD_CUSTOM_CONTENT,
  TuiTextfieldCustomContentDirective,
  TUI_TEXTFIELD_FILLER,
  TuiTextfieldFillerDirective,
  TUI_TEXTFIELD_ICON,
  TuiTextfieldIconDirective,
  TUI_TEXTFIELD_ICON_LEFT,
  TuiTextfieldIconLeftDirective,
  TUI_TEXTFIELD_LABEL_OUTSIDE,
  TuiTextfieldLabelOutsideDirective,
  TUI_TEXTFIELD_POSTFIX,
  TuiTextfieldPostfixDirective,
  TUI_TEXTFIELD_PREFIX,
  TuiTextfieldPrefixDirective,
  TUI_TEXTFIELD_SIZE,
  TuiTextfieldSizeDirective,
  TuiTextfieldControllerModule,
  TUI_TEXTFIELD_WATCHED_CONTROLLER,
  TEXTFIELD_CONTROLLER_PROVIDER,
  tuiCreateUnfinishedValidator,
  TuiUnfinishedValidator,
  TUI_VALUE_ACCESSOR_PROVIDER,
  TuiValueAccessorDirective,
  TuiValueAccessorModule,
  TuiWrapperDirective,
  TuiWrapperModule,
  tuiCapitalizeFirstLetter,
  TUI_DATE_MODE_MASKITO_ADAPTER,
  tuiFormatPhone,
  tuiGetBorder,
  tuiGetMaxAllowedPhoneLength,
  tuiGetSafeAreaSize,
  TUI_CACHE_BUSTING_PAYLOAD,
  DEFAULT_ICONS_PATH,
  tuiIconsPathFactory,
  tuiIsApple,
  tuiIsPresumedHTMLString,
  tuiIsoToCountryCode,
  tuiNotKzRegion,
  tuiProcessIcon,
  FIXED_DROPDOWN_CONTROLLER_PROVIDER,
  TuiTooltipComponent,
  TuiTooltipModule,
  TuiValueDecorationComponent,
  TUI_ICON_START_PADDINGS,
  TuiPrimitiveTextfieldComponent,
  TuiPrimitiveTextfieldDirective,
  TuiTextfieldComponent,
  TuiPrimitiveTextfieldModule,
  TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_PRIMITIVE_TEXTFIELD_OPTIONS,
  tuiPrimitiveTextfieldOptionsProvider
};
//# sourceMappingURL=chunk-RMUCPZS4.js.map
