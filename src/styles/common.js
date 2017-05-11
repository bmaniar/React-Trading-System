import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#loginButton': {
    'backgroundColor': '#000000',
    'color': '#ffffff'
  },
  '#loginBackground': {
    'backgroundColor': '#C0BBC5'
  },
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'fontFamily': ''Gloria Hallelujah', cursive',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'justifyContent': 'center'
  },
  '#app': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'traderDesktop': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    // width: 100%;
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'fontFamily': 'Arial'
  },
  'headerDiv': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'height': [{ 'unit': 'px', 'value': 35 }]
  },
  '#headerUserName': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontStyle': 'italic'
  },
  '#headerUserNameXs': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontStyle': 'italic'
  },
  '#headerRow': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'headerTitle': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'headerTitleXs': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'display': 'inline !important'
  },
  '#signOut': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#0000ff',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'traderTaskbarButton': {
    'height': [{ 'unit': 'px', 'value': 25 }],
    'color': 'white',
    'backgroundColor': 'black',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'marginRight': [{ 'unit': 'px', 'value': -7 }],
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'tableHeader': {
    'backgroundColor': 'gray',
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'navButton': {
    'height': [{ 'unit': 'px', 'value': 25 }],
    'backgroundColor': 'black',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'navButton-black': {
    'height': [{ 'unit': 'px', 'value': 25 }],
    'backgroundColor': 'black',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -7 }],
    'marginRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'navButton-black:focus': {
    'filter': 'invert(100%)'
  },
  'nav-image-black': {
    'filter': 'invert(100%)'
  },
  '#creationTimeId': {
    'display': 'inline-block'
  },
  'test-legend-class': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'display': 'inline',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'legendDiv': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'marginLeft': [{ 'unit': 'px', 'value': 50 }],
    '<w480': {
      'display': 'inline-block'
    }
  },
  'chartDiv': {
    'backgroundColor': '#ffffff',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 650 }],
    'position': 'relative'
  },
  'chart:hover svg': {
    'MozTransform': 'scale(1.1)',
    'WebkitTransform': 'scale(1.1)',
    'transform': 'scale(1.1)',
    'transition': 'all 0.5s'
  },
  'svg': {
    'transition': 'all 0.5s'
  },
  'quantityDiv': {
    'height': [{ 'unit': 'px', 'value': 49 }]
  },
  'traderTable': {
    'backgroundColor': 'rgba(255, 255, 255, 0.7)',
    'opacity': '0.8',
    'color': 'rgba(0, 0, 0, 0.7)'
  },
  'react-bs-table': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'react-bs-table-container': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  '#image-table-toggle': {
    'filter': 'invert(100%)'
  },
  'react-redux-modal rrm-holder scroll rrm-contentm-medium': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 500 }]
  },
  'react-redux-modal rrm-holder scroll rrm-content rrm-title rr-title-actions': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'textAlign': 'center',
    'float': 'left'
  },
  'modal-btn': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'modal-buttonDiv': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c0c0c0' }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'react-d3-basic__bar_stack_horizontal bar': {
    'height': [{ 'unit': 'px', 'value': 10 }]
  },
  // notification
  'dropdown-toggle': {
    'marginLeft': [{ 'unit': 'px', 'value': 18 }],
    'marginTop': [{ 'unit': 'px', 'value': 22 }]
  },
  'notification-container': {
    'boxSizing': 'border-box',
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999999',
    'width': [{ 'unit': 'px', 'value': 320 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }],
    'maxHeight': [{ 'unit': '%V', 'value': NaN }],
    'overflowX': 'hidden',
    'overflowY': 'auto'
  },
  'notification': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 58 }],
    'borderRadius': '2px',
    'color': '#fff',
    'backgroundColor': '#ccc',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '#999' }],
    'cursor': 'pointer',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.2 }],
    'position': 'relative',
    'opacity': '0.9',
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'notification title': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.2 }],
    'fontWeight': 'bold',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'notification:hover': {
    'opacity': '1'
  },
  'notification:focus': {
    'opacity': '1'
  },
  'notification-enter': {
    'visibility': 'hidden',
    'transform': 'translate3d(100%, 0, 0)'
  },
  'notification-enternotification-enter-active': {
    'visibility': 'visible',
    'transform': 'translate3d(0, 0, 0)',
    'transition': 'all 0.4s'
  },
  'notification-leave': {
    'visibility': 'visible',
    'transform': 'translate3d(0, 0, 0)'
  },
  'notification-leavenotification-leave-active': {
    'visibility': 'hidden',
    'transform': 'translate3d(100%, 0, 0)',
    'transition': 'all 0.4s'
  },
  'notification:before': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 15 }],
    'marginTop': [{ 'unit': 'px', 'value': -14 }],
    'display': 'block',
    'fontFamily': ''Notification'',
    'width': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 28 }]
  },
  'notification-info': {
    'backgroundColor': '#2f96b4'
  },
  'notification-info:before': {
    'content': '"\f05a"'
  },
  'notification-success': {
    'backgroundColor': '#51a351'
  },
  'notification-success:before': {
    'content': '"\f058"'
  },
  'notification-warning': {
    'backgroundColor': '#f89406'
  },
  'notification-warning:before': {
    'content': '"\f06a"'
  },
  'notification-error': {
    'backgroundColor': '#bd362f'
  },
  'notification-error:before': {
    'content': '"\f057"'
  }
});
