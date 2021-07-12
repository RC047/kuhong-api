// This script only work in Html or Html5!

var Battery = (function(self) {

  var _events = 'chargingchange chargingtimechange dischargingtimechange levelchange'
    , _battery = navigator.getBattery || navigator.battery || navigator.mozBattery
    , _status = null
    , _statusCallback = function() {}
    , _updateCallback = function() {}
    , STATUS_UNSUPPORTED = 'not supported';

  /** Function: getStatus
   * Register callback function to retrieve status
   *
   * Parameters:
   * (Function) fn(status, error) - callback function
   */
  self.getStatus = function(fn) {
    if(_status === STATUS_UNSUPPORTED) {
      fn(null, _status);
    } else if(_status) {
      fn(_status);
    } else {
      _statusCallback = fn;
    }
  };

  /* Function: onUpdate
   * Register callback function when battery status changes
   *
   * Parameters:
   * (Function) fn(status) - callback function
   */
  self.onUpdate = function(fn) {
    _updateCallback = fn;
  };

  function eventHandler(status) {
    _status = status;
    _updateCallback(_status);
  }

  function registerEventHandler(battery) {
    _events.split(' ').forEach(function(evt) {
      battery.addEventListener(evt, eventHandler);
    });
  }

  if(_battery instanceof Function) {
    _battery.call(navigator)
      .then(function(status) {
        _status = status;
        _statusCallback(_status);
        registerEventHandler(_status);
      }, function() {
        _status = STATUS_UNSUPPORTED;
      });
  } else if(_battery) {
    _status = _battery;
    registerEventHandler(_battery);
  } else {
    _status = STATUS_UNSUPPORTED;
  }

  return self;
})(Battery || {});
