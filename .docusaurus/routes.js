import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '557'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'df3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4be'),
            routes: [
              {
                path: '/docs/Assets/Effect/',
                component: ComponentCreator('/docs/Assets/Effect/', 'd2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Actor',
                component: ComponentCreator('/docs/Assets/Effect/Actor', '791'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/EffectPack',
                component: ComponentCreator('/docs/Assets/Effect/EffectPack', 'a48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/EffectTimerModifier',
                component: ComponentCreator('/docs/Assets/Effect/EffectTimerModifier', '8f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Injector',
                component: ComponentCreator('/docs/Assets/Effect/Injector', '0b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/InjectorRemoverEffect',
                component: ComponentCreator('/docs/Assets/Effect/InjectorRemoverEffect', '605'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Linker',
                component: ComponentCreator('/docs/Assets/Effect/Linker', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/ModifierRemoverEffect',
                component: ComponentCreator('/docs/Assets/Effect/ModifierRemoverEffect', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Numerable/',
                component: ComponentCreator('/docs/Assets/Effect/Numerable/', 'c3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Numerable/Float',
                component: ComponentCreator('/docs/Assets/Effect/Numerable/Float', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Numerable/Int',
                component: ComponentCreator('/docs/Assets/Effect/Numerable/Int', 'b49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/String',
                component: ComponentCreator('/docs/Assets/Effect/String', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Vector/',
                component: ComponentCreator('/docs/Assets/Effect/Vector/', 'f15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Vector/Vector2',
                component: ComponentCreator('/docs/Assets/Effect/Vector/Vector2', '8cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Vector/Vector2Int',
                component: ComponentCreator('/docs/Assets/Effect/Vector/Vector2Int', 'cf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Vector/Vector3',
                component: ComponentCreator('/docs/Assets/Effect/Vector/Vector3', '768'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Effect/Vector/Vector3Int',
                component: ComponentCreator('/docs/Assets/Effect/Vector/Vector3Int', '96f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/', 'b2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/', '99c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/ActorStatExtractor',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/ActorStatExtractor', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/Alter',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/Alter', '547'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/AlterVectorBySecondary',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/AlterVectorBySecondary', '42b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/Chain',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/Chain', 'e5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/DistanceBySourceVector',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/DistanceBySourceVector', 'cea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/FloatToIntAltered',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/FloatToIntAltered', '138'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/IntToFloatAltered',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/IntToFloatAltered', '6c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/ToUniformVector',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/ToUniformVector', '934'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Stat/ToVectorIndex',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Stat/ToVectorIndex', '256'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/', '73d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Alter',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Alter', '1c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Chain',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Chain', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/ParentActor',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/ParentActor', '0f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/ToUniformVector',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/ToUniformVector', '74a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/ToVectorIndex',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/ToVectorIndex', '2ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Vector/Cross',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Vector/Cross', '057'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Vector/Direction',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Vector/Direction', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Vector/Dot',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Vector/Dot', 'a08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Vector/Normalize',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Vector/Normalize', '816'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Vector/ProjectOnPlane',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Vector/ProjectOnPlane', 'd9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Vector/Reflect',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Vector/Reflect', '740'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Adapter/Value/Vector/Substract',
                component: ComponentCreator('/docs/Assets/Misc/Adapter/Value/Vector/Substract', 'e70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/',
                component: ComponentCreator('/docs/Assets/Misc/Injector/', '01a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/InjectorDefinitionModel',
                component: ComponentCreator('/docs/Assets/Misc/Injector/InjectorDefinitionModel', '772'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/InjectorModel/',
                component: ComponentCreator('/docs/Assets/Misc/Injector/InjectorModel/', '691'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/InjectorModel/AbsoluteValue',
                component: ComponentCreator('/docs/Assets/Misc/Injector/InjectorModel/AbsoluteValue', 'ddf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/InjectorModel/AlterModifiers',
                component: ComponentCreator('/docs/Assets/Misc/Injector/InjectorModel/AlterModifiers', '692'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/InjectorModel/Combine',
                component: ComponentCreator('/docs/Assets/Misc/Injector/InjectorModel/Combine', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/InjectorModel/Limit',
                component: ComponentCreator('/docs/Assets/Misc/Injector/InjectorModel/Limit', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorDefinitionModel',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorDefinitionModel', '1f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/', '86e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/AbsoluteValue',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/AbsoluteValue', 'f22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/Add',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/Add', '283'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/AddValueByCondition',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/AddValueByCondition', 'a81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/AlterModifiers',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/AlterModifiers', '0bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/EasedValue',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/EasedValue', 'e24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/InserStatToSigSepStat',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/InserStatToSigSepStat', 'af8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/Limit',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/Limit', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/MergeSigSepStats',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/MergeSigSepStats', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/Multiply',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/Multiply', '383'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/MultiplyByCondition',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/MultiplyByCondition', '4e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/Rate',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/Rate', '435'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/Injector/StatInjectorModel/RateByCondition',
                component: ComponentCreator('/docs/Assets/Misc/Injector/StatInjectorModel/RateByCondition', '11f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/PremadeAssetPack',
                component: ComponentCreator('/docs/Assets/Misc/PremadeAssetPack', 'baf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/PremadeRelationPack',
                component: ComponentCreator('/docs/Assets/Misc/PremadeRelationPack', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/', '86f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/ MultiStat/',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/ MultiStat/', 'b4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/ MultiStat/Difference',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/ MultiStat/Difference', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/ MultiStat/Dispatcher',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/ MultiStat/Dispatcher', '7e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/ MultiStat/Distance',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/ MultiStat/Distance', 'e47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/ MultiStat/Dot',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/ MultiStat/Dot', '535'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/ MultiStat/Sum',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/ MultiStat/Sum', 'c98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/ MultiStat/VectorIndex',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/ MultiStat/VectorIndex', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/MultiStatDynamic',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/MultiStatDynamic', '733'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/SingleStat/ActorNullCheck',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/SingleStat/ActorNullCheck', '16e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/SingleStat/NumerableComparer',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/SingleStat/NumerableComparer', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/SingleStat/String',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/SingleStat/String', '08b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/SingleStat/VectorIndex',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/SingleStat/VectorIndex', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/SingleStat/VectorMagnitude',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/SingleStat/VectorMagnitude', 'e6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatCondition/SingleStatDynamic',
                component: ComponentCreator('/docs/Assets/Misc/StatCondition/SingleStatDynamic', '72d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatScaler/',
                component: ComponentCreator('/docs/Assets/Misc/StatScaler/', '64d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatScaler/Multi/',
                component: ComponentCreator('/docs/Assets/Misc/StatScaler/Multi/', '7c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatScaler/Multi/Distance',
                component: ComponentCreator('/docs/Assets/Misc/StatScaler/Multi/Distance', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatScaler/Multi/Dot',
                component: ComponentCreator('/docs/Assets/Misc/StatScaler/Multi/Dot', '109'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatScaler/Single/',
                component: ComponentCreator('/docs/Assets/Misc/StatScaler/Single/', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/StatScaler/Single/MapValue',
                component: ComponentCreator('/docs/Assets/Misc/StatScaler/Single/MapValue', '2c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Misc/ValueDistributer/',
                component: ComponentCreator('/docs/Assets/Misc/ValueDistributer/', '9e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Postprocessors/',
                component: ComponentCreator('/docs/Assets/Processor/Postprocessors/', '306'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Postprocessors/CounterEffect',
                component: ComponentCreator('/docs/Assets/Processor/Postprocessors/CounterEffect', '545'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Postprocessors/ModifierReplacer',
                component: ComponentCreator('/docs/Assets/Processor/Postprocessors/ModifierReplacer', '882'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/', '25d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/AttributeStatEliminater',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/AttributeStatEliminater', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/CastRestrictor',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/CastRestrictor', '346'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/CounterEffect',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/CounterEffect', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/Director',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/Director', '08b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/EffectAttributeEliminater',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/EffectAttributeEliminater', '0a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/HitRate',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/HitRate', 'ab0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/Immune',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/Immune', 'd57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Preprocessors/ModifierCountLimit',
                component: ComponentCreator('/docs/Assets/Processor/Preprocessors/ModifierCountLimit', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/',
                component: ComponentCreator('/docs/Assets/Processor/Processors/', 'f6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Add',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Add', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Injector',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Injector', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/InjectorRemover',
                component: ComponentCreator('/docs/Assets/Processor/Processors/InjectorRemover', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Linker',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Linker', 'ebd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/ModifierRemover',
                component: ComponentCreator('/docs/Assets/Processor/Processors/ModifierRemover', '964'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Set',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Set', 'edc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/', '4c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Contribution/ConditionalModifier',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Contribution/ConditionalModifier', '0a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Contribution/CriticalHit',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Contribution/CriticalHit', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Contribution/Modifier',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Contribution/Modifier', 'd0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Contribution/MultiplierAgainstSupressor',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Contribution/MultiplierAgainstSupressor', 'd3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Feedback',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Feedback', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Postcontribution/BlockByResultAttribute',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Postcontribution/BlockByResultAttribute', '87a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Postcontribution/Limiter',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Postcontribution/Limiter', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Postcontribution/MinMaxOffset',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Postcontribution/MinMaxOffset', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Postcontribution/Reflector',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Postcontribution/Reflector', '48d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Postcontribution/Shield',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Postcontribution/Shield', '852'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Postprocess/CounterEffect',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Postprocess/CounterEffect', '584'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Postprocess/ModifierReplacer',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Postprocess/ModifierReplacer', '925'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Precontribution/CastRestrictor',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Precontribution/CastRestrictor', 'b2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Precontribution/CounterEffect',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Precontribution/CounterEffect', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Precontribution/Director',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Precontribution/Director', '7c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Precontribution/EffectAttributeEliminater',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Precontribution/EffectAttributeEliminater', 'de6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Precontribution/HitRate',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Precontribution/HitRate', '3f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Precontribution/Immune',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Precontribution/Immune', 'eaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Precontribution/ModifierCountLimit',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Precontribution/ModifierCountLimit', 'a1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/Standard/Precontribution/Reflector',
                component: ComponentCreator('/docs/Assets/Processor/Processors/Standard/Precontribution/Reflector', '017'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Processor/Processors/TimerModifier',
                component: ComponentCreator('/docs/Assets/Processor/Processors/TimerModifier', 'd10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/Container',
                component: ComponentCreator('/docs/Assets/Stat/Container', '22b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/Environment',
                component: ComponentCreator('/docs/Assets/Stat/Environment', '20f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/Repository',
                component: ComponentCreator('/docs/Assets/Stat/Repository', '102'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/', '9c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Actor',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Actor', 'c83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/ConditionalModifier',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/ConditionalModifier', '00b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/DurationModifier',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/DurationModifier', '384'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/EffectBundle',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/EffectBundle', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/EffectPack',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/EffectPack', '84f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/EventBasedEffect',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/EventBasedEffect', '1c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Generator',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Generator', 'c6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Limiter',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Limiter', '59a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Modifier',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Modifier', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Numerable/',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Numerable/', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Numerable/Clamped',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Numerable/Clamped', 'de3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Numerable/EdgeValue',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Numerable/EdgeValue', 'b57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Redirector/',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Redirector/', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Redirector/CounterEffect',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Redirector/CounterEffect', 'fea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Redirector/Director',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Redirector/Director', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Redirector/Reflector',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Redirector/Reflector', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/StateBasedEffect',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/StateBasedEffect', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/String',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/String', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatDefinition/Vector',
                component: ComponentCreator('/docs/Assets/Stat/StatDefinition/Vector', 'b49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatKey/',
                component: ComponentCreator('/docs/Assets/Stat/StatKey/', '995'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Assets/Stat/StatKey/StatKeyModel_SigSep',
                component: ComponentCreator('/docs/Assets/Stat/StatKey/StatKeyModel_SigSep', 'e4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/assets',
                component: ComponentCreator('/docs/category/assets', 'beb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/components',
                component: ComponentCreator('/docs/category/components', '84a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/contribution',
                component: ComponentCreator('/docs/category/contribution', '8a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/core-concepts',
                component: ComponentCreator('/docs/category/core-concepts', '409'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/interface',
                component: ComponentCreator('/docs/category/interface', 'a84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/misc',
                component: ComponentCreator('/docs/category/misc', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/postcontribution',
                component: ComponentCreator('/docs/category/postcontribution', 'a1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/postprocess',
                component: ComponentCreator('/docs/category/postprocess', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/precontribution',
                component: ComponentCreator('/docs/category/precontribution', '22c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/processor',
                component: ComponentCreator('/docs/category/processor', 'd9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/single-stat',
                component: ComponentCreator('/docs/category/single-stat', '468'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/stat',
                component: ComponentCreator('/docs/category/stat', 'c4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/stat-key',
                component: ComponentCreator('/docs/category/stat-key', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Components/Actor',
                component: ComponentCreator('/docs/Components/Actor', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Components/Effector',
                component: ComponentCreator('/docs/Components/Effector', 'e33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Components/PowerWorld',
                component: ComponentCreator('/docs/Components/PowerWorld', 'ca9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CoreConcepts/EffectProcessFlow',
                component: ComponentCreator('/docs/CoreConcepts/EffectProcessFlow', '59a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CoreConcepts/HowStatValuesAreEvaluated',
                component: ComponentCreator('/docs/CoreConcepts/HowStatValuesAreEvaluated', 'df3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CoreConcepts/RelativeStatSeperation',
                component: ComponentCreator('/docs/CoreConcepts/RelativeStatSeperation', '364'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CoreConcepts/SignatureSeperatedStats',
                component: ComponentCreator('/docs/CoreConcepts/SignatureSeperatedStats', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CoreConcepts/SourceSeperatedStats',
                component: ComponentCreator('/docs/CoreConcepts/SourceSeperatedStats', 'f59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CoreConcepts/UseConditionalModifiers',
                component: ComponentCreator('/docs/CoreConcepts/UseConditionalModifiers', '8ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GettingStarted',
                component: ComponentCreator('/docs/GettingStarted', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Interface/Editor',
                component: ComponentCreator('/docs/Interface/Editor', '6be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction',
                component: ComponentCreator('/docs/Introduction', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/',
                component: ComponentCreator('/docs/Samples/', '47e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/3DCells/',
                component: ComponentCreator('/docs/Samples/3DCells/', '588'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/', 'b8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/Effector/',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/Effector/', '6eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/Effector/EnterExit',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/Effector/EnterExit', '410'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/Effector/OnCollide',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/Effector/OnCollide', '476'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/Effector/OnStay',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/Effector/OnStay', '073'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/Skill/',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/Skill/', '702'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/Skill/CastingModel',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/Skill/CastingModel', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/Skill/SkillState',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/Skill/SkillState', '75b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/GeneralExpansions/Skill/TargetingModel',
                component: ComponentCreator('/docs/Samples/GeneralExpansions/Skill/TargetingModel', '2fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Samples/SlayTheSphere/',
                component: ComponentCreator('/docs/Samples/SlayTheSphere/', 'f37'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
