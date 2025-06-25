import {
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_DROPDOWN_COMPONENT,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_HINT_OPTIONS,
  TUI_ICON_START,
  TUI_IDENTITY_VALUE_TRANSFORMER,
  TUI_IS_MOBILE,
  TUI_LAST_DAY,
  TUI_MONTHS,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintHover,
  TuiTextfieldComponent,
  TuiWithAppearance,
  toSignal,
  tuiAppearanceOptionsProvider,
  tuiAppearanceState,
  tuiControlValue,
  tuiCreateOptions,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiExtractI18n,
  tuiProvideOptions,
  tuiWatch,
  tuiWithStyles
} from "./chunk-F2RBK7JG.js";
import {
  NgControl
} from "./chunk-O3XW73IH.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  Optional,
  Self,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-ZNP3AC3U.js";
import {
  map,
  of
} from "./chunk-565WYVFV.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-tokens.mjs
var TUI_CALENDAR_DATE_STREAM = tuiCreateToken();
function tuiDateStreamWithTransformer(transformer) {
  return {
    provide: TUI_CALENDAR_DATE_STREAM,
    deps: [[new Optional(), new Self(), NgControl], [new Optional(), transformer]],
    useFactory: tuiControlValueFactory
  };
}
function tuiControlValueFactory(control, transformer) {
  return control ? tuiControlValue(control).pipe(map((value) => transformer ? transformer?.fromControlValue(value) : value)) : of(null);
}
var TUI_DATE_VALUE_TRANSFORMER = tuiCreateToken(TUI_IDENTITY_VALUE_TRANSFORMER);
var TUI_DATE_RANGE_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_DATE_TIME_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_TIME_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_CONFIRM_WORDS = tuiCreateTokenFromFactory(tuiExtractI18n("confirm"));
var TUI_CANCEL_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("cancel"));
var TUI_DONE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("done"));
var TUI_MORE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("more"));
var TUI_HIDE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("hide"));
var TUI_SHOW_ALL_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("showAll"));
var TUI_OTHER_DATE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("otherDate"));
var TUI_CHOOSE_DAY_OR_RANGE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("mobileCalendarTexts"));
var TUI_FROM_TO_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("range"));
var TUI_PLUS_MINUS_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("countTexts"));
var TUI_TIME_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("time"));
var TUI_DATE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("dateTexts"));
var TUI_DIGITAL_INFORMATION_UNITS = tuiCreateTokenFromFactory(tuiExtractI18n("digitalInformationUnits"));
var TUI_COPY_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("copyTexts"));
var TUI_PASSWORD_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("passwordTexts"));
var TUI_CALENDAR_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n("shortCalendarMonths"));
var TUI_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("fileTexts"));
var TUI_PAGINATION_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("pagination"));
var TUI_INPUT_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("inputFileTexts"));
var TUI_MULTI_SELECT_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("multiSelectTexts"));
var TUI_COUNTRIES = tuiCreateTokenFromFactory(tuiExtractI18n("countries"));
var TUI_PREVIEW_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("previewTexts"));
var TUI_PREVIEW_ZOOM_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("zoomTexts"));
var TUI_INTERNATIONAL_SEARCH = tuiCreateTokenFromFactory(tuiExtractI18n("phoneSearch"));
var TUI_INPUT_DATE_DEFAULT_OPTIONS = {
  icon: () => "@tui.calendar",
  min: TUI_FIRST_DAY,
  max: TUI_LAST_DAY,
  nativePicker: false
};
var [TUI_INPUT_DATE_OPTIONS, tuiInputDateOptionsProvider] = tuiCreateOptions(TUI_INPUT_DATE_DEFAULT_OPTIONS);
var TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: String,
  identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
  disabledItemHandler: TUI_FALSE_HANDLER
};
var TUI_ITEMS_HANDLERS = tuiCreateToken(TUI_DEFAULT_ITEMS_HANDLERS);
function tuiItemsHandlersProvider(options) {
  return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}
var TUI_MOBILE_CALENDAR = tuiCreateToken();
var TUI_MOBILE_CALENDAR_PROVIDER = {
  provide: TUI_DROPDOWN_COMPONENT,
  useFactory: () => inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, {
    optional: true
  }) || inject(TUI_DROPDOWN_COMPONENT, {
    skipSelf: true
  })
};
var TUI_MONTH_FORMATTER = tuiCreateTokenFromFactory(() => inject(TUI_MONTHS).pipe(map((months) => (date) => {
  if (!date) {
    return "";
  }
  return `${months[date.month] ?? ""} ${date.formattedYear}`;
})));
var TUI_PREVIEW_ICONS_DEFAULT = {
  rotate: "@tui.rotate-ccw-square",
  prev: "@tui.arrow-left",
  next: "@tui.arrow-right",
  zoomIn: "@tui.plus",
  zoomOut: "@tui.minus",
  zoomReset: "@tui.minimize"
};
var TUI_PREVIEW_ICONS = tuiCreateToken(TUI_PREVIEW_ICONS_DEFAULT);
function tuiPreviewIconsProvider(icons) {
  return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}
