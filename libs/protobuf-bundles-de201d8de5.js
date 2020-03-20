var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pattern = (function() {

    /**
     * Namespace pattern.
     * @exports pattern
     * @namespace
     */
    var pattern = {};

    pattern.ActionEvent = (function() {

        /**
         * Properties of an ActionEvent.
         * @memberof pattern
         * @interface IActionEvent
         * @property {string|null} [Id] ActionEvent Id
         * @property {string|null} [Type] ActionEvent Type
         * @property {number|null} [LimitIntimacy] ActionEvent LimitIntimacy
         * @property {number|null} [LimitStar] ActionEvent LimitStar
         * @property {number|null} [WeightBase] ActionEvent WeightBase
         * @property {Array.<string>|null} [NextEvent] ActionEvent NextEvent
         * @property {Array.<string>|null} [CompleteReward] ActionEvent CompleteReward
         * @property {string|null} [SCompleteReward] ActionEvent SCompleteReward
         * @property {number|null} [IntimacyUp] ActionEvent IntimacyUp
         */

        /**
         * Constructs a new ActionEvent.
         * @memberof pattern
         * @classdesc Represents an ActionEvent.
         * @implements IActionEvent
         * @constructor
         * @param {pattern.IActionEvent=} [properties] Properties to set
         */
        function ActionEvent(properties) {
            this.NextEvent = [];
            this.CompleteReward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActionEvent Id.
         * @member {string} Id
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.Id = "";

        /**
         * ActionEvent Type.
         * @member {string} Type
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.Type = "";

        /**
         * ActionEvent LimitIntimacy.
         * @member {number} LimitIntimacy
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.LimitIntimacy = 0;

        /**
         * ActionEvent LimitStar.
         * @member {number} LimitStar
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.LimitStar = 0;

        /**
         * ActionEvent WeightBase.
         * @member {number} WeightBase
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.WeightBase = 0;

        /**
         * ActionEvent NextEvent.
         * @member {Array.<string>} NextEvent
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.NextEvent = $util.emptyArray;

        /**
         * ActionEvent CompleteReward.
         * @member {Array.<string>} CompleteReward
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.CompleteReward = $util.emptyArray;

        /**
         * ActionEvent SCompleteReward.
         * @member {string} SCompleteReward
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.SCompleteReward = "";

        /**
         * ActionEvent IntimacyUp.
         * @member {number} IntimacyUp
         * @memberof pattern.ActionEvent
         * @instance
         */
        ActionEvent.prototype.IntimacyUp = 0;

        /**
         * Creates a new ActionEvent instance using the specified properties.
         * @function create
         * @memberof pattern.ActionEvent
         * @static
         * @param {pattern.IActionEvent=} [properties] Properties to set
         * @returns {pattern.ActionEvent} ActionEvent instance
         */
        ActionEvent.create = function create(properties) {
            return new ActionEvent(properties);
        };

        /**
         * Encodes the specified ActionEvent message. Does not implicitly {@link pattern.ActionEvent.verify|verify} messages.
         * @function encode
         * @memberof pattern.ActionEvent
         * @static
         * @param {pattern.IActionEvent} message ActionEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
            if (message.LimitIntimacy != null && message.hasOwnProperty("LimitIntimacy"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.LimitIntimacy);
            if (message.LimitStar != null && message.hasOwnProperty("LimitStar"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LimitStar);
            if (message.WeightBase != null && message.hasOwnProperty("WeightBase"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.WeightBase);
            if (message.NextEvent != null && message.NextEvent.length)
                for (var i = 0; i < message.NextEvent.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.NextEvent[i]);
            if (message.CompleteReward != null && message.CompleteReward.length)
                for (var i = 0; i < message.CompleteReward.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.CompleteReward[i]);
            if (message.SCompleteReward != null && message.hasOwnProperty("SCompleteReward"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.SCompleteReward);
            if (message.IntimacyUp != null && message.hasOwnProperty("IntimacyUp"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.IntimacyUp);
            return writer;
        };

        /**
         * Encodes the specified ActionEvent message, length delimited. Does not implicitly {@link pattern.ActionEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.ActionEvent
         * @static
         * @param {pattern.IActionEvent} message ActionEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActionEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.ActionEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.ActionEvent} ActionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.ActionEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Type = reader.string();
                    break;
                case 3:
                    message.LimitIntimacy = reader.int32();
                    break;
                case 4:
                    message.LimitStar = reader.int32();
                    break;
                case 5:
                    message.WeightBase = reader.int32();
                    break;
                case 6:
                    if (!(message.NextEvent && message.NextEvent.length))
                        message.NextEvent = [];
                    message.NextEvent.push(reader.string());
                    break;
                case 7:
                    if (!(message.CompleteReward && message.CompleteReward.length))
                        message.CompleteReward = [];
                    message.CompleteReward.push(reader.string());
                    break;
                case 8:
                    message.SCompleteReward = reader.string();
                    break;
                case 9:
                    message.IntimacyUp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActionEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.ActionEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.ActionEvent} ActionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActionEvent message.
         * @function verify
         * @memberof pattern.ActionEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.LimitIntimacy != null && message.hasOwnProperty("LimitIntimacy"))
                if (!$util.isInteger(message.LimitIntimacy))
                    return "LimitIntimacy: integer expected";
            if (message.LimitStar != null && message.hasOwnProperty("LimitStar"))
                if (!$util.isInteger(message.LimitStar))
                    return "LimitStar: integer expected";
            if (message.WeightBase != null && message.hasOwnProperty("WeightBase"))
                if (!$util.isInteger(message.WeightBase))
                    return "WeightBase: integer expected";
            if (message.NextEvent != null && message.hasOwnProperty("NextEvent")) {
                if (!Array.isArray(message.NextEvent))
                    return "NextEvent: array expected";
                for (var i = 0; i < message.NextEvent.length; ++i)
                    if (!$util.isString(message.NextEvent[i]))
                        return "NextEvent: string[] expected";
            }
            if (message.CompleteReward != null && message.hasOwnProperty("CompleteReward")) {
                if (!Array.isArray(message.CompleteReward))
                    return "CompleteReward: array expected";
                for (var i = 0; i < message.CompleteReward.length; ++i)
                    if (!$util.isString(message.CompleteReward[i]))
                        return "CompleteReward: string[] expected";
            }
            if (message.SCompleteReward != null && message.hasOwnProperty("SCompleteReward"))
                if (!$util.isString(message.SCompleteReward))
                    return "SCompleteReward: string expected";
            if (message.IntimacyUp != null && message.hasOwnProperty("IntimacyUp"))
                if (!$util.isInteger(message.IntimacyUp))
                    return "IntimacyUp: integer expected";
            return null;
        };

        return ActionEvent;
    })();

    pattern.ActionPoint = (function() {

        /**
         * Properties of an ActionPoint.
         * @memberof pattern
         * @interface IActionPoint
         * @property {string|null} [Id] ActionPoint Id
         * @property {string|null} [ActionsSetting] ActionPoint ActionsSetting
         */

        /**
         * Constructs a new ActionPoint.
         * @memberof pattern
         * @classdesc Represents an ActionPoint.
         * @implements IActionPoint
         * @constructor
         * @param {pattern.IActionPoint=} [properties] Properties to set
         */
        function ActionPoint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActionPoint Id.
         * @member {string} Id
         * @memberof pattern.ActionPoint
         * @instance
         */
        ActionPoint.prototype.Id = "";

        /**
         * ActionPoint ActionsSetting.
         * @member {string} ActionsSetting
         * @memberof pattern.ActionPoint
         * @instance
         */
        ActionPoint.prototype.ActionsSetting = "";

        /**
         * Creates a new ActionPoint instance using the specified properties.
         * @function create
         * @memberof pattern.ActionPoint
         * @static
         * @param {pattern.IActionPoint=} [properties] Properties to set
         * @returns {pattern.ActionPoint} ActionPoint instance
         */
        ActionPoint.create = function create(properties) {
            return new ActionPoint(properties);
        };

        /**
         * Encodes the specified ActionPoint message. Does not implicitly {@link pattern.ActionPoint.verify|verify} messages.
         * @function encode
         * @memberof pattern.ActionPoint
         * @static
         * @param {pattern.IActionPoint} message ActionPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.ActionsSetting != null && message.hasOwnProperty("ActionsSetting"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ActionsSetting);
            return writer;
        };

        /**
         * Encodes the specified ActionPoint message, length delimited. Does not implicitly {@link pattern.ActionPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.ActionPoint
         * @static
         * @param {pattern.IActionPoint} message ActionPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActionPoint message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.ActionPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.ActionPoint} ActionPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.ActionPoint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.ActionsSetting = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActionPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.ActionPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.ActionPoint} ActionPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActionPoint message.
         * @function verify
         * @memberof pattern.ActionPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.ActionsSetting != null && message.hasOwnProperty("ActionsSetting"))
                if (!$util.isString(message.ActionsSetting))
                    return "ActionsSetting: string expected";
            return null;
        };

        return ActionPoint;
    })();

    pattern.BuildingBase = (function() {

        /**
         * Properties of a BuildingBase.
         * @memberof pattern
         * @interface IBuildingBase
         * @property {string|null} [Id] BuildingBase Id
         * @property {string|null} [ListName] BuildingBase ListName
         * @property {number|null} [BaseType] BuildingBase BaseType
         * @property {Array.<string>|null} [FixedBuildings] BuildingBase FixedBuildings
         * @property {number|null} [BaseSize] BuildingBase BaseSize
         * @property {Array.<string>|null} [Pos] BuildingBase Pos
         * @property {Array.<string>|null} [PosSelection] BuildingBase PosSelection
         * @property {number|null} [ZOrder] BuildingBase ZOrder
         * @property {number|null} [PathPointIndex] BuildingBase PathPointIndex
         * @property {number|null} [Order] BuildingBase Order
         * @property {number|null} [BelongScene] BuildingBase BelongScene
         */

        /**
         * Constructs a new BuildingBase.
         * @memberof pattern
         * @classdesc Represents a BuildingBase.
         * @implements IBuildingBase
         * @constructor
         * @param {pattern.IBuildingBase=} [properties] Properties to set
         */
        function BuildingBase(properties) {
            this.FixedBuildings = [];
            this.Pos = [];
            this.PosSelection = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingBase Id.
         * @member {string} Id
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.Id = "";

        /**
         * BuildingBase ListName.
         * @member {string} ListName
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.ListName = "";

        /**
         * BuildingBase BaseType.
         * @member {number} BaseType
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.BaseType = 0;

        /**
         * BuildingBase FixedBuildings.
         * @member {Array.<string>} FixedBuildings
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.FixedBuildings = $util.emptyArray;

        /**
         * BuildingBase BaseSize.
         * @member {number} BaseSize
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.BaseSize = 0;

        /**
         * BuildingBase Pos.
         * @member {Array.<string>} Pos
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.Pos = $util.emptyArray;

        /**
         * BuildingBase PosSelection.
         * @member {Array.<string>} PosSelection
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.PosSelection = $util.emptyArray;

        /**
         * BuildingBase ZOrder.
         * @member {number} ZOrder
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.ZOrder = 0;

        /**
         * BuildingBase PathPointIndex.
         * @member {number} PathPointIndex
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.PathPointIndex = 0;

        /**
         * BuildingBase Order.
         * @member {number} Order
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.Order = 0;

        /**
         * BuildingBase BelongScene.
         * @member {number} BelongScene
         * @memberof pattern.BuildingBase
         * @instance
         */
        BuildingBase.prototype.BelongScene = 0;

        /**
         * Creates a new BuildingBase instance using the specified properties.
         * @function create
         * @memberof pattern.BuildingBase
         * @static
         * @param {pattern.IBuildingBase=} [properties] Properties to set
         * @returns {pattern.BuildingBase} BuildingBase instance
         */
        BuildingBase.create = function create(properties) {
            return new BuildingBase(properties);
        };

        /**
         * Encodes the specified BuildingBase message. Does not implicitly {@link pattern.BuildingBase.verify|verify} messages.
         * @function encode
         * @memberof pattern.BuildingBase
         * @static
         * @param {pattern.IBuildingBase} message BuildingBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildingBase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.ListName != null && message.hasOwnProperty("ListName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ListName);
            if (message.BaseType != null && message.hasOwnProperty("BaseType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BaseType);
            if (message.FixedBuildings != null && message.FixedBuildings.length)
                for (var i = 0; i < message.FixedBuildings.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.FixedBuildings[i]);
            if (message.BaseSize != null && message.hasOwnProperty("BaseSize"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.BaseSize);
            if (message.Pos != null && message.Pos.length)
                for (var i = 0; i < message.Pos.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.Pos[i]);
            if (message.PosSelection != null && message.PosSelection.length)
                for (var i = 0; i < message.PosSelection.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.PosSelection[i]);
            if (message.ZOrder != null && message.hasOwnProperty("ZOrder"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.ZOrder);
            if (message.PathPointIndex != null && message.hasOwnProperty("PathPointIndex"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.PathPointIndex);
            if (message.Order != null && message.hasOwnProperty("Order"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Order);
            if (message.BelongScene != null && message.hasOwnProperty("BelongScene"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.BelongScene);
            return writer;
        };

        /**
         * Encodes the specified BuildingBase message, length delimited. Does not implicitly {@link pattern.BuildingBase.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.BuildingBase
         * @static
         * @param {pattern.IBuildingBase} message BuildingBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildingBase.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuildingBase message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.BuildingBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.BuildingBase} BuildingBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildingBase.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.BuildingBase();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.ListName = reader.string();
                    break;
                case 3:
                    message.BaseType = reader.int32();
                    break;
                case 4:
                    if (!(message.FixedBuildings && message.FixedBuildings.length))
                        message.FixedBuildings = [];
                    message.FixedBuildings.push(reader.string());
                    break;
                case 5:
                    message.BaseSize = reader.int32();
                    break;
                case 6:
                    if (!(message.Pos && message.Pos.length))
                        message.Pos = [];
                    message.Pos.push(reader.string());
                    break;
                case 7:
                    if (!(message.PosSelection && message.PosSelection.length))
                        message.PosSelection = [];
                    message.PosSelection.push(reader.string());
                    break;
                case 8:
                    message.ZOrder = reader.int32();
                    break;
                case 9:
                    message.PathPointIndex = reader.int32();
                    break;
                case 10:
                    message.Order = reader.int32();
                    break;
                case 11:
                    message.BelongScene = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuildingBase message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.BuildingBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.BuildingBase} BuildingBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildingBase.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuildingBase message.
         * @function verify
         * @memberof pattern.BuildingBase
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuildingBase.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.ListName != null && message.hasOwnProperty("ListName"))
                if (!$util.isString(message.ListName))
                    return "ListName: string expected";
            if (message.BaseType != null && message.hasOwnProperty("BaseType"))
                if (!$util.isInteger(message.BaseType))
                    return "BaseType: integer expected";
            if (message.FixedBuildings != null && message.hasOwnProperty("FixedBuildings")) {
                if (!Array.isArray(message.FixedBuildings))
                    return "FixedBuildings: array expected";
                for (var i = 0; i < message.FixedBuildings.length; ++i)
                    if (!$util.isString(message.FixedBuildings[i]))
                        return "FixedBuildings: string[] expected";
            }
            if (message.BaseSize != null && message.hasOwnProperty("BaseSize"))
                if (!$util.isInteger(message.BaseSize))
                    return "BaseSize: integer expected";
            if (message.Pos != null && message.hasOwnProperty("Pos")) {
                if (!Array.isArray(message.Pos))
                    return "Pos: array expected";
                for (var i = 0; i < message.Pos.length; ++i)
                    if (!$util.isString(message.Pos[i]))
                        return "Pos: string[] expected";
            }
            if (message.PosSelection != null && message.hasOwnProperty("PosSelection")) {
                if (!Array.isArray(message.PosSelection))
                    return "PosSelection: array expected";
                for (var i = 0; i < message.PosSelection.length; ++i)
                    if (!$util.isString(message.PosSelection[i]))
                        return "PosSelection: string[] expected";
            }
            if (message.ZOrder != null && message.hasOwnProperty("ZOrder"))
                if (!$util.isInteger(message.ZOrder))
                    return "ZOrder: integer expected";
            if (message.PathPointIndex != null && message.hasOwnProperty("PathPointIndex"))
                if (!$util.isInteger(message.PathPointIndex))
                    return "PathPointIndex: integer expected";
            if (message.Order != null && message.hasOwnProperty("Order"))
                if (!$util.isInteger(message.Order))
                    return "Order: integer expected";
            if (message.BelongScene != null && message.hasOwnProperty("BelongScene"))
                if (!$util.isInteger(message.BelongScene))
                    return "BelongScene: integer expected";
            return null;
        };

        return BuildingBase;
    })();

    pattern.Building = (function() {

        /**
         * Properties of a Building.
         * @memberof pattern
         * @interface IBuilding
         * @property {string|null} [Id] Building Id
         * @property {string|null} [Name] Building Name
         * @property {string|null} [Desc1] Building Desc1
         * @property {string|null} [Desc2] Building Desc2
         * @property {string|null} [Source] Building Source
         * @property {string|null} [ShopItems] Building ShopItems
         * @property {number|null} [Limit] Building Limit
         * @property {number|null} [Cost] Building Cost
         * @property {number|null} [StarReward] Building StarReward
         * @property {number|null} [AutoIncome] Building AutoIncome
         * @property {Array.<string>|null} [CustomerInvite] Building CustomerInvite
         * @property {Array.<string>|null} [SupportActions] Building SupportActions
         * @property {number|null} [PointCount] Building PointCount
         * @property {string|null} [PointSetting] Building PointSetting
         * @property {number|null} [BelongScene] Building BelongScene
         * @property {number|null} [SpecialTpye] Building SpecialTpye
         * @property {string|null} [SpecialValue] Building SpecialValue
         */

        /**
         * Constructs a new Building.
         * @memberof pattern
         * @classdesc Represents a Building.
         * @implements IBuilding
         * @constructor
         * @param {pattern.IBuilding=} [properties] Properties to set
         */
        function Building(properties) {
            this.CustomerInvite = [];
            this.SupportActions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Building Id.
         * @member {string} Id
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.Id = "";

        /**
         * Building Name.
         * @member {string} Name
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.Name = "";

        /**
         * Building Desc1.
         * @member {string} Desc1
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.Desc1 = "";

        /**
         * Building Desc2.
         * @member {string} Desc2
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.Desc2 = "";

        /**
         * Building Source.
         * @member {string} Source
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.Source = "";

        /**
         * Building ShopItems.
         * @member {string} ShopItems
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.ShopItems = "";

        /**
         * Building Limit.
         * @member {number} Limit
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.Limit = 0;

        /**
         * Building Cost.
         * @member {number} Cost
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.Cost = 0;

        /**
         * Building StarReward.
         * @member {number} StarReward
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.StarReward = 0;

        /**
         * Building AutoIncome.
         * @member {number} AutoIncome
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.AutoIncome = 0;

        /**
         * Building CustomerInvite.
         * @member {Array.<string>} CustomerInvite
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.CustomerInvite = $util.emptyArray;

        /**
         * Building SupportActions.
         * @member {Array.<string>} SupportActions
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.SupportActions = $util.emptyArray;

        /**
         * Building PointCount.
         * @member {number} PointCount
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.PointCount = 0;

        /**
         * Building PointSetting.
         * @member {string} PointSetting
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.PointSetting = "";

        /**
         * Building BelongScene.
         * @member {number} BelongScene
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.BelongScene = 0;

        /**
         * Building SpecialTpye.
         * @member {number} SpecialTpye
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.SpecialTpye = 0;

        /**
         * Building SpecialValue.
         * @member {string} SpecialValue
         * @memberof pattern.Building
         * @instance
         */
        Building.prototype.SpecialValue = "";

        /**
         * Creates a new Building instance using the specified properties.
         * @function create
         * @memberof pattern.Building
         * @static
         * @param {pattern.IBuilding=} [properties] Properties to set
         * @returns {pattern.Building} Building instance
         */
        Building.create = function create(properties) {
            return new Building(properties);
        };

        /**
         * Encodes the specified Building message. Does not implicitly {@link pattern.Building.verify|verify} messages.
         * @function encode
         * @memberof pattern.Building
         * @static
         * @param {pattern.IBuilding} message Building message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Building.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Desc1 != null && message.hasOwnProperty("Desc1"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Desc1);
            if (message.Desc2 != null && message.hasOwnProperty("Desc2"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Desc2);
            if (message.Source != null && message.hasOwnProperty("Source"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Source);
            if (message.ShopItems != null && message.hasOwnProperty("ShopItems"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ShopItems);
            if (message.Limit != null && message.hasOwnProperty("Limit"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Limit);
            if (message.Cost != null && message.hasOwnProperty("Cost"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Cost);
            if (message.StarReward != null && message.hasOwnProperty("StarReward"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.StarReward);
            if (message.AutoIncome != null && message.hasOwnProperty("AutoIncome"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.AutoIncome);
            if (message.CustomerInvite != null && message.CustomerInvite.length)
                for (var i = 0; i < message.CustomerInvite.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.CustomerInvite[i]);
            if (message.SupportActions != null && message.SupportActions.length)
                for (var i = 0; i < message.SupportActions.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.SupportActions[i]);
            if (message.PointCount != null && message.hasOwnProperty("PointCount"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.PointCount);
            if (message.PointSetting != null && message.hasOwnProperty("PointSetting"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.PointSetting);
            if (message.BelongScene != null && message.hasOwnProperty("BelongScene"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.BelongScene);
            if (message.SpecialTpye != null && message.hasOwnProperty("SpecialTpye"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.SpecialTpye);
            if (message.SpecialValue != null && message.hasOwnProperty("SpecialValue"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.SpecialValue);
            return writer;
        };

        /**
         * Encodes the specified Building message, length delimited. Does not implicitly {@link pattern.Building.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.Building
         * @static
         * @param {pattern.IBuilding} message Building message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Building.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Building message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.Building
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.Building} Building
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Building.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.Building();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Desc1 = reader.string();
                    break;
                case 4:
                    message.Desc2 = reader.string();
                    break;
                case 5:
                    message.Source = reader.string();
                    break;
                case 6:
                    message.ShopItems = reader.string();
                    break;
                case 7:
                    message.Limit = reader.int32();
                    break;
                case 8:
                    message.Cost = reader.int32();
                    break;
                case 9:
                    message.StarReward = reader.int32();
                    break;
                case 10:
                    message.AutoIncome = reader.int32();
                    break;
                case 11:
                    if (!(message.CustomerInvite && message.CustomerInvite.length))
                        message.CustomerInvite = [];
                    message.CustomerInvite.push(reader.string());
                    break;
                case 12:
                    if (!(message.SupportActions && message.SupportActions.length))
                        message.SupportActions = [];
                    message.SupportActions.push(reader.string());
                    break;
                case 13:
                    message.PointCount = reader.int32();
                    break;
                case 14:
                    message.PointSetting = reader.string();
                    break;
                case 15:
                    message.BelongScene = reader.int32();
                    break;
                case 16:
                    message.SpecialTpye = reader.int32();
                    break;
                case 17:
                    message.SpecialValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Building message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.Building
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.Building} Building
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Building.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Building message.
         * @function verify
         * @memberof pattern.Building
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Building.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Desc1 != null && message.hasOwnProperty("Desc1"))
                if (!$util.isString(message.Desc1))
                    return "Desc1: string expected";
            if (message.Desc2 != null && message.hasOwnProperty("Desc2"))
                if (!$util.isString(message.Desc2))
                    return "Desc2: string expected";
            if (message.Source != null && message.hasOwnProperty("Source"))
                if (!$util.isString(message.Source))
                    return "Source: string expected";
            if (message.ShopItems != null && message.hasOwnProperty("ShopItems"))
                if (!$util.isString(message.ShopItems))
                    return "ShopItems: string expected";
            if (message.Limit != null && message.hasOwnProperty("Limit"))
                if (!$util.isInteger(message.Limit))
                    return "Limit: integer expected";
            if (message.Cost != null && message.hasOwnProperty("Cost"))
                if (!$util.isInteger(message.Cost))
                    return "Cost: integer expected";
            if (message.StarReward != null && message.hasOwnProperty("StarReward"))
                if (!$util.isInteger(message.StarReward))
                    return "StarReward: integer expected";
            if (message.AutoIncome != null && message.hasOwnProperty("AutoIncome"))
                if (!$util.isInteger(message.AutoIncome))
                    return "AutoIncome: integer expected";
            if (message.CustomerInvite != null && message.hasOwnProperty("CustomerInvite")) {
                if (!Array.isArray(message.CustomerInvite))
                    return "CustomerInvite: array expected";
                for (var i = 0; i < message.CustomerInvite.length; ++i)
                    if (!$util.isString(message.CustomerInvite[i]))
                        return "CustomerInvite: string[] expected";
            }
            if (message.SupportActions != null && message.hasOwnProperty("SupportActions")) {
                if (!Array.isArray(message.SupportActions))
                    return "SupportActions: array expected";
                for (var i = 0; i < message.SupportActions.length; ++i)
                    if (!$util.isString(message.SupportActions[i]))
                        return "SupportActions: string[] expected";
            }
            if (message.PointCount != null && message.hasOwnProperty("PointCount"))
                if (!$util.isInteger(message.PointCount))
                    return "PointCount: integer expected";
            if (message.PointSetting != null && message.hasOwnProperty("PointSetting"))
                if (!$util.isString(message.PointSetting))
                    return "PointSetting: string expected";
            if (message.BelongScene != null && message.hasOwnProperty("BelongScene"))
                if (!$util.isInteger(message.BelongScene))
                    return "BelongScene: integer expected";
            if (message.SpecialTpye != null && message.hasOwnProperty("SpecialTpye"))
                if (!$util.isInteger(message.SpecialTpye))
                    return "SpecialTpye: integer expected";
            if (message.SpecialValue != null && message.hasOwnProperty("SpecialValue"))
                if (!$util.isString(message.SpecialValue))
                    return "SpecialValue: string expected";
            return null;
        };

        return Building;
    })();

    pattern.Const = (function() {

        /**
         * Properties of a Const.
         * @memberof pattern
         * @interface IConst
         * @property {string|null} [Id] Const Id
         * @property {string|null} [Value] Const Value
         */

        /**
         * Constructs a new Const.
         * @memberof pattern
         * @classdesc Represents a Const.
         * @implements IConst
         * @constructor
         * @param {pattern.IConst=} [properties] Properties to set
         */
        function Const(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Const Id.
         * @member {string} Id
         * @memberof pattern.Const
         * @instance
         */
        Const.prototype.Id = "";

        /**
         * Const Value.
         * @member {string} Value
         * @memberof pattern.Const
         * @instance
         */
        Const.prototype.Value = "";

        /**
         * Creates a new Const instance using the specified properties.
         * @function create
         * @memberof pattern.Const
         * @static
         * @param {pattern.IConst=} [properties] Properties to set
         * @returns {pattern.Const} Const instance
         */
        Const.create = function create(properties) {
            return new Const(properties);
        };

        /**
         * Encodes the specified Const message. Does not implicitly {@link pattern.Const.verify|verify} messages.
         * @function encode
         * @memberof pattern.Const
         * @static
         * @param {pattern.IConst} message Const message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Const.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Value != null && message.hasOwnProperty("Value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Value);
            return writer;
        };

        /**
         * Encodes the specified Const message, length delimited. Does not implicitly {@link pattern.Const.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.Const
         * @static
         * @param {pattern.IConst} message Const message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Const.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Const message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.Const
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.Const} Const
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Const.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.Const();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Const message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.Const
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.Const} Const
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Const.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Const message.
         * @function verify
         * @memberof pattern.Const
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Const.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (!$util.isString(message.Value))
                    return "Value: string expected";
            return null;
        };

        return Const;
    })();

    pattern.FishingBaits = (function() {

        /**
         * Properties of a FishingBaits.
         * @memberof pattern
         * @interface IFishingBaits
         * @property {string|null} [Id] FishingBaits Id
         * @property {string|null} [name] FishingBaits name
         * @property {string|null} [introduce] FishingBaits introduce
         * @property {number|null} [StarLimit] FishingBaits StarLimit
         * @property {string|null} [img] FishingBaits img
         * @property {Array.<string>|null} [normal] FishingBaits normal
         * @property {Array.<string>|null} [special] FishingBaits special
         * @property {number|null} [speed] FishingBaits speed
         * @property {string|null} [hitZoneID] FishingBaits hitZoneID
         */

        /**
         * Constructs a new FishingBaits.
         * @memberof pattern
         * @classdesc Represents a FishingBaits.
         * @implements IFishingBaits
         * @constructor
         * @param {pattern.IFishingBaits=} [properties] Properties to set
         */
        function FishingBaits(properties) {
            this.normal = [];
            this.special = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishingBaits Id.
         * @member {string} Id
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.Id = "";

        /**
         * FishingBaits name.
         * @member {string} name
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.name = "";

        /**
         * FishingBaits introduce.
         * @member {string} introduce
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.introduce = "";

        /**
         * FishingBaits StarLimit.
         * @member {number} StarLimit
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.StarLimit = 0;

        /**
         * FishingBaits img.
         * @member {string} img
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.img = "";

        /**
         * FishingBaits normal.
         * @member {Array.<string>} normal
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.normal = $util.emptyArray;

        /**
         * FishingBaits special.
         * @member {Array.<string>} special
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.special = $util.emptyArray;

        /**
         * FishingBaits speed.
         * @member {number} speed
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.speed = 0;

        /**
         * FishingBaits hitZoneID.
         * @member {string} hitZoneID
         * @memberof pattern.FishingBaits
         * @instance
         */
        FishingBaits.prototype.hitZoneID = "";

        /**
         * Creates a new FishingBaits instance using the specified properties.
         * @function create
         * @memberof pattern.FishingBaits
         * @static
         * @param {pattern.IFishingBaits=} [properties] Properties to set
         * @returns {pattern.FishingBaits} FishingBaits instance
         */
        FishingBaits.create = function create(properties) {
            return new FishingBaits(properties);
        };

        /**
         * Encodes the specified FishingBaits message. Does not implicitly {@link pattern.FishingBaits.verify|verify} messages.
         * @function encode
         * @memberof pattern.FishingBaits
         * @static
         * @param {pattern.IFishingBaits} message FishingBaits message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingBaits.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.introduce != null && message.hasOwnProperty("introduce"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.introduce);
            if (message.StarLimit != null && message.hasOwnProperty("StarLimit"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.StarLimit);
            if (message.img != null && message.hasOwnProperty("img"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.img);
            if (message.normal != null && message.normal.length)
                for (var i = 0; i < message.normal.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.normal[i]);
            if (message.special != null && message.special.length)
                for (var i = 0; i < message.special.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.special[i]);
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.speed);
            if (message.hitZoneID != null && message.hasOwnProperty("hitZoneID"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.hitZoneID);
            return writer;
        };

        /**
         * Encodes the specified FishingBaits message, length delimited. Does not implicitly {@link pattern.FishingBaits.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.FishingBaits
         * @static
         * @param {pattern.IFishingBaits} message FishingBaits message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingBaits.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishingBaits message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.FishingBaits
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.FishingBaits} FishingBaits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingBaits.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.FishingBaits();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.introduce = reader.string();
                    break;
                case 4:
                    message.StarLimit = reader.int32();
                    break;
                case 5:
                    message.img = reader.string();
                    break;
                case 6:
                    if (!(message.normal && message.normal.length))
                        message.normal = [];
                    message.normal.push(reader.string());
                    break;
                case 7:
                    if (!(message.special && message.special.length))
                        message.special = [];
                    message.special.push(reader.string());
                    break;
                case 8:
                    message.speed = reader.int32();
                    break;
                case 9:
                    message.hitZoneID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishingBaits message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.FishingBaits
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.FishingBaits} FishingBaits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingBaits.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishingBaits message.
         * @function verify
         * @memberof pattern.FishingBaits
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishingBaits.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.introduce != null && message.hasOwnProperty("introduce"))
                if (!$util.isString(message.introduce))
                    return "introduce: string expected";
            if (message.StarLimit != null && message.hasOwnProperty("StarLimit"))
                if (!$util.isInteger(message.StarLimit))
                    return "StarLimit: integer expected";
            if (message.img != null && message.hasOwnProperty("img"))
                if (!$util.isString(message.img))
                    return "img: string expected";
            if (message.normal != null && message.hasOwnProperty("normal")) {
                if (!Array.isArray(message.normal))
                    return "normal: array expected";
                for (var i = 0; i < message.normal.length; ++i)
                    if (!$util.isString(message.normal[i]))
                        return "normal: string[] expected";
            }
            if (message.special != null && message.hasOwnProperty("special")) {
                if (!Array.isArray(message.special))
                    return "special: array expected";
                for (var i = 0; i < message.special.length; ++i)
                    if (!$util.isString(message.special[i]))
                        return "special: string[] expected";
            }
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            if (message.hitZoneID != null && message.hasOwnProperty("hitZoneID"))
                if (!$util.isString(message.hitZoneID))
                    return "hitZoneID: string expected";
            return null;
        };

        return FishingBaits;
    })();

    pattern.FishingFishes = (function() {

        /**
         * Properties of a FishingFishes.
         * @memberof pattern
         * @interface IFishingFishes
         * @property {string|null} [Id] FishingFishes Id
         * @property {string|null} [name] FishingFishes name
         * @property {string|null} [img] FishingFishes img
         * @property {string|null} [imgShadow] FishingFishes imgShadow
         * @property {number|null} [size] FishingFishes size
         * @property {number|null} [sizeTimes] FishingFishes sizeTimes
         * @property {number|null} [income] FishingFishes income
         * @property {number|null} [incomeTimes] FishingFishes incomeTimes
         * @property {number|null} [NauticalFoodsRate] FishingFishes NauticalFoodsRate
         * @property {string|null} [NauticalFoods] FishingFishes NauticalFoods
         */

        /**
         * Constructs a new FishingFishes.
         * @memberof pattern
         * @classdesc Represents a FishingFishes.
         * @implements IFishingFishes
         * @constructor
         * @param {pattern.IFishingFishes=} [properties] Properties to set
         */
        function FishingFishes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishingFishes Id.
         * @member {string} Id
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.Id = "";

        /**
         * FishingFishes name.
         * @member {string} name
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.name = "";

        /**
         * FishingFishes img.
         * @member {string} img
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.img = "";

        /**
         * FishingFishes imgShadow.
         * @member {string} imgShadow
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.imgShadow = "";

        /**
         * FishingFishes size.
         * @member {number} size
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.size = 0;

        /**
         * FishingFishes sizeTimes.
         * @member {number} sizeTimes
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.sizeTimes = 0;

        /**
         * FishingFishes income.
         * @member {number} income
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.income = 0;

        /**
         * FishingFishes incomeTimes.
         * @member {number} incomeTimes
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.incomeTimes = 0;

        /**
         * FishingFishes NauticalFoodsRate.
         * @member {number} NauticalFoodsRate
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.NauticalFoodsRate = 0;

        /**
         * FishingFishes NauticalFoods.
         * @member {string} NauticalFoods
         * @memberof pattern.FishingFishes
         * @instance
         */
        FishingFishes.prototype.NauticalFoods = "";

        /**
         * Creates a new FishingFishes instance using the specified properties.
         * @function create
         * @memberof pattern.FishingFishes
         * @static
         * @param {pattern.IFishingFishes=} [properties] Properties to set
         * @returns {pattern.FishingFishes} FishingFishes instance
         */
        FishingFishes.create = function create(properties) {
            return new FishingFishes(properties);
        };

        /**
         * Encodes the specified FishingFishes message. Does not implicitly {@link pattern.FishingFishes.verify|verify} messages.
         * @function encode
         * @memberof pattern.FishingFishes
         * @static
         * @param {pattern.IFishingFishes} message FishingFishes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingFishes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.img != null && message.hasOwnProperty("img"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.img);
            if (message.imgShadow != null && message.hasOwnProperty("imgShadow"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.imgShadow);
            if (message.size != null && message.hasOwnProperty("size"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.size);
            if (message.sizeTimes != null && message.hasOwnProperty("sizeTimes"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.sizeTimes);
            if (message.income != null && message.hasOwnProperty("income"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.income);
            if (message.incomeTimes != null && message.hasOwnProperty("incomeTimes"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.incomeTimes);
            if (message.NauticalFoodsRate != null && message.hasOwnProperty("NauticalFoodsRate"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.NauticalFoodsRate);
            if (message.NauticalFoods != null && message.hasOwnProperty("NauticalFoods"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.NauticalFoods);
            return writer;
        };

        /**
         * Encodes the specified FishingFishes message, length delimited. Does not implicitly {@link pattern.FishingFishes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.FishingFishes
         * @static
         * @param {pattern.IFishingFishes} message FishingFishes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingFishes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishingFishes message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.FishingFishes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.FishingFishes} FishingFishes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingFishes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.FishingFishes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.img = reader.string();
                    break;
                case 4:
                    message.imgShadow = reader.string();
                    break;
                case 5:
                    message.size = reader.int32();
                    break;
                case 6:
                    message.sizeTimes = reader.double();
                    break;
                case 7:
                    message.income = reader.int32();
                    break;
                case 8:
                    message.incomeTimes = reader.double();
                    break;
                case 9:
                    message.NauticalFoodsRate = reader.int32();
                    break;
                case 10:
                    message.NauticalFoods = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishingFishes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.FishingFishes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.FishingFishes} FishingFishes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingFishes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishingFishes message.
         * @function verify
         * @memberof pattern.FishingFishes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishingFishes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.img != null && message.hasOwnProperty("img"))
                if (!$util.isString(message.img))
                    return "img: string expected";
            if (message.imgShadow != null && message.hasOwnProperty("imgShadow"))
                if (!$util.isString(message.imgShadow))
                    return "imgShadow: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.sizeTimes != null && message.hasOwnProperty("sizeTimes"))
                if (typeof message.sizeTimes !== "number")
                    return "sizeTimes: number expected";
            if (message.income != null && message.hasOwnProperty("income"))
                if (!$util.isInteger(message.income))
                    return "income: integer expected";
            if (message.incomeTimes != null && message.hasOwnProperty("incomeTimes"))
                if (typeof message.incomeTimes !== "number")
                    return "incomeTimes: number expected";
            if (message.NauticalFoodsRate != null && message.hasOwnProperty("NauticalFoodsRate"))
                if (!$util.isInteger(message.NauticalFoodsRate))
                    return "NauticalFoodsRate: integer expected";
            if (message.NauticalFoods != null && message.hasOwnProperty("NauticalFoods"))
                if (!$util.isString(message.NauticalFoods))
                    return "NauticalFoods: string expected";
            return null;
        };

        return FishingFishes;
    })();

    pattern.FishingHitZone = (function() {

        /**
         * Properties of a FishingHitZone.
         * @memberof pattern
         * @interface IFishingHitZone
         * @property {string|null} [Id] FishingHitZone Id
         * @property {Array.<number>|null} [HitZone] FishingHitZone HitZone
         */

        /**
         * Constructs a new FishingHitZone.
         * @memberof pattern
         * @classdesc Represents a FishingHitZone.
         * @implements IFishingHitZone
         * @constructor
         * @param {pattern.IFishingHitZone=} [properties] Properties to set
         */
        function FishingHitZone(properties) {
            this.HitZone = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishingHitZone Id.
         * @member {string} Id
         * @memberof pattern.FishingHitZone
         * @instance
         */
        FishingHitZone.prototype.Id = "";

        /**
         * FishingHitZone HitZone.
         * @member {Array.<number>} HitZone
         * @memberof pattern.FishingHitZone
         * @instance
         */
        FishingHitZone.prototype.HitZone = $util.emptyArray;

        /**
         * Creates a new FishingHitZone instance using the specified properties.
         * @function create
         * @memberof pattern.FishingHitZone
         * @static
         * @param {pattern.IFishingHitZone=} [properties] Properties to set
         * @returns {pattern.FishingHitZone} FishingHitZone instance
         */
        FishingHitZone.create = function create(properties) {
            return new FishingHitZone(properties);
        };

        /**
         * Encodes the specified FishingHitZone message. Does not implicitly {@link pattern.FishingHitZone.verify|verify} messages.
         * @function encode
         * @memberof pattern.FishingHitZone
         * @static
         * @param {pattern.IFishingHitZone} message FishingHitZone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingHitZone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.HitZone != null && message.HitZone.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.HitZone.length; ++i)
                    writer.double(message.HitZone[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified FishingHitZone message, length delimited. Does not implicitly {@link pattern.FishingHitZone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.FishingHitZone
         * @static
         * @param {pattern.IFishingHitZone} message FishingHitZone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingHitZone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishingHitZone message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.FishingHitZone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.FishingHitZone} FishingHitZone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingHitZone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.FishingHitZone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    if (!(message.HitZone && message.HitZone.length))
                        message.HitZone = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.HitZone.push(reader.double());
                    } else
                        message.HitZone.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishingHitZone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.FishingHitZone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.FishingHitZone} FishingHitZone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingHitZone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishingHitZone message.
         * @function verify
         * @memberof pattern.FishingHitZone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishingHitZone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.HitZone != null && message.hasOwnProperty("HitZone")) {
                if (!Array.isArray(message.HitZone))
                    return "HitZone: array expected";
                for (var i = 0; i < message.HitZone.length; ++i)
                    if (typeof message.HitZone[i] !== "number")
                        return "HitZone: number[] expected";
            }
            return null;
        };

        return FishingHitZone;
    })();

    pattern.FishingResult = (function() {

        /**
         * Properties of a FishingResult.
         * @memberof pattern
         * @interface IFishingResult
         * @property {string|null} [Id] FishingResult Id
         * @property {number|null} [specialRate] FishingResult specialRate
         * @property {Array.<number>|null} [sizeIncrease] FishingResult sizeIncrease
         * @property {Array.<number>|null} [incomeIncrease] FishingResult incomeIncrease
         */

        /**
         * Constructs a new FishingResult.
         * @memberof pattern
         * @classdesc Represents a FishingResult.
         * @implements IFishingResult
         * @constructor
         * @param {pattern.IFishingResult=} [properties] Properties to set
         */
        function FishingResult(properties) {
            this.sizeIncrease = [];
            this.incomeIncrease = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishingResult Id.
         * @member {string} Id
         * @memberof pattern.FishingResult
         * @instance
         */
        FishingResult.prototype.Id = "";

        /**
         * FishingResult specialRate.
         * @member {number} specialRate
         * @memberof pattern.FishingResult
         * @instance
         */
        FishingResult.prototype.specialRate = 0;

        /**
         * FishingResult sizeIncrease.
         * @member {Array.<number>} sizeIncrease
         * @memberof pattern.FishingResult
         * @instance
         */
        FishingResult.prototype.sizeIncrease = $util.emptyArray;

        /**
         * FishingResult incomeIncrease.
         * @member {Array.<number>} incomeIncrease
         * @memberof pattern.FishingResult
         * @instance
         */
        FishingResult.prototype.incomeIncrease = $util.emptyArray;

        /**
         * Creates a new FishingResult instance using the specified properties.
         * @function create
         * @memberof pattern.FishingResult
         * @static
         * @param {pattern.IFishingResult=} [properties] Properties to set
         * @returns {pattern.FishingResult} FishingResult instance
         */
        FishingResult.create = function create(properties) {
            return new FishingResult(properties);
        };

        /**
         * Encodes the specified FishingResult message. Does not implicitly {@link pattern.FishingResult.verify|verify} messages.
         * @function encode
         * @memberof pattern.FishingResult
         * @static
         * @param {pattern.IFishingResult} message FishingResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.specialRate != null && message.hasOwnProperty("specialRate"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.specialRate);
            if (message.sizeIncrease != null && message.sizeIncrease.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.sizeIncrease.length; ++i)
                    writer.double(message.sizeIncrease[i]);
                writer.ldelim();
            }
            if (message.incomeIncrease != null && message.incomeIncrease.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.incomeIncrease.length; ++i)
                    writer.double(message.incomeIncrease[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified FishingResult message, length delimited. Does not implicitly {@link pattern.FishingResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.FishingResult
         * @static
         * @param {pattern.IFishingResult} message FishingResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishingResult message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.FishingResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.FishingResult} FishingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.FishingResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.specialRate = reader.int32();
                    break;
                case 3:
                    if (!(message.sizeIncrease && message.sizeIncrease.length))
                        message.sizeIncrease = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.sizeIncrease.push(reader.double());
                    } else
                        message.sizeIncrease.push(reader.double());
                    break;
                case 4:
                    if (!(message.incomeIncrease && message.incomeIncrease.length))
                        message.incomeIncrease = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.incomeIncrease.push(reader.double());
                    } else
                        message.incomeIncrease.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishingResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.FishingResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.FishingResult} FishingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishingResult message.
         * @function verify
         * @memberof pattern.FishingResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishingResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.specialRate != null && message.hasOwnProperty("specialRate"))
                if (!$util.isInteger(message.specialRate))
                    return "specialRate: integer expected";
            if (message.sizeIncrease != null && message.hasOwnProperty("sizeIncrease")) {
                if (!Array.isArray(message.sizeIncrease))
                    return "sizeIncrease: array expected";
                for (var i = 0; i < message.sizeIncrease.length; ++i)
                    if (typeof message.sizeIncrease[i] !== "number")
                        return "sizeIncrease: number[] expected";
            }
            if (message.incomeIncrease != null && message.hasOwnProperty("incomeIncrease")) {
                if (!Array.isArray(message.incomeIncrease))
                    return "incomeIncrease: array expected";
                for (var i = 0; i < message.incomeIncrease.length; ++i)
                    if (typeof message.incomeIncrease[i] !== "number")
                        return "incomeIncrease: number[] expected";
            }
            return null;
        };

        return FishingResult;
    })();

    pattern.Foods = (function() {

        /**
         * Properties of a Foods.
         * @memberof pattern
         * @interface IFoods
         * @property {string|null} [Id] Foods Id
         * @property {string|null} [Name] Foods Name
         * @property {string|null} [Type] Foods Type
         * @property {string|null} [Desc1] Foods Desc1
         * @property {string|null} [Source] Foods Source
         * @property {string|null} [ShopItems] Foods ShopItems
         * @property {number|null} [Limit] Foods Limit
         * @property {number|null} [Cost] Foods Cost
         * @property {number|null} [Income] Foods Income
         * @property {number|null} [CookingTime] Foods CookingTime
         */

        /**
         * Constructs a new Foods.
         * @memberof pattern
         * @classdesc Represents a Foods.
         * @implements IFoods
         * @constructor
         * @param {pattern.IFoods=} [properties] Properties to set
         */
        function Foods(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Foods Id.
         * @member {string} Id
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.Id = "";

        /**
         * Foods Name.
         * @member {string} Name
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.Name = "";

        /**
         * Foods Type.
         * @member {string} Type
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.Type = "";

        /**
         * Foods Desc1.
         * @member {string} Desc1
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.Desc1 = "";

        /**
         * Foods Source.
         * @member {string} Source
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.Source = "";

        /**
         * Foods ShopItems.
         * @member {string} ShopItems
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.ShopItems = "";

        /**
         * Foods Limit.
         * @member {number} Limit
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.Limit = 0;

        /**
         * Foods Cost.
         * @member {number} Cost
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.Cost = 0;

        /**
         * Foods Income.
         * @member {number} Income
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.Income = 0;

        /**
         * Foods CookingTime.
         * @member {number} CookingTime
         * @memberof pattern.Foods
         * @instance
         */
        Foods.prototype.CookingTime = 0;

        /**
         * Creates a new Foods instance using the specified properties.
         * @function create
         * @memberof pattern.Foods
         * @static
         * @param {pattern.IFoods=} [properties] Properties to set
         * @returns {pattern.Foods} Foods instance
         */
        Foods.create = function create(properties) {
            return new Foods(properties);
        };

        /**
         * Encodes the specified Foods message. Does not implicitly {@link pattern.Foods.verify|verify} messages.
         * @function encode
         * @memberof pattern.Foods
         * @static
         * @param {pattern.IFoods} message Foods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Foods.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Type);
            if (message.Desc1 != null && message.hasOwnProperty("Desc1"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Desc1);
            if (message.Source != null && message.hasOwnProperty("Source"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Source);
            if (message.ShopItems != null && message.hasOwnProperty("ShopItems"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ShopItems);
            if (message.Limit != null && message.hasOwnProperty("Limit"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Limit);
            if (message.Cost != null && message.hasOwnProperty("Cost"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Cost);
            if (message.Income != null && message.hasOwnProperty("Income"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Income);
            if (message.CookingTime != null && message.hasOwnProperty("CookingTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.CookingTime);
            return writer;
        };

        /**
         * Encodes the specified Foods message, length delimited. Does not implicitly {@link pattern.Foods.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.Foods
         * @static
         * @param {pattern.IFoods} message Foods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Foods.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Foods message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.Foods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.Foods} Foods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Foods.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.Foods();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Type = reader.string();
                    break;
                case 4:
                    message.Desc1 = reader.string();
                    break;
                case 5:
                    message.Source = reader.string();
                    break;
                case 6:
                    message.ShopItems = reader.string();
                    break;
                case 7:
                    message.Limit = reader.int32();
                    break;
                case 8:
                    message.Cost = reader.int32();
                    break;
                case 9:
                    message.Income = reader.int32();
                    break;
                case 10:
                    message.CookingTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Foods message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.Foods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.Foods} Foods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Foods.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Foods message.
         * @function verify
         * @memberof pattern.Foods
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Foods.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Desc1 != null && message.hasOwnProperty("Desc1"))
                if (!$util.isString(message.Desc1))
                    return "Desc1: string expected";
            if (message.Source != null && message.hasOwnProperty("Source"))
                if (!$util.isString(message.Source))
                    return "Source: string expected";
            if (message.ShopItems != null && message.hasOwnProperty("ShopItems"))
                if (!$util.isString(message.ShopItems))
                    return "ShopItems: string expected";
            if (message.Limit != null && message.hasOwnProperty("Limit"))
                if (!$util.isInteger(message.Limit))
                    return "Limit: integer expected";
            if (message.Cost != null && message.hasOwnProperty("Cost"))
                if (!$util.isInteger(message.Cost))
                    return "Cost: integer expected";
            if (message.Income != null && message.hasOwnProperty("Income"))
                if (!$util.isInteger(message.Income))
                    return "Income: integer expected";
            if (message.CookingTime != null && message.hasOwnProperty("CookingTime"))
                if (!$util.isInteger(message.CookingTime))
                    return "CookingTime: integer expected";
            return null;
        };

        return Foods;
    })();

    pattern.FoodsList = (function() {

        /**
         * Properties of a FoodsList.
         * @memberof pattern
         * @interface IFoodsList
         * @property {string|null} [Id] FoodsList Id
         * @property {string|null} [foodsList] FoodsList foodsList
         */

        /**
         * Constructs a new FoodsList.
         * @memberof pattern
         * @classdesc Represents a FoodsList.
         * @implements IFoodsList
         * @constructor
         * @param {pattern.IFoodsList=} [properties] Properties to set
         */
        function FoodsList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FoodsList Id.
         * @member {string} Id
         * @memberof pattern.FoodsList
         * @instance
         */
        FoodsList.prototype.Id = "";

        /**
         * FoodsList foodsList.
         * @member {string} foodsList
         * @memberof pattern.FoodsList
         * @instance
         */
        FoodsList.prototype.foodsList = "";

        /**
         * Creates a new FoodsList instance using the specified properties.
         * @function create
         * @memberof pattern.FoodsList
         * @static
         * @param {pattern.IFoodsList=} [properties] Properties to set
         * @returns {pattern.FoodsList} FoodsList instance
         */
        FoodsList.create = function create(properties) {
            return new FoodsList(properties);
        };

        /**
         * Encodes the specified FoodsList message. Does not implicitly {@link pattern.FoodsList.verify|verify} messages.
         * @function encode
         * @memberof pattern.FoodsList
         * @static
         * @param {pattern.IFoodsList} message FoodsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FoodsList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.foodsList != null && message.hasOwnProperty("foodsList"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.foodsList);
            return writer;
        };

        /**
         * Encodes the specified FoodsList message, length delimited. Does not implicitly {@link pattern.FoodsList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.FoodsList
         * @static
         * @param {pattern.IFoodsList} message FoodsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FoodsList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FoodsList message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.FoodsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.FoodsList} FoodsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FoodsList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.FoodsList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.foodsList = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FoodsList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.FoodsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.FoodsList} FoodsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FoodsList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FoodsList message.
         * @function verify
         * @memberof pattern.FoodsList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FoodsList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.foodsList != null && message.hasOwnProperty("foodsList"))
                if (!$util.isString(message.foodsList))
                    return "foodsList: string expected";
            return null;
        };

        return FoodsList;
    })();

    pattern.NauticalEvent = (function() {

        /**
         * Properties of a NauticalEvent.
         * @memberof pattern
         * @interface INauticalEvent
         * @property {string|null} [Id] NauticalEvent Id
         * @property {string|null} [PointLimit] NauticalEvent PointLimit
         * @property {string|null} [CatLimit] NauticalEvent CatLimit
         * @property {string|null} [RewardBase] NauticalEvent RewardBase
         * @property {string|null} [RewardFirst] NauticalEvent RewardFirst
         * @property {number|null} [Weight] NauticalEvent Weight
         */

        /**
         * Constructs a new NauticalEvent.
         * @memberof pattern
         * @classdesc Represents a NauticalEvent.
         * @implements INauticalEvent
         * @constructor
         * @param {pattern.INauticalEvent=} [properties] Properties to set
         */
        function NauticalEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NauticalEvent Id.
         * @member {string} Id
         * @memberof pattern.NauticalEvent
         * @instance
         */
        NauticalEvent.prototype.Id = "";

        /**
         * NauticalEvent PointLimit.
         * @member {string} PointLimit
         * @memberof pattern.NauticalEvent
         * @instance
         */
        NauticalEvent.prototype.PointLimit = "";

        /**
         * NauticalEvent CatLimit.
         * @member {string} CatLimit
         * @memberof pattern.NauticalEvent
         * @instance
         */
        NauticalEvent.prototype.CatLimit = "";

        /**
         * NauticalEvent RewardBase.
         * @member {string} RewardBase
         * @memberof pattern.NauticalEvent
         * @instance
         */
        NauticalEvent.prototype.RewardBase = "";

        /**
         * NauticalEvent RewardFirst.
         * @member {string} RewardFirst
         * @memberof pattern.NauticalEvent
         * @instance
         */
        NauticalEvent.prototype.RewardFirst = "";

        /**
         * NauticalEvent Weight.
         * @member {number} Weight
         * @memberof pattern.NauticalEvent
         * @instance
         */
        NauticalEvent.prototype.Weight = 0;

        /**
         * Creates a new NauticalEvent instance using the specified properties.
         * @function create
         * @memberof pattern.NauticalEvent
         * @static
         * @param {pattern.INauticalEvent=} [properties] Properties to set
         * @returns {pattern.NauticalEvent} NauticalEvent instance
         */
        NauticalEvent.create = function create(properties) {
            return new NauticalEvent(properties);
        };

        /**
         * Encodes the specified NauticalEvent message. Does not implicitly {@link pattern.NauticalEvent.verify|verify} messages.
         * @function encode
         * @memberof pattern.NauticalEvent
         * @static
         * @param {pattern.INauticalEvent} message NauticalEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NauticalEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.PointLimit != null && message.hasOwnProperty("PointLimit"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.PointLimit);
            if (message.CatLimit != null && message.hasOwnProperty("CatLimit"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.CatLimit);
            if (message.RewardBase != null && message.hasOwnProperty("RewardBase"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.RewardBase);
            if (message.RewardFirst != null && message.hasOwnProperty("RewardFirst"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.RewardFirst);
            if (message.Weight != null && message.hasOwnProperty("Weight"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Weight);
            return writer;
        };

        /**
         * Encodes the specified NauticalEvent message, length delimited. Does not implicitly {@link pattern.NauticalEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.NauticalEvent
         * @static
         * @param {pattern.INauticalEvent} message NauticalEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NauticalEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NauticalEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.NauticalEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.NauticalEvent} NauticalEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NauticalEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.NauticalEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.PointLimit = reader.string();
                    break;
                case 3:
                    message.CatLimit = reader.string();
                    break;
                case 4:
                    message.RewardBase = reader.string();
                    break;
                case 5:
                    message.RewardFirst = reader.string();
                    break;
                case 6:
                    message.Weight = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NauticalEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.NauticalEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.NauticalEvent} NauticalEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NauticalEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NauticalEvent message.
         * @function verify
         * @memberof pattern.NauticalEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NauticalEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.PointLimit != null && message.hasOwnProperty("PointLimit"))
                if (!$util.isString(message.PointLimit))
                    return "PointLimit: string expected";
            if (message.CatLimit != null && message.hasOwnProperty("CatLimit"))
                if (!$util.isString(message.CatLimit))
                    return "CatLimit: string expected";
            if (message.RewardBase != null && message.hasOwnProperty("RewardBase"))
                if (!$util.isString(message.RewardBase))
                    return "RewardBase: string expected";
            if (message.RewardFirst != null && message.hasOwnProperty("RewardFirst"))
                if (!$util.isString(message.RewardFirst))
                    return "RewardFirst: string expected";
            if (message.Weight != null && message.hasOwnProperty("Weight"))
                if (!$util.isInteger(message.Weight))
                    return "Weight: integer expected";
            return null;
        };

        return NauticalEvent;
    })();

    pattern.NauticalFoods = (function() {

        /**
         * Properties of a NauticalFoods.
         * @memberof pattern
         * @interface INauticalFoods
         * @property {string|null} [Id] NauticalFoods Id
         * @property {string|null} [Name] NauticalFoods Name
         * @property {string|null} [Desc] NauticalFoods Desc
         * @property {string|null} [Icon] NauticalFoods Icon
         * @property {number|null} [Point] NauticalFoods Point
         * @property {number|null} [Intimacy] NauticalFoods Intimacy
         * @property {string|null} [UpgradeLine] NauticalFoods UpgradeLine
         * @property {number|null} [Rank] NauticalFoods Rank
         */

        /**
         * Constructs a new NauticalFoods.
         * @memberof pattern
         * @classdesc Represents a NauticalFoods.
         * @implements INauticalFoods
         * @constructor
         * @param {pattern.INauticalFoods=} [properties] Properties to set
         */
        function NauticalFoods(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NauticalFoods Id.
         * @member {string} Id
         * @memberof pattern.NauticalFoods
         * @instance
         */
        NauticalFoods.prototype.Id = "";

        /**
         * NauticalFoods Name.
         * @member {string} Name
         * @memberof pattern.NauticalFoods
         * @instance
         */
        NauticalFoods.prototype.Name = "";

        /**
         * NauticalFoods Desc.
         * @member {string} Desc
         * @memberof pattern.NauticalFoods
         * @instance
         */
        NauticalFoods.prototype.Desc = "";

        /**
         * NauticalFoods Icon.
         * @member {string} Icon
         * @memberof pattern.NauticalFoods
         * @instance
         */
        NauticalFoods.prototype.Icon = "";

        /**
         * NauticalFoods Point.
         * @member {number} Point
         * @memberof pattern.NauticalFoods
         * @instance
         */
        NauticalFoods.prototype.Point = 0;

        /**
         * NauticalFoods Intimacy.
         * @member {number} Intimacy
         * @memberof pattern.NauticalFoods
         * @instance
         */
        NauticalFoods.prototype.Intimacy = 0;

        /**
         * NauticalFoods UpgradeLine.
         * @member {string} UpgradeLine
         * @memberof pattern.NauticalFoods
         * @instance
         */
        NauticalFoods.prototype.UpgradeLine = "";

        /**
         * NauticalFoods Rank.
         * @member {number} Rank
         * @memberof pattern.NauticalFoods
         * @instance
         */
        NauticalFoods.prototype.Rank = 0;

        /**
         * Creates a new NauticalFoods instance using the specified properties.
         * @function create
         * @memberof pattern.NauticalFoods
         * @static
         * @param {pattern.INauticalFoods=} [properties] Properties to set
         * @returns {pattern.NauticalFoods} NauticalFoods instance
         */
        NauticalFoods.create = function create(properties) {
            return new NauticalFoods(properties);
        };

        /**
         * Encodes the specified NauticalFoods message. Does not implicitly {@link pattern.NauticalFoods.verify|verify} messages.
         * @function encode
         * @memberof pattern.NauticalFoods
         * @static
         * @param {pattern.INauticalFoods} message NauticalFoods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NauticalFoods.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Desc);
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Icon);
            if (message.Point != null && message.hasOwnProperty("Point"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Point);
            if (message.Intimacy != null && message.hasOwnProperty("Intimacy"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Intimacy);
            if (message.UpgradeLine != null && message.hasOwnProperty("UpgradeLine"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.UpgradeLine);
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Rank);
            return writer;
        };

        /**
         * Encodes the specified NauticalFoods message, length delimited. Does not implicitly {@link pattern.NauticalFoods.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.NauticalFoods
         * @static
         * @param {pattern.INauticalFoods} message NauticalFoods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NauticalFoods.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NauticalFoods message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.NauticalFoods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.NauticalFoods} NauticalFoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NauticalFoods.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.NauticalFoods();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Desc = reader.string();
                    break;
                case 4:
                    message.Icon = reader.string();
                    break;
                case 5:
                    message.Point = reader.int32();
                    break;
                case 6:
                    message.Intimacy = reader.int32();
                    break;
                case 7:
                    message.UpgradeLine = reader.string();
                    break;
                case 8:
                    message.Rank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NauticalFoods message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.NauticalFoods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.NauticalFoods} NauticalFoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NauticalFoods.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NauticalFoods message.
         * @function verify
         * @memberof pattern.NauticalFoods
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NauticalFoods.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                if (!$util.isString(message.Desc))
                    return "Desc: string expected";
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                if (!$util.isString(message.Icon))
                    return "Icon: string expected";
            if (message.Point != null && message.hasOwnProperty("Point"))
                if (!$util.isInteger(message.Point))
                    return "Point: integer expected";
            if (message.Intimacy != null && message.hasOwnProperty("Intimacy"))
                if (!$util.isInteger(message.Intimacy))
                    return "Intimacy: integer expected";
            if (message.UpgradeLine != null && message.hasOwnProperty("UpgradeLine"))
                if (!$util.isString(message.UpgradeLine))
                    return "UpgradeLine: string expected";
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                if (!$util.isInteger(message.Rank))
                    return "Rank: integer expected";
            return null;
        };

        return NauticalFoods;
    })();

    pattern.NauticalTools = (function() {

        /**
         * Properties of a NauticalTools.
         * @memberof pattern
         * @interface INauticalTools
         * @property {string|null} [Id] NauticalTools Id
         * @property {string|null} [Name] NauticalTools Name
         * @property {string|null} [Desc] NauticalTools Desc
         * @property {string|null} [Icon] NauticalTools Icon
         * @property {number|null} [PointRate] NauticalTools PointRate
         * @property {number|null} [IntimacyRate] NauticalTools IntimacyRate
         * @property {number|null} [Rank] NauticalTools Rank
         */

        /**
         * Constructs a new NauticalTools.
         * @memberof pattern
         * @classdesc Represents a NauticalTools.
         * @implements INauticalTools
         * @constructor
         * @param {pattern.INauticalTools=} [properties] Properties to set
         */
        function NauticalTools(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NauticalTools Id.
         * @member {string} Id
         * @memberof pattern.NauticalTools
         * @instance
         */
        NauticalTools.prototype.Id = "";

        /**
         * NauticalTools Name.
         * @member {string} Name
         * @memberof pattern.NauticalTools
         * @instance
         */
        NauticalTools.prototype.Name = "";

        /**
         * NauticalTools Desc.
         * @member {string} Desc
         * @memberof pattern.NauticalTools
         * @instance
         */
        NauticalTools.prototype.Desc = "";

        /**
         * NauticalTools Icon.
         * @member {string} Icon
         * @memberof pattern.NauticalTools
         * @instance
         */
        NauticalTools.prototype.Icon = "";

        /**
         * NauticalTools PointRate.
         * @member {number} PointRate
         * @memberof pattern.NauticalTools
         * @instance
         */
        NauticalTools.prototype.PointRate = 0;

        /**
         * NauticalTools IntimacyRate.
         * @member {number} IntimacyRate
         * @memberof pattern.NauticalTools
         * @instance
         */
        NauticalTools.prototype.IntimacyRate = 0;

        /**
         * NauticalTools Rank.
         * @member {number} Rank
         * @memberof pattern.NauticalTools
         * @instance
         */
        NauticalTools.prototype.Rank = 0;

        /**
         * Creates a new NauticalTools instance using the specified properties.
         * @function create
         * @memberof pattern.NauticalTools
         * @static
         * @param {pattern.INauticalTools=} [properties] Properties to set
         * @returns {pattern.NauticalTools} NauticalTools instance
         */
        NauticalTools.create = function create(properties) {
            return new NauticalTools(properties);
        };

        /**
         * Encodes the specified NauticalTools message. Does not implicitly {@link pattern.NauticalTools.verify|verify} messages.
         * @function encode
         * @memberof pattern.NauticalTools
         * @static
         * @param {pattern.INauticalTools} message NauticalTools message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NauticalTools.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Desc);
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Icon);
            if (message.PointRate != null && message.hasOwnProperty("PointRate"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.PointRate);
            if (message.IntimacyRate != null && message.hasOwnProperty("IntimacyRate"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.IntimacyRate);
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Rank);
            return writer;
        };

        /**
         * Encodes the specified NauticalTools message, length delimited. Does not implicitly {@link pattern.NauticalTools.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.NauticalTools
         * @static
         * @param {pattern.INauticalTools} message NauticalTools message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NauticalTools.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NauticalTools message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.NauticalTools
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.NauticalTools} NauticalTools
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NauticalTools.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.NauticalTools();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Desc = reader.string();
                    break;
                case 4:
                    message.Icon = reader.string();
                    break;
                case 5:
                    message.PointRate = reader.double();
                    break;
                case 6:
                    message.IntimacyRate = reader.double();
                    break;
                case 7:
                    message.Rank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NauticalTools message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.NauticalTools
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.NauticalTools} NauticalTools
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NauticalTools.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NauticalTools message.
         * @function verify
         * @memberof pattern.NauticalTools
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NauticalTools.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                if (!$util.isString(message.Desc))
                    return "Desc: string expected";
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                if (!$util.isString(message.Icon))
                    return "Icon: string expected";
            if (message.PointRate != null && message.hasOwnProperty("PointRate"))
                if (typeof message.PointRate !== "number")
                    return "PointRate: number expected";
            if (message.IntimacyRate != null && message.hasOwnProperty("IntimacyRate"))
                if (typeof message.IntimacyRate !== "number")
                    return "IntimacyRate: number expected";
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                if (!$util.isInteger(message.Rank))
                    return "Rank: integer expected";
            return null;
        };

        return NauticalTools;
    })();

    pattern.Role = (function() {

        /**
         * Properties of a Role.
         * @memberof pattern
         * @interface IRole
         * @property {string|null} [Id] Role Id
         * @property {string|null} [Name] Role Name
         * @property {string|null} [Source] Role Source
         * @property {string|null} [Skin] Role Skin
         * @property {string|null} [DefaultAction] Role DefaultAction
         * @property {string|null} [Icon] Role Icon
         * @property {string|null} [IconShadow] Role IconShadow
         * @property {string|null} [Desc1] Role Desc1
         * @property {string|null} [EventVisit] Role EventVisit
         * @property {string|null} [EventTravel] Role EventTravel
         * @property {Array.<number>|null} [Intimacy] Role Intimacy
         * @property {string|null} [AdoptLimit] Role AdoptLimit
         * @property {number|null} [ValueBase] Role ValueBase
         * @property {number|null} [StarBase] Role StarBase
         * @property {Array.<number>|null} [EventTimes] Role EventTimes
         * @property {Array.<string>|null} [FavorFoodsList] Role FavorFoodsList
         * @property {number|null} [Rank] Role Rank
         */

        /**
         * Constructs a new Role.
         * @memberof pattern
         * @classdesc Represents a Role.
         * @implements IRole
         * @constructor
         * @param {pattern.IRole=} [properties] Properties to set
         */
        function Role(properties) {
            this.Intimacy = [];
            this.EventTimes = [];
            this.FavorFoodsList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Role Id.
         * @member {string} Id
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.Id = "";

        /**
         * Role Name.
         * @member {string} Name
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.Name = "";

        /**
         * Role Source.
         * @member {string} Source
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.Source = "";

        /**
         * Role Skin.
         * @member {string} Skin
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.Skin = "";

        /**
         * Role DefaultAction.
         * @member {string} DefaultAction
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.DefaultAction = "";

        /**
         * Role Icon.
         * @member {string} Icon
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.Icon = "";

        /**
         * Role IconShadow.
         * @member {string} IconShadow
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.IconShadow = "";

        /**
         * Role Desc1.
         * @member {string} Desc1
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.Desc1 = "";

        /**
         * Role EventVisit.
         * @member {string} EventVisit
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.EventVisit = "";

        /**
         * Role EventTravel.
         * @member {string} EventTravel
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.EventTravel = "";

        /**
         * Role Intimacy.
         * @member {Array.<number>} Intimacy
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.Intimacy = $util.emptyArray;

        /**
         * Role AdoptLimit.
         * @member {string} AdoptLimit
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.AdoptLimit = "";

        /**
         * Role ValueBase.
         * @member {number} ValueBase
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.ValueBase = 0;

        /**
         * Role StarBase.
         * @member {number} StarBase
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.StarBase = 0;

        /**
         * Role EventTimes.
         * @member {Array.<number>} EventTimes
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.EventTimes = $util.emptyArray;

        /**
         * Role FavorFoodsList.
         * @member {Array.<string>} FavorFoodsList
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.FavorFoodsList = $util.emptyArray;

        /**
         * Role Rank.
         * @member {number} Rank
         * @memberof pattern.Role
         * @instance
         */
        Role.prototype.Rank = 0;

        /**
         * Creates a new Role instance using the specified properties.
         * @function create
         * @memberof pattern.Role
         * @static
         * @param {pattern.IRole=} [properties] Properties to set
         * @returns {pattern.Role} Role instance
         */
        Role.create = function create(properties) {
            return new Role(properties);
        };

        /**
         * Encodes the specified Role message. Does not implicitly {@link pattern.Role.verify|verify} messages.
         * @function encode
         * @memberof pattern.Role
         * @static
         * @param {pattern.IRole} message Role message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Role.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Source != null && message.hasOwnProperty("Source"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Source);
            if (message.Skin != null && message.hasOwnProperty("Skin"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Skin);
            if (message.DefaultAction != null && message.hasOwnProperty("DefaultAction"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.DefaultAction);
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Icon);
            if (message.IconShadow != null && message.hasOwnProperty("IconShadow"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.IconShadow);
            if (message.Desc1 != null && message.hasOwnProperty("Desc1"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.Desc1);
            if (message.EventVisit != null && message.hasOwnProperty("EventVisit"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.EventVisit);
            if (message.EventTravel != null && message.hasOwnProperty("EventTravel"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.EventTravel);
            if (message.Intimacy != null && message.Intimacy.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (var i = 0; i < message.Intimacy.length; ++i)
                    writer.int32(message.Intimacy[i]);
                writer.ldelim();
            }
            if (message.AdoptLimit != null && message.hasOwnProperty("AdoptLimit"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.AdoptLimit);
            if (message.ValueBase != null && message.hasOwnProperty("ValueBase"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ValueBase);
            if (message.StarBase != null && message.hasOwnProperty("StarBase"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.StarBase);
            if (message.EventTimes != null && message.EventTimes.length) {
                writer.uint32(/* id 15, wireType 2 =*/122).fork();
                for (var i = 0; i < message.EventTimes.length; ++i)
                    writer.int32(message.EventTimes[i]);
                writer.ldelim();
            }
            if (message.FavorFoodsList != null && message.FavorFoodsList.length)
                for (var i = 0; i < message.FavorFoodsList.length; ++i)
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.FavorFoodsList[i]);
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.Rank);
            return writer;
        };

        /**
         * Encodes the specified Role message, length delimited. Does not implicitly {@link pattern.Role.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.Role
         * @static
         * @param {pattern.IRole} message Role message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Role.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Role message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.Role
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.Role} Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Role.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.Role();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Source = reader.string();
                    break;
                case 4:
                    message.Skin = reader.string();
                    break;
                case 5:
                    message.DefaultAction = reader.string();
                    break;
                case 6:
                    message.Icon = reader.string();
                    break;
                case 7:
                    message.IconShadow = reader.string();
                    break;
                case 8:
                    message.Desc1 = reader.string();
                    break;
                case 9:
                    message.EventVisit = reader.string();
                    break;
                case 10:
                    message.EventTravel = reader.string();
                    break;
                case 11:
                    if (!(message.Intimacy && message.Intimacy.length))
                        message.Intimacy = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Intimacy.push(reader.int32());
                    } else
                        message.Intimacy.push(reader.int32());
                    break;
                case 12:
                    message.AdoptLimit = reader.string();
                    break;
                case 13:
                    message.ValueBase = reader.int32();
                    break;
                case 14:
                    message.StarBase = reader.int32();
                    break;
                case 15:
                    if (!(message.EventTimes && message.EventTimes.length))
                        message.EventTimes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.EventTimes.push(reader.int32());
                    } else
                        message.EventTimes.push(reader.int32());
                    break;
                case 16:
                    if (!(message.FavorFoodsList && message.FavorFoodsList.length))
                        message.FavorFoodsList = [];
                    message.FavorFoodsList.push(reader.string());
                    break;
                case 17:
                    message.Rank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Role message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.Role
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.Role} Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Role.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Role message.
         * @function verify
         * @memberof pattern.Role
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Role.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Source != null && message.hasOwnProperty("Source"))
                if (!$util.isString(message.Source))
                    return "Source: string expected";
            if (message.Skin != null && message.hasOwnProperty("Skin"))
                if (!$util.isString(message.Skin))
                    return "Skin: string expected";
            if (message.DefaultAction != null && message.hasOwnProperty("DefaultAction"))
                if (!$util.isString(message.DefaultAction))
                    return "DefaultAction: string expected";
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                if (!$util.isString(message.Icon))
                    return "Icon: string expected";
            if (message.IconShadow != null && message.hasOwnProperty("IconShadow"))
                if (!$util.isString(message.IconShadow))
                    return "IconShadow: string expected";
            if (message.Desc1 != null && message.hasOwnProperty("Desc1"))
                if (!$util.isString(message.Desc1))
                    return "Desc1: string expected";
            if (message.EventVisit != null && message.hasOwnProperty("EventVisit"))
                if (!$util.isString(message.EventVisit))
                    return "EventVisit: string expected";
            if (message.EventTravel != null && message.hasOwnProperty("EventTravel"))
                if (!$util.isString(message.EventTravel))
                    return "EventTravel: string expected";
            if (message.Intimacy != null && message.hasOwnProperty("Intimacy")) {
                if (!Array.isArray(message.Intimacy))
                    return "Intimacy: array expected";
                for (var i = 0; i < message.Intimacy.length; ++i)
                    if (!$util.isInteger(message.Intimacy[i]))
                        return "Intimacy: integer[] expected";
            }
            if (message.AdoptLimit != null && message.hasOwnProperty("AdoptLimit"))
                if (!$util.isString(message.AdoptLimit))
                    return "AdoptLimit: string expected";
            if (message.ValueBase != null && message.hasOwnProperty("ValueBase"))
                if (!$util.isInteger(message.ValueBase))
                    return "ValueBase: integer expected";
            if (message.StarBase != null && message.hasOwnProperty("StarBase"))
                if (!$util.isInteger(message.StarBase))
                    return "StarBase: integer expected";
            if (message.EventTimes != null && message.hasOwnProperty("EventTimes")) {
                if (!Array.isArray(message.EventTimes))
                    return "EventTimes: array expected";
                for (var i = 0; i < message.EventTimes.length; ++i)
                    if (!$util.isInteger(message.EventTimes[i]))
                        return "EventTimes: integer[] expected";
            }
            if (message.FavorFoodsList != null && message.hasOwnProperty("FavorFoodsList")) {
                if (!Array.isArray(message.FavorFoodsList))
                    return "FavorFoodsList: array expected";
                for (var i = 0; i < message.FavorFoodsList.length; ++i)
                    if (!$util.isString(message.FavorFoodsList[i]))
                        return "FavorFoodsList: string[] expected";
            }
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                if (!$util.isInteger(message.Rank))
                    return "Rank: integer expected";
            return null;
        };

        return Role;
    })();

    pattern.Scene = (function() {

        /**
         * Properties of a Scene.
         * @memberof pattern
         * @interface IScene
         * @property {string|null} [Id] Scene Id
         * @property {string|null} [Name] Scene Name
         * @property {string|null} [Desc1] Scene Desc1
         * @property {Array.<string>|null} [goto] Scene goto
         * @property {string|null} [BuildingList] Scene BuildingList
         */

        /**
         * Constructs a new Scene.
         * @memberof pattern
         * @classdesc Represents a Scene.
         * @implements IScene
         * @constructor
         * @param {pattern.IScene=} [properties] Properties to set
         */
        function Scene(properties) {
            this.goto = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Scene Id.
         * @member {string} Id
         * @memberof pattern.Scene
         * @instance
         */
        Scene.prototype.Id = "";

        /**
         * Scene Name.
         * @member {string} Name
         * @memberof pattern.Scene
         * @instance
         */
        Scene.prototype.Name = "";

        /**
         * Scene Desc1.
         * @member {string} Desc1
         * @memberof pattern.Scene
         * @instance
         */
        Scene.prototype.Desc1 = "";

        /**
         * Scene goto.
         * @member {Array.<string>} goto
         * @memberof pattern.Scene
         * @instance
         */
        Scene.prototype.goto = $util.emptyArray;

        /**
         * Scene BuildingList.
         * @member {string} BuildingList
         * @memberof pattern.Scene
         * @instance
         */
        Scene.prototype.BuildingList = "";

        /**
         * Creates a new Scene instance using the specified properties.
         * @function create
         * @memberof pattern.Scene
         * @static
         * @param {pattern.IScene=} [properties] Properties to set
         * @returns {pattern.Scene} Scene instance
         */
        Scene.create = function create(properties) {
            return new Scene(properties);
        };

        /**
         * Encodes the specified Scene message. Does not implicitly {@link pattern.Scene.verify|verify} messages.
         * @function encode
         * @memberof pattern.Scene
         * @static
         * @param {pattern.IScene} message Scene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Scene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Desc1 != null && message.hasOwnProperty("Desc1"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Desc1);
            if (message.goto != null && message.goto.length)
                for (var i = 0; i < message.goto.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.goto[i]);
            if (message.BuildingList != null && message.hasOwnProperty("BuildingList"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.BuildingList);
            return writer;
        };

        /**
         * Encodes the specified Scene message, length delimited. Does not implicitly {@link pattern.Scene.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.Scene
         * @static
         * @param {pattern.IScene} message Scene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Scene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Scene message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.Scene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.Scene} Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Scene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.Scene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Desc1 = reader.string();
                    break;
                case 4:
                    if (!(message.goto && message.goto.length))
                        message.goto = [];
                    message.goto.push(reader.string());
                    break;
                case 5:
                    message.BuildingList = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Scene message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.Scene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.Scene} Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Scene.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Scene message.
         * @function verify
         * @memberof pattern.Scene
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Scene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Desc1 != null && message.hasOwnProperty("Desc1"))
                if (!$util.isString(message.Desc1))
                    return "Desc1: string expected";
            if (message.goto != null && message.hasOwnProperty("goto")) {
                if (!Array.isArray(message.goto))
                    return "goto: array expected";
                for (var i = 0; i < message.goto.length; ++i)
                    if (!$util.isString(message.goto[i]))
                        return "goto: string[] expected";
            }
            if (message.BuildingList != null && message.hasOwnProperty("BuildingList"))
                if (!$util.isString(message.BuildingList))
                    return "BuildingList: string expected";
            return null;
        };

        return Scene;
    })();

    pattern.Task = (function() {

        /**
         * Properties of a Task.
         * @memberof pattern
         * @interface ITask
         * @property {string|null} [Id] Task Id
         * @property {string|null} [Name] Task Name
         * @property {string|null} [Desc] Task Desc
         * @property {string|null} [ConditionType] Task ConditionType
         * @property {number|null} [ConditionValue] Task ConditionValue
         * @property {string|null} [RewardType] Task RewardType
         * @property {number|null} [Reward] Task Reward
         */

        /**
         * Constructs a new Task.
         * @memberof pattern
         * @classdesc Represents a Task.
         * @implements ITask
         * @constructor
         * @param {pattern.ITask=} [properties] Properties to set
         */
        function Task(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Task Id.
         * @member {string} Id
         * @memberof pattern.Task
         * @instance
         */
        Task.prototype.Id = "";

        /**
         * Task Name.
         * @member {string} Name
         * @memberof pattern.Task
         * @instance
         */
        Task.prototype.Name = "";

        /**
         * Task Desc.
         * @member {string} Desc
         * @memberof pattern.Task
         * @instance
         */
        Task.prototype.Desc = "";

        /**
         * Task ConditionType.
         * @member {string} ConditionType
         * @memberof pattern.Task
         * @instance
         */
        Task.prototype.ConditionType = "";

        /**
         * Task ConditionValue.
         * @member {number} ConditionValue
         * @memberof pattern.Task
         * @instance
         */
        Task.prototype.ConditionValue = 0;

        /**
         * Task RewardType.
         * @member {string} RewardType
         * @memberof pattern.Task
         * @instance
         */
        Task.prototype.RewardType = "";

        /**
         * Task Reward.
         * @member {number} Reward
         * @memberof pattern.Task
         * @instance
         */
        Task.prototype.Reward = 0;

        /**
         * Creates a new Task instance using the specified properties.
         * @function create
         * @memberof pattern.Task
         * @static
         * @param {pattern.ITask=} [properties] Properties to set
         * @returns {pattern.Task} Task instance
         */
        Task.create = function create(properties) {
            return new Task(properties);
        };

        /**
         * Encodes the specified Task message. Does not implicitly {@link pattern.Task.verify|verify} messages.
         * @function encode
         * @memberof pattern.Task
         * @static
         * @param {pattern.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Desc);
            if (message.ConditionType != null && message.hasOwnProperty("ConditionType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ConditionType);
            if (message.ConditionValue != null && message.hasOwnProperty("ConditionValue"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ConditionValue);
            if (message.RewardType != null && message.hasOwnProperty("RewardType"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.RewardType);
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Reward);
            return writer;
        };

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link pattern.Task.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.Task
         * @static
         * @param {pattern.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.Task();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Desc = reader.string();
                    break;
                case 4:
                    message.ConditionType = reader.string();
                    break;
                case 5:
                    message.ConditionValue = reader.int32();
                    break;
                case 6:
                    message.RewardType = reader.string();
                    break;
                case 7:
                    message.Reward = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Task message.
         * @function verify
         * @memberof pattern.Task
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Task.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                if (!$util.isString(message.Desc))
                    return "Desc: string expected";
            if (message.ConditionType != null && message.hasOwnProperty("ConditionType"))
                if (!$util.isString(message.ConditionType))
                    return "ConditionType: string expected";
            if (message.ConditionValue != null && message.hasOwnProperty("ConditionValue"))
                if (!$util.isInteger(message.ConditionValue))
                    return "ConditionValue: integer expected";
            if (message.RewardType != null && message.hasOwnProperty("RewardType"))
                if (!$util.isString(message.RewardType))
                    return "RewardType: string expected";
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                if (!$util.isInteger(message.Reward))
                    return "Reward: integer expected";
            return null;
        };

        return Task;
    })();

    pattern.TaskList = (function() {

        /**
         * Properties of a TaskList.
         * @memberof pattern
         * @interface ITaskList
         * @property {string|null} [Id] TaskList Id
         * @property {number|null} [TaskType] TaskList TaskType
         * @property {Array.<string>|null} [List] TaskList List
         * @property {number|null} [Order] TaskList Order
         */

        /**
         * Constructs a new TaskList.
         * @memberof pattern
         * @classdesc Represents a TaskList.
         * @implements ITaskList
         * @constructor
         * @param {pattern.ITaskList=} [properties] Properties to set
         */
        function TaskList(properties) {
            this.List = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskList Id.
         * @member {string} Id
         * @memberof pattern.TaskList
         * @instance
         */
        TaskList.prototype.Id = "";

        /**
         * TaskList TaskType.
         * @member {number} TaskType
         * @memberof pattern.TaskList
         * @instance
         */
        TaskList.prototype.TaskType = 0;

        /**
         * TaskList List.
         * @member {Array.<string>} List
         * @memberof pattern.TaskList
         * @instance
         */
        TaskList.prototype.List = $util.emptyArray;

        /**
         * TaskList Order.
         * @member {number} Order
         * @memberof pattern.TaskList
         * @instance
         */
        TaskList.prototype.Order = 0;

        /**
         * Creates a new TaskList instance using the specified properties.
         * @function create
         * @memberof pattern.TaskList
         * @static
         * @param {pattern.ITaskList=} [properties] Properties to set
         * @returns {pattern.TaskList} TaskList instance
         */
        TaskList.create = function create(properties) {
            return new TaskList(properties);
        };

        /**
         * Encodes the specified TaskList message. Does not implicitly {@link pattern.TaskList.verify|verify} messages.
         * @function encode
         * @memberof pattern.TaskList
         * @static
         * @param {pattern.ITaskList} message TaskList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.TaskType != null && message.hasOwnProperty("TaskType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TaskType);
            if (message.List != null && message.List.length)
                for (var i = 0; i < message.List.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.List[i]);
            if (message.Order != null && message.hasOwnProperty("Order"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Order);
            return writer;
        };

        /**
         * Encodes the specified TaskList message, length delimited. Does not implicitly {@link pattern.TaskList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.TaskList
         * @static
         * @param {pattern.ITaskList} message TaskList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskList message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.TaskList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.TaskList} TaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.TaskList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    message.TaskType = reader.int32();
                    break;
                case 3:
                    if (!(message.List && message.List.length))
                        message.List = [];
                    message.List.push(reader.string());
                    break;
                case 4:
                    message.Order = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TaskList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.TaskList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.TaskList} TaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskList message.
         * @function verify
         * @memberof pattern.TaskList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.TaskType != null && message.hasOwnProperty("TaskType"))
                if (!$util.isInteger(message.TaskType))
                    return "TaskType: integer expected";
            if (message.List != null && message.hasOwnProperty("List")) {
                if (!Array.isArray(message.List))
                    return "List: array expected";
                for (var i = 0; i < message.List.length; ++i)
                    if (!$util.isString(message.List[i]))
                        return "List: string[] expected";
            }
            if (message.Order != null && message.hasOwnProperty("Order"))
                if (!$util.isInteger(message.Order))
                    return "Order: integer expected";
            return null;
        };

        return TaskList;
    })();

    pattern.Translate = (function() {

        /**
         * Properties of a Translate.
         * @memberof pattern
         * @interface ITranslate
         * @property {string|null} [Id] Translate Id
         * @property {Array.<string>|null} [zh_CH] Translate zh_CH
         */

        /**
         * Constructs a new Translate.
         * @memberof pattern
         * @classdesc Represents a Translate.
         * @implements ITranslate
         * @constructor
         * @param {pattern.ITranslate=} [properties] Properties to set
         */
        function Translate(properties) {
            this.zh_CH = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Translate Id.
         * @member {string} Id
         * @memberof pattern.Translate
         * @instance
         */
        Translate.prototype.Id = "";

        /**
         * Translate zh_CH.
         * @member {Array.<string>} zh_CH
         * @memberof pattern.Translate
         * @instance
         */
        Translate.prototype.zh_CH = $util.emptyArray;

        /**
         * Creates a new Translate instance using the specified properties.
         * @function create
         * @memberof pattern.Translate
         * @static
         * @param {pattern.ITranslate=} [properties] Properties to set
         * @returns {pattern.Translate} Translate instance
         */
        Translate.create = function create(properties) {
            return new Translate(properties);
        };

        /**
         * Encodes the specified Translate message. Does not implicitly {@link pattern.Translate.verify|verify} messages.
         * @function encode
         * @memberof pattern.Translate
         * @static
         * @param {pattern.ITranslate} message Translate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Translate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
            if (message.zh_CH != null && message.zh_CH.length)
                for (var i = 0; i < message.zh_CH.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.zh_CH[i]);
            return writer;
        };

        /**
         * Encodes the specified Translate message, length delimited. Does not implicitly {@link pattern.Translate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pattern.Translate
         * @static
         * @param {pattern.ITranslate} message Translate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Translate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Translate message from the specified reader or buffer.
         * @function decode
         * @memberof pattern.Translate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pattern.Translate} Translate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Translate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pattern.Translate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.string();
                    break;
                case 2:
                    if (!(message.zh_CH && message.zh_CH.length))
                        message.zh_CH = [];
                    message.zh_CH.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Translate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pattern.Translate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pattern.Translate} Translate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Translate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Translate message.
         * @function verify
         * @memberof pattern.Translate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Translate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isString(message.Id))
                    return "Id: string expected";
            if (message.zh_CH != null && message.hasOwnProperty("zh_CH")) {
                if (!Array.isArray(message.zh_CH))
                    return "zh_CH: array expected";
                for (var i = 0; i < message.zh_CH.length; ++i)
                    if (!$util.isString(message.zh_CH[i]))
                        return "zh_CH: string[] expected";
            }
            return null;
        };

        return Translate;
    })();

    return pattern;
})();