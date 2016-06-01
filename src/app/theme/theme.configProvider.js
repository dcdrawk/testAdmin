/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  var basic = {
    default: '#ffffff',
    defaultText: '#666666',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };

  // main functional color scheme
  // var colorScheme = {
  //   primary: '#209e91',
  //   info: '#2dacd1',
  //   success: '#90b900',
  //   warning: '#dfb81c',
  //   danger: '#e85656',
  // };



  var defaultTheme = {
    primary: '#FF9800',
    info: '#FFC107',
    success: '#8BC34A',
    warning: '#FF7043',
    danger: '#e53935',
  };

  var redTheme = {
    primary: '#d32f2f',
    info: '#FF7043',
    success: '#4CAF50',
    warning: '#FF7043',
    danger: '#e53935',
  };

  var orangeTheme = {
    primary: '#FF9800',
    info: '#FFC107',
    success: '#8BC34A',
    warning: '#FF7043',
    danger: '#e53935',
  };

  var purpleTheme = {
    primary: '#9C27B0',
    info: '#AB47BC',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#e53935',
  };

  var deepPurpleTheme = {
    primary: '#673AB7',
    info: '#7E57C2',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#e53935',
  };

  var indigoTheme = {
    primary: '#3F51B5',
    info: '#5C6BC0',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#e53935',
  };

  var blueTheme = {
    primary: '#2196F3',
    info: '#42A5F5',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#e53935',
  };

  var cyanTheme = {
    primary: '#00BCD4',
    info: '#26C6DA',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#e53935',
  };

  var tealTheme = {
    primary: '#009688',
    info: '#26A69A',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#e53935',
  };

  var greenTheme = {
    primary: '#4CAF50',
    info: '#66BB6A',
    success: '#4CAF50',
    warning: '#FF7043',
    danger: '#e53935',
  };

  var brownTheme = {
    primary: '#795548',
    info: '#8D6E63',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#e53935',
  };

  var blueGreyTheme = {
    primary: '#607D8B',
    info: '#90A4AE',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#e53935',
  };

  var colorScheme = orangeTheme;

  // dashboard colors for charts
  // var dashboardColors = {
  //   blueStone: '#005562',
  //   surfieGreen: '#0e8174',
  //   silverTree: '#6eba8c',
  //   gossip: '#b9f2a1',
  //   white: '#10c4b5',
  // };



  var dashboardOrange = {
    blueStone: '#E65100',
    surfieGreen: '#F57C00',
    silverTree: '#FFA726',
    gossip: '#FFC107',
    white: '#F57F17',
  };

  var dashboardRed = {
    blueStone: '#d32f2f',
    surfieGreen: '#e53935',
    silverTree: '#ef5350',
    gossip: '#e57373',
    white: '#ff5252',
  };

  var dashboardPurple = {
    blueStone: '#9C27B0',
    surfieGreen: '#BA68C8',
    silverTree: '#AB47BC',
    gossip: '#CE93D8',
    white: '#8E24AA',
  };

  var dashboardDeepPurple = {
    blueStone: '#673AB7',
    surfieGreen: '#7E57C2',
    silverTree: '#9575CD',
    gossip: '#B39DDB',
    white: '#7C4DFF',
  };

  var dashboardIndigo = {
    blueStone: '#3F51B5',
    surfieGreen: '#5C6BC0',
    silverTree: '#7986CB',
    gossip: '#9FA8DA',
    white: '#536DFE',
  };

  var dashboardBlue = {
    blueStone: '#2196F3',
    surfieGreen: '#42A5F5',
    silverTree: '#64B5F6',
    gossip: '#90CAF9',
    white: '#40C4FF',
  };

  var dashboardCyan = {
    blueStone: '#00BCD4',
    surfieGreen: '#26C6DA',
    silverTree: '#4DD0E1',
    gossip: '#80DEEA',
    white: '#18FFFF',
  };

  var dashboardTeal = {
    blueStone: '#009688',
    surfieGreen: '#26A69A',
    silverTree: '#4DB6AC',
    gossip: '#80CBC4',
    white: '#64FFDA',
  };

  var dashboardGreen = {
    blueStone: '#4CAF50',
    surfieGreen: '#66BB6A',
    silverTree: '#81C784',
    gossip: '#A5D6A7',
    white: '#69F0AE',
  };
  var dashboardBrown = {
    blueStone: '#795548',
    surfieGreen: '#8D6E63',
    silverTree: '#A1887F',
    gossip: '#BCAAA4',
    white: '#D7CCC8',
  };
  var dashboardBlueGrey = {
    blueStone: '#607D8B',
    surfieGreen: '#78909C',
    silverTree: '#90A4AE',
    gossip: '#B0BEC5',
    white: '#CFD8DC',
  };
  // var dashboardRed = {
  //   blueStone: '#d32f2f',
  //   surfieGreen: '#e53935',
  //   silverTree: '#ef5350',
  //   gossip: '#e57373',
  //   white: '#ff5252',
  // };
  // var dashboardRed = {
  //   blueStone: '#d32f2f',
  //   surfieGreen: '#e53935',
  //   silverTree: '#ef5350',
  //   gossip: '#e57373',
  //   white: '#ff5252',
  // };

  var dashboardColors = dashboardBlue;

  angular.module('BlurAdmin.theme')
    .provider('baConfig', configProvider);

  /** @ngInject */
  function configProvider(colorHelper) {
    var conf = {
      theme: {
        blur: false,
      },
      colors: {
        default: basic.default,
        defaultText: basic.defaultText,
        border: basic.border,
        borderDark: basic.borderDark,

        primary: colorScheme.primary,
        info: colorScheme.info,
        success: colorScheme.success,
        warning: colorScheme.warning,
        danger: colorScheme.danger,

        primaryLight: colorHelper.tint(colorScheme.primary, 30),
        infoLight: colorHelper.tint(colorScheme.info, 30),
        successLight: colorHelper.tint(colorScheme.success, 30),
        warningLight: colorHelper.tint(colorScheme.warning, 30),
        dangerLight: colorHelper.tint(colorScheme.danger, 30),

        primaryDark: colorHelper.shade(colorScheme.primary, 15),
        infoDark: colorHelper.shade(colorScheme.info, 15),
        successDark: colorHelper.shade(colorScheme.success, 15),
        warningDark: colorHelper.shade(colorScheme.warning, 15),
        dangerDark: colorHelper.shade(colorScheme.danger, 15),

        dashboard: {
          blueStone: dashboardColors.blueStone,
          surfieGreen: dashboardColors.surfieGreen,
          silverTree: dashboardColors.silverTree,
          gossip: dashboardColors.gossip,
          white: dashboardColors.white,
        },
      }
    };

    conf.changeTheme = function(theme) {
      angular.merge(conf.theme, theme)
    };

    conf.changeColors = function(colors) {
      angular.merge(conf.colors, colors)
    };

    conf.$get = function () {
      delete conf.$get;
      return conf;
    };
    return conf;
  }
})();