var TUI_VALIDATION_ERRORS = tuiCreateToken({});
var tuiValidationErrorsProvider = (useValue) => ({
  provide: TUI_VALIDATION_ERRORS,
  useValue
});

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-tooltip.mjs
var [TUI_TOOLTIP_OPTIONS, tuiTooltipOptionsProvider] = tuiCreateOptions({
  icon: "",
  appearance: "icon"
});
var TuiTooltipStyles = class _TuiTooltipStyles {
  static {
    this.ɵfac = function TuiTooltipStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTooltipStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTooltipStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-tooltip"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiTooltipStyles_Template(rf, ctx) {
      },
      styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip],[tuiTooltip][data-size=s]{font-size:1.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover) and (pointer: fine){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-tooltip"
      },
      styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip],[tuiTooltip][data-size=s]{font-size:1.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover) and (pointer: fine){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"]
    }]
  }], null, null);
})();
var TuiTooltip = class _TuiTooltip {
  constructor() {
    this.textfield = inject(TuiTextfieldComponent, {
      optional: true
    });
    this.isMobile = inject(TUI_IS_MOBILE);
    this.describe = inject(TuiHintDescribe);
    this.driver = inject(TuiHintHover);
    this.nothing = tuiWithStyles(TuiTooltipStyles);
    this.state = tuiAppearanceState(toSignal(inject(TuiHintHover).pipe(map((hover) => hover ? "hover" : null), tuiWatch()), {
      initialValue: null
    }));
    this.size = "m";
  }
  ngDoCheck() {
    if (this.textfield?.id) {
      this.describe.tuiHintDescribe = this.textfield.id;
    }
  }
  onClick(event) {
    if (this.isMobile) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.driver.toggle();
    }
  }
  static {
    this.ɵfac = function TuiTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTooltip)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTooltip,
      selectors: [["tui-icon", "tuiTooltip", ""]],
      hostAttrs: ["tuiTooltip", ""],
      hostVars: 1,
      hostBindings: function TuiTooltip_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.prevent", function TuiTooltip_click_prevent_HostBindingHandler() {
            return 0;
          })("mousedown", function TuiTooltip_mousedown_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon
      }]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiHintDescribe,
        inputs: ["tuiHintDescribe", "tuiTooltipDescribe"]
      }, {
        directive: TuiHintDirective,
        inputs: ["tuiHint", "tuiTooltip", "tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltip, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[tuiTooltip]",
      providers: [tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon
      }],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiHintDescribe,
        inputs: ["tuiHintDescribe: tuiTooltipDescribe"]
      }, {
        directive: TuiHintDirective,
        inputs: ["tuiHint: tuiTooltip", "tuiHintAppearance", "tuiHintContext"]
      }],
      host: {
        tuiTooltip: "",
        "[attr.data-size]": "size",
        "(click.prevent)": "0",
        "(mousedown)": "onClick($event)"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

export {
  TUI_CALENDAR_DATE_STREAM,
  tuiDateStreamWithTransformer,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_TIME_VALUE_TRANSFORMER,
  TUI_CONFIRM_WORDS,
  TUI_CANCEL_WORD,
  TUI_DONE_WORD,
  TUI_MORE_WORD,
  TUI_HIDE_TEXT,
  TUI_SHOW_ALL_TEXT,
  TUI_OTHER_DATE_TEXT,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_FROM_TO_TEXTS,
  TUI_PLUS_MINUS_TEXTS,
  TUI_TIME_TEXTS,
  TUI_DATE_TEXTS,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_COPY_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_CALENDAR_MONTHS,
  TUI_FILE_TEXTS,
  TUI_PAGINATION_TEXTS,
  TUI_INPUT_FILE_TEXTS,
  TUI_MULTI_SELECT_TEXTS,
  TUI_COUNTRIES,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TUI_INTERNATIONAL_SEARCH,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  tuiInputDateOptionsProvider,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_ITEMS_HANDLERS,
  tuiItemsHandlersProvider,
  TUI_MOBILE_CALENDAR,
  TUI_MOBILE_CALENDAR_PROVIDER,
  TUI_MONTH_FORMATTER,
  TUI_PREVIEW_ICONS_DEFAULT,
  TUI_PREVIEW_ICONS,
  tuiPreviewIconsProvider,
  TUI_VALIDATION_ERRORS,
  tuiValidationErrorsProvider,
  TUI_TOOLTIP_OPTIONS,
  tuiTooltipOptionsProvider,
  TuiTooltip
};
//# sourceMappingURL=chunk-4ZY343MJ.js.map
