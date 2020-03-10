var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Player = (function() {

    /**
     * Namespace Player.
     * @exports Player
     * @namespace
     */
    var Player = {};

    Player.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof Player
         * @interface ILoginReq
         * @property {string|null} [rid] LoginReq rid
         */

        /**
         * Constructs a new LoginReq.
         * @memberof Player
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {Player.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq rid.
         * @member {string} rid
         * @memberof Player.LoginReq
         * @instance
         */
        LoginReq.prototype.rid = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof Player.LoginReq
         * @static
         * @param {Player.ILoginReq=} [properties] Properties to set
         * @returns {Player.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link Player.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof Player.LoginReq
         * @static
         * @param {Player.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rid != null && message.hasOwnProperty("rid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rid);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link Player.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Player.LoginReq
         * @static
         * @param {Player.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof Player.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Player.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Player.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Player.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof Player.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rid != null && message.hasOwnProperty("rid"))
                if (!$util.isString(message.rid))
                    return "rid: string expected";
            return null;
        };

        return LoginReq;
    })();

    Player.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof Player
         * @interface ILoginRes
         * @property {BaseInfo.IBag|null} [bag] LoginRes bag
         * @property {BaseInfo.IPlayerBuilding|null} [playerBuilding] LoginRes playerBuilding
         * @property {BaseInfo.IPlayerCats|null} [playerCats] LoginRes playerCats
         * @property {BaseInfo.ITasks|null} [tasks] LoginRes tasks
         * @property {BaseInfo.IFoodMenu|null} [menu] LoginRes menu
         * @property {BaseInfo.ILetterBox|null} [letterbox] LoginRes letterbox
         * @property {string|null} [customData] LoginRes customData
         */

        /**
         * Constructs a new LoginRes.
         * @memberof Player
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {Player.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.bag = null;

        /**
         * LoginRes playerBuilding.
         * @member {BaseInfo.IPlayerBuilding|null|undefined} playerBuilding
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.playerBuilding = null;

        /**
         * LoginRes playerCats.
         * @member {BaseInfo.IPlayerCats|null|undefined} playerCats
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.playerCats = null;

        /**
         * LoginRes tasks.
         * @member {BaseInfo.ITasks|null|undefined} tasks
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.tasks = null;

        /**
         * LoginRes menu.
         * @member {BaseInfo.IFoodMenu|null|undefined} menu
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.menu = null;

        /**
         * LoginRes letterbox.
         * @member {BaseInfo.ILetterBox|null|undefined} letterbox
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.letterbox = null;

        /**
         * LoginRes customData.
         * @member {string} customData
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.customData = "";

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof Player.LoginRes
         * @static
         * @param {Player.ILoginRes=} [properties] Properties to set
         * @returns {Player.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link Player.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof Player.LoginRes
         * @static
         * @param {Player.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.playerBuilding != null && message.hasOwnProperty("playerBuilding"))
                $root.BaseInfo.PlayerBuilding.encode(message.playerBuilding, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.playerCats != null && message.hasOwnProperty("playerCats"))
                $root.BaseInfo.PlayerCats.encode(message.playerCats, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.tasks != null && message.hasOwnProperty("tasks"))
                $root.BaseInfo.Tasks.encode(message.tasks, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.menu != null && message.hasOwnProperty("menu"))
                $root.BaseInfo.FoodMenu.encode(message.menu, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.letterbox != null && message.hasOwnProperty("letterbox"))
                $root.BaseInfo.LetterBox.encode(message.letterbox, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.customData != null && message.hasOwnProperty("customData"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.customData);
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link Player.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Player.LoginRes
         * @static
         * @param {Player.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof Player.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Player.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.playerBuilding = $root.BaseInfo.PlayerBuilding.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.playerCats = $root.BaseInfo.PlayerCats.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tasks = $root.BaseInfo.Tasks.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.menu = $root.BaseInfo.FoodMenu.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.letterbox = $root.BaseInfo.LetterBox.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.customData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Player.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Player.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof Player.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.playerBuilding != null && message.hasOwnProperty("playerBuilding")) {
                var error = $root.BaseInfo.PlayerBuilding.verify(message.playerBuilding);
                if (error)
                    return "playerBuilding." + error;
            }
            if (message.playerCats != null && message.hasOwnProperty("playerCats")) {
                var error = $root.BaseInfo.PlayerCats.verify(message.playerCats);
                if (error)
                    return "playerCats." + error;
            }
            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                var error = $root.BaseInfo.Tasks.verify(message.tasks);
                if (error)
                    return "tasks." + error;
            }
            if (message.menu != null && message.hasOwnProperty("menu")) {
                var error = $root.BaseInfo.FoodMenu.verify(message.menu);
                if (error)
                    return "menu." + error;
            }
            if (message.letterbox != null && message.hasOwnProperty("letterbox")) {
                var error = $root.BaseInfo.LetterBox.verify(message.letterbox);
                if (error)
                    return "letterbox." + error;
            }
            if (message.customData != null && message.hasOwnProperty("customData"))
                if (!$util.isString(message.customData))
                    return "customData: string expected";
            return null;
        };

        return LoginRes;
    })();

    Player.LogoutReq = (function() {

        /**
         * Properties of a LogoutReq.
         * @memberof Player
         * @interface ILogoutReq
         */

        /**
         * Constructs a new LogoutReq.
         * @memberof Player
         * @classdesc Represents a LogoutReq.
         * @implements ILogoutReq
         * @constructor
         * @param {Player.ILogoutReq=} [properties] Properties to set
         */
        function LogoutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LogoutReq instance using the specified properties.
         * @function create
         * @memberof Player.LogoutReq
         * @static
         * @param {Player.ILogoutReq=} [properties] Properties to set
         * @returns {Player.LogoutReq} LogoutReq instance
         */
        LogoutReq.create = function create(properties) {
            return new LogoutReq(properties);
        };

        /**
         * Encodes the specified LogoutReq message. Does not implicitly {@link Player.LogoutReq.verify|verify} messages.
         * @function encode
         * @memberof Player.LogoutReq
         * @static
         * @param {Player.ILogoutReq} message LogoutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LogoutReq message, length delimited. Does not implicitly {@link Player.LogoutReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Player.LogoutReq
         * @static
         * @param {Player.ILogoutReq} message LogoutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutReq message from the specified reader or buffer.
         * @function decode
         * @memberof Player.LogoutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Player.LogoutReq} LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player.LogoutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogoutReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Player.LogoutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Player.LogoutReq} LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutReq message.
         * @function verify
         * @memberof Player.LogoutReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return LogoutReq;
    })();

    Player.LogoutRes = (function() {

        /**
         * Properties of a LogoutRes.
         * @memberof Player
         * @interface ILogoutRes
         */

        /**
         * Constructs a new LogoutRes.
         * @memberof Player
         * @classdesc Represents a LogoutRes.
         * @implements ILogoutRes
         * @constructor
         * @param {Player.ILogoutRes=} [properties] Properties to set
         */
        function LogoutRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LogoutRes instance using the specified properties.
         * @function create
         * @memberof Player.LogoutRes
         * @static
         * @param {Player.ILogoutRes=} [properties] Properties to set
         * @returns {Player.LogoutRes} LogoutRes instance
         */
        LogoutRes.create = function create(properties) {
            return new LogoutRes(properties);
        };

        /**
         * Encodes the specified LogoutRes message. Does not implicitly {@link Player.LogoutRes.verify|verify} messages.
         * @function encode
         * @memberof Player.LogoutRes
         * @static
         * @param {Player.ILogoutRes} message LogoutRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LogoutRes message, length delimited. Does not implicitly {@link Player.LogoutRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Player.LogoutRes
         * @static
         * @param {Player.ILogoutRes} message LogoutRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutRes message from the specified reader or buffer.
         * @function decode
         * @memberof Player.LogoutRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Player.LogoutRes} LogoutRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player.LogoutRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogoutRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Player.LogoutRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Player.LogoutRes} LogoutRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutRes message.
         * @function verify
         * @memberof Player.LogoutRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return LogoutRes;
    })();

    Player.OnlineCrossDayReq = (function() {

        /**
         * Properties of an OnlineCrossDayReq.
         * @memberof Player
         * @interface IOnlineCrossDayReq
         */

        /**
         * Constructs a new OnlineCrossDayReq.
         * @memberof Player
         * @classdesc Represents an OnlineCrossDayReq.
         * @implements IOnlineCrossDayReq
         * @constructor
         * @param {Player.IOnlineCrossDayReq=} [properties] Properties to set
         */
        function OnlineCrossDayReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new OnlineCrossDayReq instance using the specified properties.
         * @function create
         * @memberof Player.OnlineCrossDayReq
         * @static
         * @param {Player.IOnlineCrossDayReq=} [properties] Properties to set
         * @returns {Player.OnlineCrossDayReq} OnlineCrossDayReq instance
         */
        OnlineCrossDayReq.create = function create(properties) {
            return new OnlineCrossDayReq(properties);
        };

        /**
         * Encodes the specified OnlineCrossDayReq message. Does not implicitly {@link Player.OnlineCrossDayReq.verify|verify} messages.
         * @function encode
         * @memberof Player.OnlineCrossDayReq
         * @static
         * @param {Player.IOnlineCrossDayReq} message OnlineCrossDayReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineCrossDayReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified OnlineCrossDayReq message, length delimited. Does not implicitly {@link Player.OnlineCrossDayReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Player.OnlineCrossDayReq
         * @static
         * @param {Player.IOnlineCrossDayReq} message OnlineCrossDayReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineCrossDayReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnlineCrossDayReq message from the specified reader or buffer.
         * @function decode
         * @memberof Player.OnlineCrossDayReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Player.OnlineCrossDayReq} OnlineCrossDayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineCrossDayReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player.OnlineCrossDayReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnlineCrossDayReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Player.OnlineCrossDayReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Player.OnlineCrossDayReq} OnlineCrossDayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineCrossDayReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnlineCrossDayReq message.
         * @function verify
         * @memberof Player.OnlineCrossDayReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnlineCrossDayReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return OnlineCrossDayReq;
    })();

    Player.OnlineCrossDayRes = (function() {

        /**
         * Properties of an OnlineCrossDayRes.
         * @memberof Player
         * @interface IOnlineCrossDayRes
         * @property {BaseInfo.IBag|null} [bag] OnlineCrossDayRes bag
         * @property {BaseInfo.ITasks|null} [tasks] OnlineCrossDayRes tasks
         */

        /**
         * Constructs a new OnlineCrossDayRes.
         * @memberof Player
         * @classdesc Represents an OnlineCrossDayRes.
         * @implements IOnlineCrossDayRes
         * @constructor
         * @param {Player.IOnlineCrossDayRes=} [properties] Properties to set
         */
        function OnlineCrossDayRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnlineCrossDayRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Player.OnlineCrossDayRes
         * @instance
         */
        OnlineCrossDayRes.prototype.bag = null;

        /**
         * OnlineCrossDayRes tasks.
         * @member {BaseInfo.ITasks|null|undefined} tasks
         * @memberof Player.OnlineCrossDayRes
         * @instance
         */
        OnlineCrossDayRes.prototype.tasks = null;

        /**
         * Creates a new OnlineCrossDayRes instance using the specified properties.
         * @function create
         * @memberof Player.OnlineCrossDayRes
         * @static
         * @param {Player.IOnlineCrossDayRes=} [properties] Properties to set
         * @returns {Player.OnlineCrossDayRes} OnlineCrossDayRes instance
         */
        OnlineCrossDayRes.create = function create(properties) {
            return new OnlineCrossDayRes(properties);
        };

        /**
         * Encodes the specified OnlineCrossDayRes message. Does not implicitly {@link Player.OnlineCrossDayRes.verify|verify} messages.
         * @function encode
         * @memberof Player.OnlineCrossDayRes
         * @static
         * @param {Player.IOnlineCrossDayRes} message OnlineCrossDayRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineCrossDayRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tasks != null && message.hasOwnProperty("tasks"))
                $root.BaseInfo.Tasks.encode(message.tasks, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OnlineCrossDayRes message, length delimited. Does not implicitly {@link Player.OnlineCrossDayRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Player.OnlineCrossDayRes
         * @static
         * @param {Player.IOnlineCrossDayRes} message OnlineCrossDayRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineCrossDayRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnlineCrossDayRes message from the specified reader or buffer.
         * @function decode
         * @memberof Player.OnlineCrossDayRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Player.OnlineCrossDayRes} OnlineCrossDayRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineCrossDayRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player.OnlineCrossDayRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tasks = $root.BaseInfo.Tasks.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnlineCrossDayRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Player.OnlineCrossDayRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Player.OnlineCrossDayRes} OnlineCrossDayRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineCrossDayRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnlineCrossDayRes message.
         * @function verify
         * @memberof Player.OnlineCrossDayRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnlineCrossDayRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                var error = $root.BaseInfo.Tasks.verify(message.tasks);
                if (error)
                    return "tasks." + error;
            }
            return null;
        };

        return OnlineCrossDayRes;
    })();

    return Player;
})();

$root.BaseInfo = (function() {

    /**
     * Namespace BaseInfo.
     * @exports BaseInfo
     * @namespace
     */
    var BaseInfo = {};

    BaseInfo.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof BaseInfo
         * @interface IItem
         * @property {string|null} [id] Item id
         * @property {number|Long|null} [count] Item count
         */

        /**
         * Constructs a new Item.
         * @memberof BaseInfo
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {BaseInfo.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item id.
         * @member {string} id
         * @memberof BaseInfo.Item
         * @instance
         */
        Item.prototype.id = "";

        /**
         * Item count.
         * @member {number|Long} count
         * @memberof BaseInfo.Item
         * @instance
         */
        Item.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof BaseInfo.Item
         * @static
         * @param {BaseInfo.IItem=} [properties] Properties to set
         * @returns {BaseInfo.Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };

        /**
         * Encodes the specified Item message. Does not implicitly {@link BaseInfo.Item.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.Item
         * @static
         * @param {BaseInfo.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count);
            return writer;
        };

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link BaseInfo.Item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.Item
         * @static
         * @param {BaseInfo.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.Item();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Item message.
         * @function verify
         * @memberof BaseInfo.Item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            return null;
        };

        return Item;
    })();

    BaseInfo.Bag = (function() {

        /**
         * Properties of a Bag.
         * @memberof BaseInfo
         * @interface IBag
         * @property {Object.<string,BaseInfo.IItem>|null} [items] Bag items
         */

        /**
         * Constructs a new Bag.
         * @memberof BaseInfo
         * @classdesc Represents a Bag.
         * @implements IBag
         * @constructor
         * @param {BaseInfo.IBag=} [properties] Properties to set
         */
        function Bag(properties) {
            this.items = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bag items.
         * @member {Object.<string,BaseInfo.IItem>} items
         * @memberof BaseInfo.Bag
         * @instance
         */
        Bag.prototype.items = $util.emptyObject;

        /**
         * Creates a new Bag instance using the specified properties.
         * @function create
         * @memberof BaseInfo.Bag
         * @static
         * @param {BaseInfo.IBag=} [properties] Properties to set
         * @returns {BaseInfo.Bag} Bag instance
         */
        Bag.create = function create(properties) {
            return new Bag(properties);
        };

        /**
         * Encodes the specified Bag message. Does not implicitly {@link BaseInfo.Bag.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.Bag
         * @static
         * @param {BaseInfo.IBag} message Bag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.hasOwnProperty("items"))
                for (var keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Item.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified Bag message, length delimited. Does not implicitly {@link BaseInfo.Bag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.Bag
         * @static
         * @param {BaseInfo.IBag} message Bag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bag message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.Bag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.Bag} Bag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.Bag(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.items === $util.emptyObject)
                        message.items = {};
                    key = reader.string();
                    reader.pos++;
                    message.items[key] = $root.BaseInfo.Item.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.Bag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.Bag} Bag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bag message.
         * @function verify
         * @memberof BaseInfo.Bag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!$util.isObject(message.items))
                    return "items: object expected";
                var key = Object.keys(message.items);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Item.verify(message.items[key[i]]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        return Bag;
    })();

    BaseInfo.Rewards = (function() {

        /**
         * Properties of a Rewards.
         * @memberof BaseInfo
         * @interface IRewards
         * @property {Array.<BaseInfo.IItem>|null} [rewards] Rewards rewards
         */

        /**
         * Constructs a new Rewards.
         * @memberof BaseInfo
         * @classdesc Represents a Rewards.
         * @implements IRewards
         * @constructor
         * @param {BaseInfo.IRewards=} [properties] Properties to set
         */
        function Rewards(properties) {
            this.rewards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rewards rewards.
         * @member {Array.<BaseInfo.IItem>} rewards
         * @memberof BaseInfo.Rewards
         * @instance
         */
        Rewards.prototype.rewards = $util.emptyArray;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @function create
         * @memberof BaseInfo.Rewards
         * @static
         * @param {BaseInfo.IRewards=} [properties] Properties to set
         * @returns {BaseInfo.Rewards} Rewards instance
         */
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link BaseInfo.Rewards.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.Rewards
         * @static
         * @param {BaseInfo.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rewards != null && message.rewards.length)
                for (var i = 0; i < message.rewards.length; ++i)
                    $root.BaseInfo.Item.encode(message.rewards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link BaseInfo.Rewards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.Rewards
         * @static
         * @param {BaseInfo.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.Rewards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rewards && message.rewards.length))
                        message.rewards = [];
                    message.rewards.push($root.BaseInfo.Item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rewards message.
         * @function verify
         * @memberof BaseInfo.Rewards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Rewards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                if (!Array.isArray(message.rewards))
                    return "rewards: array expected";
                for (var i = 0; i < message.rewards.length; ++i) {
                    var error = $root.BaseInfo.Item.verify(message.rewards[i]);
                    if (error)
                        return "rewards." + error;
                }
            }
            return null;
        };

        return Rewards;
    })();

    BaseInfo.Cat = (function() {

        /**
         * Properties of a Cat.
         * @memberof BaseInfo
         * @interface ICat
         * @property {string|null} [id] Cat id
         * @property {number|null} [intimacy] Cat intimacy
         */

        /**
         * Constructs a new Cat.
         * @memberof BaseInfo
         * @classdesc Represents a Cat.
         * @implements ICat
         * @constructor
         * @param {BaseInfo.ICat=} [properties] Properties to set
         */
        function Cat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cat id.
         * @member {string} id
         * @memberof BaseInfo.Cat
         * @instance
         */
        Cat.prototype.id = "";

        /**
         * Cat intimacy.
         * @member {number} intimacy
         * @memberof BaseInfo.Cat
         * @instance
         */
        Cat.prototype.intimacy = 0;

        /**
         * Creates a new Cat instance using the specified properties.
         * @function create
         * @memberof BaseInfo.Cat
         * @static
         * @param {BaseInfo.ICat=} [properties] Properties to set
         * @returns {BaseInfo.Cat} Cat instance
         */
        Cat.create = function create(properties) {
            return new Cat(properties);
        };

        /**
         * Encodes the specified Cat message. Does not implicitly {@link BaseInfo.Cat.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.Cat
         * @static
         * @param {BaseInfo.ICat} message Cat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.intimacy != null && message.hasOwnProperty("intimacy"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.intimacy);
            return writer;
        };

        /**
         * Encodes the specified Cat message, length delimited. Does not implicitly {@link BaseInfo.Cat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.Cat
         * @static
         * @param {BaseInfo.ICat} message Cat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cat message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.Cat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.Cat} Cat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.Cat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.intimacy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Cat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.Cat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.Cat} Cat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cat message.
         * @function verify
         * @memberof BaseInfo.Cat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.intimacy != null && message.hasOwnProperty("intimacy"))
                if (!$util.isInteger(message.intimacy))
                    return "intimacy: integer expected";
            return null;
        };

        return Cat;
    })();

    BaseInfo.PlayerCats = (function() {

        /**
         * Properties of a PlayerCats.
         * @memberof BaseInfo
         * @interface IPlayerCats
         * @property {Object.<string,BaseInfo.ICat>|null} [cats] PlayerCats cats
         */

        /**
         * Constructs a new PlayerCats.
         * @memberof BaseInfo
         * @classdesc Represents a PlayerCats.
         * @implements IPlayerCats
         * @constructor
         * @param {BaseInfo.IPlayerCats=} [properties] Properties to set
         */
        function PlayerCats(properties) {
            this.cats = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerCats cats.
         * @member {Object.<string,BaseInfo.ICat>} cats
         * @memberof BaseInfo.PlayerCats
         * @instance
         */
        PlayerCats.prototype.cats = $util.emptyObject;

        /**
         * Creates a new PlayerCats instance using the specified properties.
         * @function create
         * @memberof BaseInfo.PlayerCats
         * @static
         * @param {BaseInfo.IPlayerCats=} [properties] Properties to set
         * @returns {BaseInfo.PlayerCats} PlayerCats instance
         */
        PlayerCats.create = function create(properties) {
            return new PlayerCats(properties);
        };

        /**
         * Encodes the specified PlayerCats message. Does not implicitly {@link BaseInfo.PlayerCats.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.PlayerCats
         * @static
         * @param {BaseInfo.IPlayerCats} message PlayerCats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerCats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cats != null && message.hasOwnProperty("cats"))
                for (var keys = Object.keys(message.cats), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Cat.encode(message.cats[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified PlayerCats message, length delimited. Does not implicitly {@link BaseInfo.PlayerCats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.PlayerCats
         * @static
         * @param {BaseInfo.IPlayerCats} message PlayerCats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerCats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerCats message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.PlayerCats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.PlayerCats} PlayerCats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerCats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.PlayerCats(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.cats === $util.emptyObject)
                        message.cats = {};
                    key = reader.string();
                    reader.pos++;
                    message.cats[key] = $root.BaseInfo.Cat.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerCats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.PlayerCats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.PlayerCats} PlayerCats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerCats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerCats message.
         * @function verify
         * @memberof BaseInfo.PlayerCats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerCats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cats != null && message.hasOwnProperty("cats")) {
                if (!$util.isObject(message.cats))
                    return "cats: object expected";
                var key = Object.keys(message.cats);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Cat.verify(message.cats[key[i]]);
                    if (error)
                        return "cats." + error;
                }
            }
            return null;
        };

        return PlayerCats;
    })();

    BaseInfo.PlayerBuilding = (function() {

        /**
         * Properties of a PlayerBuilding.
         * @memberof BaseInfo
         * @interface IPlayerBuilding
         * @property {Object.<string,BaseInfo.IBuilding>|null} [buildings] PlayerBuilding buildings
         */

        /**
         * Constructs a new PlayerBuilding.
         * @memberof BaseInfo
         * @classdesc Represents a PlayerBuilding.
         * @implements IPlayerBuilding
         * @constructor
         * @param {BaseInfo.IPlayerBuilding=} [properties] Properties to set
         */
        function PlayerBuilding(properties) {
            this.buildings = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerBuilding buildings.
         * @member {Object.<string,BaseInfo.IBuilding>} buildings
         * @memberof BaseInfo.PlayerBuilding
         * @instance
         */
        PlayerBuilding.prototype.buildings = $util.emptyObject;

        /**
         * Creates a new PlayerBuilding instance using the specified properties.
         * @function create
         * @memberof BaseInfo.PlayerBuilding
         * @static
         * @param {BaseInfo.IPlayerBuilding=} [properties] Properties to set
         * @returns {BaseInfo.PlayerBuilding} PlayerBuilding instance
         */
        PlayerBuilding.create = function create(properties) {
            return new PlayerBuilding(properties);
        };

        /**
         * Encodes the specified PlayerBuilding message. Does not implicitly {@link BaseInfo.PlayerBuilding.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.PlayerBuilding
         * @static
         * @param {BaseInfo.IPlayerBuilding} message PlayerBuilding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBuilding.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buildings != null && message.hasOwnProperty("buildings"))
                for (var keys = Object.keys(message.buildings), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Building.encode(message.buildings[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified PlayerBuilding message, length delimited. Does not implicitly {@link BaseInfo.PlayerBuilding.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.PlayerBuilding
         * @static
         * @param {BaseInfo.IPlayerBuilding} message PlayerBuilding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBuilding.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerBuilding message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.PlayerBuilding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.PlayerBuilding} PlayerBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBuilding.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.PlayerBuilding(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.buildings === $util.emptyObject)
                        message.buildings = {};
                    key = reader.string();
                    reader.pos++;
                    message.buildings[key] = $root.BaseInfo.Building.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerBuilding message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.PlayerBuilding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.PlayerBuilding} PlayerBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBuilding.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerBuilding message.
         * @function verify
         * @memberof BaseInfo.PlayerBuilding
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerBuilding.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.buildings != null && message.hasOwnProperty("buildings")) {
                if (!$util.isObject(message.buildings))
                    return "buildings: object expected";
                var key = Object.keys(message.buildings);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Building.verify(message.buildings[key[i]]);
                    if (error)
                        return "buildings." + error;
                }
            }
            return null;
        };

        return PlayerBuilding;
    })();

    BaseInfo.Building = (function() {

        /**
         * Properties of a Building.
         * @memberof BaseInfo
         * @interface IBuilding
         * @property {string|null} [id] Building id
         * @property {string|null} [position] Building position
         */

        /**
         * Constructs a new Building.
         * @memberof BaseInfo
         * @classdesc Represents a Building.
         * @implements IBuilding
         * @constructor
         * @param {BaseInfo.IBuilding=} [properties] Properties to set
         */
        function Building(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Building id.
         * @member {string} id
         * @memberof BaseInfo.Building
         * @instance
         */
        Building.prototype.id = "";

        /**
         * Building position.
         * @member {string} position
         * @memberof BaseInfo.Building
         * @instance
         */
        Building.prototype.position = "";

        /**
         * Creates a new Building instance using the specified properties.
         * @function create
         * @memberof BaseInfo.Building
         * @static
         * @param {BaseInfo.IBuilding=} [properties] Properties to set
         * @returns {BaseInfo.Building} Building instance
         */
        Building.create = function create(properties) {
            return new Building(properties);
        };

        /**
         * Encodes the specified Building message. Does not implicitly {@link BaseInfo.Building.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.Building
         * @static
         * @param {BaseInfo.IBuilding} message Building message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Building.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.position);
            return writer;
        };

        /**
         * Encodes the specified Building message, length delimited. Does not implicitly {@link BaseInfo.Building.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.Building
         * @static
         * @param {BaseInfo.IBuilding} message Building message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Building.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Building message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.Building
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.Building} Building
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Building.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.Building();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.position = reader.string();
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
         * @memberof BaseInfo.Building
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.Building} Building
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
         * @memberof BaseInfo.Building
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Building.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isString(message.position))
                    return "position: string expected";
            return null;
        };

        return Building;
    })();

    BaseInfo.LetterBox = (function() {

        /**
         * Properties of a LetterBox.
         * @memberof BaseInfo
         * @interface ILetterBox
         * @property {number|Long|null} [capacity] LetterBox capacity
         * @property {number|Long|null} [fishToReward] LetterBox fishToReward
         * @property {number|Long|null} [lastUpdateMillis] LetterBox lastUpdateMillis
         */

        /**
         * Constructs a new LetterBox.
         * @memberof BaseInfo
         * @classdesc Represents a LetterBox.
         * @implements ILetterBox
         * @constructor
         * @param {BaseInfo.ILetterBox=} [properties] Properties to set
         */
        function LetterBox(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LetterBox capacity.
         * @member {number|Long} capacity
         * @memberof BaseInfo.LetterBox
         * @instance
         */
        LetterBox.prototype.capacity = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LetterBox fishToReward.
         * @member {number|Long} fishToReward
         * @memberof BaseInfo.LetterBox
         * @instance
         */
        LetterBox.prototype.fishToReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LetterBox lastUpdateMillis.
         * @member {number|Long} lastUpdateMillis
         * @memberof BaseInfo.LetterBox
         * @instance
         */
        LetterBox.prototype.lastUpdateMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LetterBox instance using the specified properties.
         * @function create
         * @memberof BaseInfo.LetterBox
         * @static
         * @param {BaseInfo.ILetterBox=} [properties] Properties to set
         * @returns {BaseInfo.LetterBox} LetterBox instance
         */
        LetterBox.create = function create(properties) {
            return new LetterBox(properties);
        };

        /**
         * Encodes the specified LetterBox message. Does not implicitly {@link BaseInfo.LetterBox.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.LetterBox
         * @static
         * @param {BaseInfo.ILetterBox} message LetterBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LetterBox.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.capacity != null && message.hasOwnProperty("capacity"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.capacity);
            if (message.fishToReward != null && message.hasOwnProperty("fishToReward"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.fishToReward);
            if (message.lastUpdateMillis != null && message.hasOwnProperty("lastUpdateMillis"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.lastUpdateMillis);
            return writer;
        };

        /**
         * Encodes the specified LetterBox message, length delimited. Does not implicitly {@link BaseInfo.LetterBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.LetterBox
         * @static
         * @param {BaseInfo.ILetterBox} message LetterBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LetterBox.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LetterBox message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.LetterBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.LetterBox} LetterBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LetterBox.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.LetterBox();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.capacity = reader.int64();
                    break;
                case 2:
                    message.fishToReward = reader.int64();
                    break;
                case 3:
                    message.lastUpdateMillis = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LetterBox message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.LetterBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.LetterBox} LetterBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LetterBox.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LetterBox message.
         * @function verify
         * @memberof BaseInfo.LetterBox
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LetterBox.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.capacity != null && message.hasOwnProperty("capacity"))
                if (!$util.isInteger(message.capacity) && !(message.capacity && $util.isInteger(message.capacity.low) && $util.isInteger(message.capacity.high)))
                    return "capacity: integer|Long expected";
            if (message.fishToReward != null && message.hasOwnProperty("fishToReward"))
                if (!$util.isInteger(message.fishToReward) && !(message.fishToReward && $util.isInteger(message.fishToReward.low) && $util.isInteger(message.fishToReward.high)))
                    return "fishToReward: integer|Long expected";
            if (message.lastUpdateMillis != null && message.hasOwnProperty("lastUpdateMillis"))
                if (!$util.isInteger(message.lastUpdateMillis) && !(message.lastUpdateMillis && $util.isInteger(message.lastUpdateMillis.low) && $util.isInteger(message.lastUpdateMillis.high)))
                    return "lastUpdateMillis: integer|Long expected";
            return null;
        };

        return LetterBox;
    })();

    BaseInfo.Tasks = (function() {

        /**
         * Properties of a Tasks.
         * @memberof BaseInfo
         * @interface ITasks
         * @property {Object.<string,BaseInfo.ITask>|null} [dailyTasks] Tasks dailyTasks
         * @property {Object.<string,BaseInfo.ITask>|null} [trophyTasks] Tasks trophyTasks
         */

        /**
         * Constructs a new Tasks.
         * @memberof BaseInfo
         * @classdesc Represents a Tasks.
         * @implements ITasks
         * @constructor
         * @param {BaseInfo.ITasks=} [properties] Properties to set
         */
        function Tasks(properties) {
            this.dailyTasks = {};
            this.trophyTasks = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tasks dailyTasks.
         * @member {Object.<string,BaseInfo.ITask>} dailyTasks
         * @memberof BaseInfo.Tasks
         * @instance
         */
        Tasks.prototype.dailyTasks = $util.emptyObject;

        /**
         * Tasks trophyTasks.
         * @member {Object.<string,BaseInfo.ITask>} trophyTasks
         * @memberof BaseInfo.Tasks
         * @instance
         */
        Tasks.prototype.trophyTasks = $util.emptyObject;

        /**
         * Creates a new Tasks instance using the specified properties.
         * @function create
         * @memberof BaseInfo.Tasks
         * @static
         * @param {BaseInfo.ITasks=} [properties] Properties to set
         * @returns {BaseInfo.Tasks} Tasks instance
         */
        Tasks.create = function create(properties) {
            return new Tasks(properties);
        };

        /**
         * Encodes the specified Tasks message. Does not implicitly {@link BaseInfo.Tasks.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.Tasks
         * @static
         * @param {BaseInfo.ITasks} message Tasks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tasks.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dailyTasks != null && message.hasOwnProperty("dailyTasks"))
                for (var keys = Object.keys(message.dailyTasks), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Task.encode(message.dailyTasks[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.trophyTasks != null && message.hasOwnProperty("trophyTasks"))
                for (var keys = Object.keys(message.trophyTasks), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Task.encode(message.trophyTasks[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified Tasks message, length delimited. Does not implicitly {@link BaseInfo.Tasks.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.Tasks
         * @static
         * @param {BaseInfo.ITasks} message Tasks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tasks.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tasks message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.Tasks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.Tasks} Tasks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tasks.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.Tasks(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.dailyTasks === $util.emptyObject)
                        message.dailyTasks = {};
                    key = reader.string();
                    reader.pos++;
                    message.dailyTasks[key] = $root.BaseInfo.Task.decode(reader, reader.uint32());
                    break;
                case 2:
                    reader.skip().pos++;
                    if (message.trophyTasks === $util.emptyObject)
                        message.trophyTasks = {};
                    key = reader.string();
                    reader.pos++;
                    message.trophyTasks[key] = $root.BaseInfo.Task.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tasks message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.Tasks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.Tasks} Tasks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tasks.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tasks message.
         * @function verify
         * @memberof BaseInfo.Tasks
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tasks.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dailyTasks != null && message.hasOwnProperty("dailyTasks")) {
                if (!$util.isObject(message.dailyTasks))
                    return "dailyTasks: object expected";
                var key = Object.keys(message.dailyTasks);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Task.verify(message.dailyTasks[key[i]]);
                    if (error)
                        return "dailyTasks." + error;
                }
            }
            if (message.trophyTasks != null && message.hasOwnProperty("trophyTasks")) {
                if (!$util.isObject(message.trophyTasks))
                    return "trophyTasks: object expected";
                var key = Object.keys(message.trophyTasks);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Task.verify(message.trophyTasks[key[i]]);
                    if (error)
                        return "trophyTasks." + error;
                }
            }
            return null;
        };

        return Tasks;
    })();

    BaseInfo.Task = (function() {

        /**
         * Properties of a Task.
         * @memberof BaseInfo
         * @interface ITask
         * @property {string|null} [id] Task id
         * @property {number|Long|null} [current] Task current
         * @property {number|Long|null} [target] Task target
         * @property {string|null} [taskListId] Task taskListId
         */

        /**
         * Constructs a new Task.
         * @memberof BaseInfo
         * @classdesc Represents a Task.
         * @implements ITask
         * @constructor
         * @param {BaseInfo.ITask=} [properties] Properties to set
         */
        function Task(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Task id.
         * @member {string} id
         * @memberof BaseInfo.Task
         * @instance
         */
        Task.prototype.id = "";

        /**
         * Task current.
         * @member {number|Long} current
         * @memberof BaseInfo.Task
         * @instance
         */
        Task.prototype.current = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Task target.
         * @member {number|Long} target
         * @memberof BaseInfo.Task
         * @instance
         */
        Task.prototype.target = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Task taskListId.
         * @member {string} taskListId
         * @memberof BaseInfo.Task
         * @instance
         */
        Task.prototype.taskListId = "";

        /**
         * Creates a new Task instance using the specified properties.
         * @function create
         * @memberof BaseInfo.Task
         * @static
         * @param {BaseInfo.ITask=} [properties] Properties to set
         * @returns {BaseInfo.Task} Task instance
         */
        Task.create = function create(properties) {
            return new Task(properties);
        };

        /**
         * Encodes the specified Task message. Does not implicitly {@link BaseInfo.Task.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.Task
         * @static
         * @param {BaseInfo.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.current != null && message.hasOwnProperty("current"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.current);
            if (message.target != null && message.hasOwnProperty("target"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.target);
            if (message.taskListId != null && message.hasOwnProperty("taskListId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.taskListId);
            return writer;
        };

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link BaseInfo.Task.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.Task
         * @static
         * @param {BaseInfo.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.Task();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.current = reader.int64();
                    break;
                case 3:
                    message.target = reader.int64();
                    break;
                case 4:
                    message.taskListId = reader.string();
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
         * @memberof BaseInfo.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.Task} Task
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
         * @memberof BaseInfo.Task
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Task.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.current != null && message.hasOwnProperty("current"))
                if (!$util.isInteger(message.current) && !(message.current && $util.isInteger(message.current.low) && $util.isInteger(message.current.high)))
                    return "current: integer|Long expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!$util.isInteger(message.target) && !(message.target && $util.isInteger(message.target.low) && $util.isInteger(message.target.high)))
                    return "target: integer|Long expected";
            if (message.taskListId != null && message.hasOwnProperty("taskListId"))
                if (!$util.isString(message.taskListId))
                    return "taskListId: string expected";
            return null;
        };

        return Task;
    })();

    BaseInfo.FoodMenu = (function() {

        /**
         * Properties of a FoodMenu.
         * @memberof BaseInfo
         * @interface IFoodMenu
         * @property {Object.<string,number>|null} [menu] FoodMenu menu
         */

        /**
         * Constructs a new FoodMenu.
         * @memberof BaseInfo
         * @classdesc Represents a FoodMenu.
         * @implements IFoodMenu
         * @constructor
         * @param {BaseInfo.IFoodMenu=} [properties] Properties to set
         */
        function FoodMenu(properties) {
            this.menu = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FoodMenu menu.
         * @member {Object.<string,number>} menu
         * @memberof BaseInfo.FoodMenu
         * @instance
         */
        FoodMenu.prototype.menu = $util.emptyObject;

        /**
         * Creates a new FoodMenu instance using the specified properties.
         * @function create
         * @memberof BaseInfo.FoodMenu
         * @static
         * @param {BaseInfo.IFoodMenu=} [properties] Properties to set
         * @returns {BaseInfo.FoodMenu} FoodMenu instance
         */
        FoodMenu.create = function create(properties) {
            return new FoodMenu(properties);
        };

        /**
         * Encodes the specified FoodMenu message. Does not implicitly {@link BaseInfo.FoodMenu.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.FoodMenu
         * @static
         * @param {BaseInfo.IFoodMenu} message FoodMenu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FoodMenu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.menu != null && message.hasOwnProperty("menu"))
                for (var keys = Object.keys(message.menu), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.menu[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FoodMenu message, length delimited. Does not implicitly {@link BaseInfo.FoodMenu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.FoodMenu
         * @static
         * @param {BaseInfo.IFoodMenu} message FoodMenu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FoodMenu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FoodMenu message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.FoodMenu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.FoodMenu} FoodMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FoodMenu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.FoodMenu(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.menu === $util.emptyObject)
                        message.menu = {};
                    key = reader.string();
                    reader.pos++;
                    message.menu[key] = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FoodMenu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.FoodMenu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.FoodMenu} FoodMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FoodMenu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FoodMenu message.
         * @function verify
         * @memberof BaseInfo.FoodMenu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FoodMenu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.menu != null && message.hasOwnProperty("menu")) {
                if (!$util.isObject(message.menu))
                    return "menu: object expected";
                var key = Object.keys(message.menu);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.menu[key[i]]))
                        return "menu: integer{k:string} expected";
            }
            return null;
        };

        return FoodMenu;
    })();

    return BaseInfo;
})();

$root.Notify = (function() {

    /**
     * Namespace Notify.
     * @exports Notify
     * @namespace
     */
    var Notify = {};

    Notify.Test = (function() {

        /**
         * Properties of a Test.
         * @memberof Notify
         * @interface ITest
         * @property {string|null} [rid] Test rid
         * @property {number|null} [num] Test num
         * @property {Notify.ITestIn|null} [testIn] Test testIn
         * @property {Notify.ITestOut|null} [testOut] Test testOut
         */

        /**
         * Constructs a new Test.
         * @memberof Notify
         * @classdesc Represents a Test.
         * @implements ITest
         * @constructor
         * @param {Notify.ITest=} [properties] Properties to set
         */
        function Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Test rid.
         * @member {string} rid
         * @memberof Notify.Test
         * @instance
         */
        Test.prototype.rid = "";

        /**
         * Test num.
         * @member {number} num
         * @memberof Notify.Test
         * @instance
         */
        Test.prototype.num = 0;

        /**
         * Test testIn.
         * @member {Notify.ITestIn|null|undefined} testIn
         * @memberof Notify.Test
         * @instance
         */
        Test.prototype.testIn = null;

        /**
         * Test testOut.
         * @member {Notify.ITestOut|null|undefined} testOut
         * @memberof Notify.Test
         * @instance
         */
        Test.prototype.testOut = null;

        /**
         * Creates a new Test instance using the specified properties.
         * @function create
         * @memberof Notify.Test
         * @static
         * @param {Notify.ITest=} [properties] Properties to set
         * @returns {Notify.Test} Test instance
         */
        Test.create = function create(properties) {
            return new Test(properties);
        };

        /**
         * Encodes the specified Test message. Does not implicitly {@link Notify.Test.verify|verify} messages.
         * @function encode
         * @memberof Notify.Test
         * @static
         * @param {Notify.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rid != null && message.hasOwnProperty("rid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rid);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            if (message.testIn != null && message.hasOwnProperty("testIn"))
                $root.Notify.TestIn.encode(message.testIn, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.testOut != null && message.hasOwnProperty("testOut"))
                $root.Notify.TestOut.encode(message.testOut, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link Notify.Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Notify.Test
         * @static
         * @param {Notify.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @function decode
         * @memberof Notify.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Notify.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Notify.Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rid = reader.string();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                case 3:
                    message.testIn = $root.Notify.TestIn.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.testOut = $root.Notify.TestOut.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Notify.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Notify.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Test message.
         * @function verify
         * @memberof Notify.Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rid != null && message.hasOwnProperty("rid"))
                if (!$util.isString(message.rid))
                    return "rid: string expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            if (message.testIn != null && message.hasOwnProperty("testIn")) {
                var error = $root.Notify.TestIn.verify(message.testIn);
                if (error)
                    return "testIn." + error;
            }
            if (message.testOut != null && message.hasOwnProperty("testOut")) {
                var error = $root.Notify.TestOut.verify(message.testOut);
                if (error)
                    return "testOut." + error;
            }
            return null;
        };

        return Test;
    })();

    Notify.TestIn = (function() {

        /**
         * Properties of a TestIn.
         * @memberof Notify
         * @interface ITestIn
         * @property {string|null} [hello] TestIn hello
         * @property {number|null} [world] TestIn world
         */

        /**
         * Constructs a new TestIn.
         * @memberof Notify
         * @classdesc Represents a TestIn.
         * @implements ITestIn
         * @constructor
         * @param {Notify.ITestIn=} [properties] Properties to set
         */
        function TestIn(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestIn hello.
         * @member {string} hello
         * @memberof Notify.TestIn
         * @instance
         */
        TestIn.prototype.hello = "";

        /**
         * TestIn world.
         * @member {number} world
         * @memberof Notify.TestIn
         * @instance
         */
        TestIn.prototype.world = 0;

        /**
         * Creates a new TestIn instance using the specified properties.
         * @function create
         * @memberof Notify.TestIn
         * @static
         * @param {Notify.ITestIn=} [properties] Properties to set
         * @returns {Notify.TestIn} TestIn instance
         */
        TestIn.create = function create(properties) {
            return new TestIn(properties);
        };

        /**
         * Encodes the specified TestIn message. Does not implicitly {@link Notify.TestIn.verify|verify} messages.
         * @function encode
         * @memberof Notify.TestIn
         * @static
         * @param {Notify.ITestIn} message TestIn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestIn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hello != null && message.hasOwnProperty("hello"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hello);
            if (message.world != null && message.hasOwnProperty("world"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.world);
            return writer;
        };

        /**
         * Encodes the specified TestIn message, length delimited. Does not implicitly {@link Notify.TestIn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Notify.TestIn
         * @static
         * @param {Notify.ITestIn} message TestIn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestIn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestIn message from the specified reader or buffer.
         * @function decode
         * @memberof Notify.TestIn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Notify.TestIn} TestIn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestIn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Notify.TestIn();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hello = reader.string();
                    break;
                case 2:
                    message.world = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestIn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Notify.TestIn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Notify.TestIn} TestIn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestIn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestIn message.
         * @function verify
         * @memberof Notify.TestIn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestIn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hello != null && message.hasOwnProperty("hello"))
                if (!$util.isString(message.hello))
                    return "hello: string expected";
            if (message.world != null && message.hasOwnProperty("world"))
                if (!$util.isInteger(message.world))
                    return "world: integer expected";
            return null;
        };

        return TestIn;
    })();

    Notify.TestOut = (function() {

        /**
         * Properties of a TestOut.
         * @memberof Notify
         * @interface ITestOut
         * @property {string|null} [fuck] TestOut fuck
         * @property {number|null} [you] TestOut you
         */

        /**
         * Constructs a new TestOut.
         * @memberof Notify
         * @classdesc Represents a TestOut.
         * @implements ITestOut
         * @constructor
         * @param {Notify.ITestOut=} [properties] Properties to set
         */
        function TestOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestOut fuck.
         * @member {string} fuck
         * @memberof Notify.TestOut
         * @instance
         */
        TestOut.prototype.fuck = "";

        /**
         * TestOut you.
         * @member {number} you
         * @memberof Notify.TestOut
         * @instance
         */
        TestOut.prototype.you = 0;

        /**
         * Creates a new TestOut instance using the specified properties.
         * @function create
         * @memberof Notify.TestOut
         * @static
         * @param {Notify.ITestOut=} [properties] Properties to set
         * @returns {Notify.TestOut} TestOut instance
         */
        TestOut.create = function create(properties) {
            return new TestOut(properties);
        };

        /**
         * Encodes the specified TestOut message. Does not implicitly {@link Notify.TestOut.verify|verify} messages.
         * @function encode
         * @memberof Notify.TestOut
         * @static
         * @param {Notify.ITestOut} message TestOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fuck != null && message.hasOwnProperty("fuck"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fuck);
            if (message.you != null && message.hasOwnProperty("you"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.you);
            return writer;
        };

        /**
         * Encodes the specified TestOut message, length delimited. Does not implicitly {@link Notify.TestOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Notify.TestOut
         * @static
         * @param {Notify.ITestOut} message TestOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestOut message from the specified reader or buffer.
         * @function decode
         * @memberof Notify.TestOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Notify.TestOut} TestOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Notify.TestOut();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fuck = reader.string();
                    break;
                case 2:
                    message.you = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Notify.TestOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Notify.TestOut} TestOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestOut message.
         * @function verify
         * @memberof Notify.TestOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fuck != null && message.hasOwnProperty("fuck"))
                if (!$util.isString(message.fuck))
                    return "fuck: string expected";
            if (message.you != null && message.hasOwnProperty("you"))
                if (!$util.isInteger(message.you))
                    return "you: integer expected";
            return null;
        };

        return TestOut;
    })();

    return Notify;
})();

$root.PlayerPushMsg = (function() {

    /**
     * Namespace PlayerPushMsg.
     * @exports PlayerPushMsg
     * @namespace
     */
    var PlayerPushMsg = {};

    PlayerPushMsg.TestMsg = (function() {

        /**
         * Properties of a TestMsg.
         * @memberof PlayerPushMsg
         * @interface ITestMsg
         * @property {string|null} [text] TestMsg text
         */

        /**
         * Constructs a new TestMsg.
         * @memberof PlayerPushMsg
         * @classdesc Represents a TestMsg.
         * @implements ITestMsg
         * @constructor
         * @param {PlayerPushMsg.ITestMsg=} [properties] Properties to set
         */
        function TestMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestMsg text.
         * @member {string} text
         * @memberof PlayerPushMsg.TestMsg
         * @instance
         */
        TestMsg.prototype.text = "";

        /**
         * Creates a new TestMsg instance using the specified properties.
         * @function create
         * @memberof PlayerPushMsg.TestMsg
         * @static
         * @param {PlayerPushMsg.ITestMsg=} [properties] Properties to set
         * @returns {PlayerPushMsg.TestMsg} TestMsg instance
         */
        TestMsg.create = function create(properties) {
            return new TestMsg(properties);
        };

        /**
         * Encodes the specified TestMsg message. Does not implicitly {@link PlayerPushMsg.TestMsg.verify|verify} messages.
         * @function encode
         * @memberof PlayerPushMsg.TestMsg
         * @static
         * @param {PlayerPushMsg.ITestMsg} message TestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && message.hasOwnProperty("text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified TestMsg message, length delimited. Does not implicitly {@link PlayerPushMsg.TestMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerPushMsg.TestMsg
         * @static
         * @param {PlayerPushMsg.ITestMsg} message TestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestMsg message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerPushMsg.TestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerPushMsg.TestMsg} TestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerPushMsg.TestMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerPushMsg.TestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerPushMsg.TestMsg} TestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestMsg message.
         * @function verify
         * @memberof PlayerPushMsg.TestMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        return TestMsg;
    })();

    PlayerPushMsg.ReddotMsg = (function() {

        /**
         * Properties of a ReddotMsg.
         * @memberof PlayerPushMsg
         * @interface IReddotMsg
         * @property {number|null} [type] ReddotMsg type
         * @property {string|null} [extraInfo] ReddotMsg extraInfo
         */

        /**
         * Constructs a new ReddotMsg.
         * @memberof PlayerPushMsg
         * @classdesc Represents a ReddotMsg.
         * @implements IReddotMsg
         * @constructor
         * @param {PlayerPushMsg.IReddotMsg=} [properties] Properties to set
         */
        function ReddotMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReddotMsg type.
         * @member {number} type
         * @memberof PlayerPushMsg.ReddotMsg
         * @instance
         */
        ReddotMsg.prototype.type = 0;

        /**
         * ReddotMsg extraInfo.
         * @member {string} extraInfo
         * @memberof PlayerPushMsg.ReddotMsg
         * @instance
         */
        ReddotMsg.prototype.extraInfo = "";

        /**
         * Creates a new ReddotMsg instance using the specified properties.
         * @function create
         * @memberof PlayerPushMsg.ReddotMsg
         * @static
         * @param {PlayerPushMsg.IReddotMsg=} [properties] Properties to set
         * @returns {PlayerPushMsg.ReddotMsg} ReddotMsg instance
         */
        ReddotMsg.create = function create(properties) {
            return new ReddotMsg(properties);
        };

        /**
         * Encodes the specified ReddotMsg message. Does not implicitly {@link PlayerPushMsg.ReddotMsg.verify|verify} messages.
         * @function encode
         * @memberof PlayerPushMsg.ReddotMsg
         * @static
         * @param {PlayerPushMsg.IReddotMsg} message ReddotMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReddotMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.extraInfo != null && message.hasOwnProperty("extraInfo"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.extraInfo);
            return writer;
        };

        /**
         * Encodes the specified ReddotMsg message, length delimited. Does not implicitly {@link PlayerPushMsg.ReddotMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerPushMsg.ReddotMsg
         * @static
         * @param {PlayerPushMsg.IReddotMsg} message ReddotMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReddotMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReddotMsg message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerPushMsg.ReddotMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerPushMsg.ReddotMsg} ReddotMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReddotMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerPushMsg.ReddotMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.extraInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReddotMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerPushMsg.ReddotMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerPushMsg.ReddotMsg} ReddotMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReddotMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReddotMsg message.
         * @function verify
         * @memberof PlayerPushMsg.ReddotMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReddotMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.extraInfo != null && message.hasOwnProperty("extraInfo"))
                if (!$util.isString(message.extraInfo))
                    return "extraInfo: string expected";
            return null;
        };

        return ReddotMsg;
    })();

    return PlayerPushMsg;
})();

$root.Building = (function() {

    /**
     * Namespace Building.
     * @exports Building
     * @namespace
     */
    var Building = {};

    Building.GetAllBuildingReq = (function() {

        /**
         * Properties of a GetAllBuildingReq.
         * @memberof Building
         * @interface IGetAllBuildingReq
         */

        /**
         * Constructs a new GetAllBuildingReq.
         * @memberof Building
         * @classdesc Represents a GetAllBuildingReq.
         * @implements IGetAllBuildingReq
         * @constructor
         * @param {Building.IGetAllBuildingReq=} [properties] Properties to set
         */
        function GetAllBuildingReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetAllBuildingReq instance using the specified properties.
         * @function create
         * @memberof Building.GetAllBuildingReq
         * @static
         * @param {Building.IGetAllBuildingReq=} [properties] Properties to set
         * @returns {Building.GetAllBuildingReq} GetAllBuildingReq instance
         */
        GetAllBuildingReq.create = function create(properties) {
            return new GetAllBuildingReq(properties);
        };

        /**
         * Encodes the specified GetAllBuildingReq message. Does not implicitly {@link Building.GetAllBuildingReq.verify|verify} messages.
         * @function encode
         * @memberof Building.GetAllBuildingReq
         * @static
         * @param {Building.IGetAllBuildingReq} message GetAllBuildingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllBuildingReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetAllBuildingReq message, length delimited. Does not implicitly {@link Building.GetAllBuildingReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Building.GetAllBuildingReq
         * @static
         * @param {Building.IGetAllBuildingReq} message GetAllBuildingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllBuildingReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllBuildingReq message from the specified reader or buffer.
         * @function decode
         * @memberof Building.GetAllBuildingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Building.GetAllBuildingReq} GetAllBuildingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllBuildingReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Building.GetAllBuildingReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAllBuildingReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Building.GetAllBuildingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Building.GetAllBuildingReq} GetAllBuildingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllBuildingReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllBuildingReq message.
         * @function verify
         * @memberof Building.GetAllBuildingReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllBuildingReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetAllBuildingReq;
    })();

    Building.GetAllBuildingRes = (function() {

        /**
         * Properties of a GetAllBuildingRes.
         * @memberof Building
         * @interface IGetAllBuildingRes
         * @property {BaseInfo.IPlayerBuilding|null} [playerBuilding] GetAllBuildingRes playerBuilding
         * @property {BaseInfo.IBag|null} [bag] GetAllBuildingRes bag
         */

        /**
         * Constructs a new GetAllBuildingRes.
         * @memberof Building
         * @classdesc Represents a GetAllBuildingRes.
         * @implements IGetAllBuildingRes
         * @constructor
         * @param {Building.IGetAllBuildingRes=} [properties] Properties to set
         */
        function GetAllBuildingRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAllBuildingRes playerBuilding.
         * @member {BaseInfo.IPlayerBuilding|null|undefined} playerBuilding
         * @memberof Building.GetAllBuildingRes
         * @instance
         */
        GetAllBuildingRes.prototype.playerBuilding = null;

        /**
         * GetAllBuildingRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Building.GetAllBuildingRes
         * @instance
         */
        GetAllBuildingRes.prototype.bag = null;

        /**
         * Creates a new GetAllBuildingRes instance using the specified properties.
         * @function create
         * @memberof Building.GetAllBuildingRes
         * @static
         * @param {Building.IGetAllBuildingRes=} [properties] Properties to set
         * @returns {Building.GetAllBuildingRes} GetAllBuildingRes instance
         */
        GetAllBuildingRes.create = function create(properties) {
            return new GetAllBuildingRes(properties);
        };

        /**
         * Encodes the specified GetAllBuildingRes message. Does not implicitly {@link Building.GetAllBuildingRes.verify|verify} messages.
         * @function encode
         * @memberof Building.GetAllBuildingRes
         * @static
         * @param {Building.IGetAllBuildingRes} message GetAllBuildingRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllBuildingRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerBuilding != null && message.hasOwnProperty("playerBuilding"))
                $root.BaseInfo.PlayerBuilding.encode(message.playerBuilding, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAllBuildingRes message, length delimited. Does not implicitly {@link Building.GetAllBuildingRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Building.GetAllBuildingRes
         * @static
         * @param {Building.IGetAllBuildingRes} message GetAllBuildingRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllBuildingRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllBuildingRes message from the specified reader or buffer.
         * @function decode
         * @memberof Building.GetAllBuildingRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Building.GetAllBuildingRes} GetAllBuildingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllBuildingRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Building.GetAllBuildingRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerBuilding = $root.BaseInfo.PlayerBuilding.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAllBuildingRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Building.GetAllBuildingRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Building.GetAllBuildingRes} GetAllBuildingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllBuildingRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllBuildingRes message.
         * @function verify
         * @memberof Building.GetAllBuildingRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllBuildingRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerBuilding != null && message.hasOwnProperty("playerBuilding")) {
                var error = $root.BaseInfo.PlayerBuilding.verify(message.playerBuilding);
                if (error)
                    return "playerBuilding." + error;
            }
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            return null;
        };

        return GetAllBuildingRes;
    })();

    Building.PutBuildingReq = (function() {

        /**
         * Properties of a PutBuildingReq.
         * @memberof Building
         * @interface IPutBuildingReq
         * @property {string|null} [buildingId] PutBuildingReq buildingId
         * @property {string|null} [pos] PutBuildingReq pos
         */

        /**
         * Constructs a new PutBuildingReq.
         * @memberof Building
         * @classdesc Represents a PutBuildingReq.
         * @implements IPutBuildingReq
         * @constructor
         * @param {Building.IPutBuildingReq=} [properties] Properties to set
         */
        function PutBuildingReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PutBuildingReq buildingId.
         * @member {string} buildingId
         * @memberof Building.PutBuildingReq
         * @instance
         */
        PutBuildingReq.prototype.buildingId = "";

        /**
         * PutBuildingReq pos.
         * @member {string} pos
         * @memberof Building.PutBuildingReq
         * @instance
         */
        PutBuildingReq.prototype.pos = "";

        /**
         * Creates a new PutBuildingReq instance using the specified properties.
         * @function create
         * @memberof Building.PutBuildingReq
         * @static
         * @param {Building.IPutBuildingReq=} [properties] Properties to set
         * @returns {Building.PutBuildingReq} PutBuildingReq instance
         */
        PutBuildingReq.create = function create(properties) {
            return new PutBuildingReq(properties);
        };

        /**
         * Encodes the specified PutBuildingReq message. Does not implicitly {@link Building.PutBuildingReq.verify|verify} messages.
         * @function encode
         * @memberof Building.PutBuildingReq
         * @static
         * @param {Building.IPutBuildingReq} message PutBuildingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutBuildingReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buildingId != null && message.hasOwnProperty("buildingId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.buildingId);
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pos);
            return writer;
        };

        /**
         * Encodes the specified PutBuildingReq message, length delimited. Does not implicitly {@link Building.PutBuildingReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Building.PutBuildingReq
         * @static
         * @param {Building.IPutBuildingReq} message PutBuildingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutBuildingReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PutBuildingReq message from the specified reader or buffer.
         * @function decode
         * @memberof Building.PutBuildingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Building.PutBuildingReq} PutBuildingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutBuildingReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Building.PutBuildingReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.buildingId = reader.string();
                    break;
                case 3:
                    message.pos = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PutBuildingReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Building.PutBuildingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Building.PutBuildingReq} PutBuildingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutBuildingReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PutBuildingReq message.
         * @function verify
         * @memberof Building.PutBuildingReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PutBuildingReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.buildingId != null && message.hasOwnProperty("buildingId"))
                if (!$util.isString(message.buildingId))
                    return "buildingId: string expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isString(message.pos))
                    return "pos: string expected";
            return null;
        };

        return PutBuildingReq;
    })();

    Building.PutBuildingRes = (function() {

        /**
         * Properties of a PutBuildingRes.
         * @memberof Building
         * @interface IPutBuildingRes
         * @property {BaseInfo.IBag|null} [bag] PutBuildingRes bag
         * @property {BaseInfo.ILetterBox|null} [letterbox] PutBuildingRes letterbox
         */

        /**
         * Constructs a new PutBuildingRes.
         * @memberof Building
         * @classdesc Represents a PutBuildingRes.
         * @implements IPutBuildingRes
         * @constructor
         * @param {Building.IPutBuildingRes=} [properties] Properties to set
         */
        function PutBuildingRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PutBuildingRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Building.PutBuildingRes
         * @instance
         */
        PutBuildingRes.prototype.bag = null;

        /**
         * PutBuildingRes letterbox.
         * @member {BaseInfo.ILetterBox|null|undefined} letterbox
         * @memberof Building.PutBuildingRes
         * @instance
         */
        PutBuildingRes.prototype.letterbox = null;

        /**
         * Creates a new PutBuildingRes instance using the specified properties.
         * @function create
         * @memberof Building.PutBuildingRes
         * @static
         * @param {Building.IPutBuildingRes=} [properties] Properties to set
         * @returns {Building.PutBuildingRes} PutBuildingRes instance
         */
        PutBuildingRes.create = function create(properties) {
            return new PutBuildingRes(properties);
        };

        /**
         * Encodes the specified PutBuildingRes message. Does not implicitly {@link Building.PutBuildingRes.verify|verify} messages.
         * @function encode
         * @memberof Building.PutBuildingRes
         * @static
         * @param {Building.IPutBuildingRes} message PutBuildingRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutBuildingRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.letterbox != null && message.hasOwnProperty("letterbox"))
                $root.BaseInfo.LetterBox.encode(message.letterbox, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PutBuildingRes message, length delimited. Does not implicitly {@link Building.PutBuildingRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Building.PutBuildingRes
         * @static
         * @param {Building.IPutBuildingRes} message PutBuildingRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutBuildingRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PutBuildingRes message from the specified reader or buffer.
         * @function decode
         * @memberof Building.PutBuildingRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Building.PutBuildingRes} PutBuildingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutBuildingRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Building.PutBuildingRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.letterbox = $root.BaseInfo.LetterBox.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PutBuildingRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Building.PutBuildingRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Building.PutBuildingRes} PutBuildingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutBuildingRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PutBuildingRes message.
         * @function verify
         * @memberof Building.PutBuildingRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PutBuildingRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.letterbox != null && message.hasOwnProperty("letterbox")) {
                var error = $root.BaseInfo.LetterBox.verify(message.letterbox);
                if (error)
                    return "letterbox." + error;
            }
            return null;
        };

        return PutBuildingRes;
    })();

    Building.RemoveBuildingReq = (function() {

        /**
         * Properties of a RemoveBuildingReq.
         * @memberof Building
         * @interface IRemoveBuildingReq
         * @property {string|null} [buildingId] RemoveBuildingReq buildingId
         */

        /**
         * Constructs a new RemoveBuildingReq.
         * @memberof Building
         * @classdesc Represents a RemoveBuildingReq.
         * @implements IRemoveBuildingReq
         * @constructor
         * @param {Building.IRemoveBuildingReq=} [properties] Properties to set
         */
        function RemoveBuildingReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveBuildingReq buildingId.
         * @member {string} buildingId
         * @memberof Building.RemoveBuildingReq
         * @instance
         */
        RemoveBuildingReq.prototype.buildingId = "";

        /**
         * Creates a new RemoveBuildingReq instance using the specified properties.
         * @function create
         * @memberof Building.RemoveBuildingReq
         * @static
         * @param {Building.IRemoveBuildingReq=} [properties] Properties to set
         * @returns {Building.RemoveBuildingReq} RemoveBuildingReq instance
         */
        RemoveBuildingReq.create = function create(properties) {
            return new RemoveBuildingReq(properties);
        };

        /**
         * Encodes the specified RemoveBuildingReq message. Does not implicitly {@link Building.RemoveBuildingReq.verify|verify} messages.
         * @function encode
         * @memberof Building.RemoveBuildingReq
         * @static
         * @param {Building.IRemoveBuildingReq} message RemoveBuildingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveBuildingReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buildingId != null && message.hasOwnProperty("buildingId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.buildingId);
            return writer;
        };

        /**
         * Encodes the specified RemoveBuildingReq message, length delimited. Does not implicitly {@link Building.RemoveBuildingReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Building.RemoveBuildingReq
         * @static
         * @param {Building.IRemoveBuildingReq} message RemoveBuildingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveBuildingReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveBuildingReq message from the specified reader or buffer.
         * @function decode
         * @memberof Building.RemoveBuildingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Building.RemoveBuildingReq} RemoveBuildingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveBuildingReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Building.RemoveBuildingReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.buildingId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveBuildingReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Building.RemoveBuildingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Building.RemoveBuildingReq} RemoveBuildingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveBuildingReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveBuildingReq message.
         * @function verify
         * @memberof Building.RemoveBuildingReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveBuildingReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.buildingId != null && message.hasOwnProperty("buildingId"))
                if (!$util.isString(message.buildingId))
                    return "buildingId: string expected";
            return null;
        };

        return RemoveBuildingReq;
    })();

    Building.RemoveBuildingRes = (function() {

        /**
         * Properties of a RemoveBuildingRes.
         * @memberof Building
         * @interface IRemoveBuildingRes
         * @property {BaseInfo.IBag|null} [bag] RemoveBuildingRes bag
         */

        /**
         * Constructs a new RemoveBuildingRes.
         * @memberof Building
         * @classdesc Represents a RemoveBuildingRes.
         * @implements IRemoveBuildingRes
         * @constructor
         * @param {Building.IRemoveBuildingRes=} [properties] Properties to set
         */
        function RemoveBuildingRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveBuildingRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Building.RemoveBuildingRes
         * @instance
         */
        RemoveBuildingRes.prototype.bag = null;

        /**
         * Creates a new RemoveBuildingRes instance using the specified properties.
         * @function create
         * @memberof Building.RemoveBuildingRes
         * @static
         * @param {Building.IRemoveBuildingRes=} [properties] Properties to set
         * @returns {Building.RemoveBuildingRes} RemoveBuildingRes instance
         */
        RemoveBuildingRes.create = function create(properties) {
            return new RemoveBuildingRes(properties);
        };

        /**
         * Encodes the specified RemoveBuildingRes message. Does not implicitly {@link Building.RemoveBuildingRes.verify|verify} messages.
         * @function encode
         * @memberof Building.RemoveBuildingRes
         * @static
         * @param {Building.IRemoveBuildingRes} message RemoveBuildingRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveBuildingRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RemoveBuildingRes message, length delimited. Does not implicitly {@link Building.RemoveBuildingRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Building.RemoveBuildingRes
         * @static
         * @param {Building.IRemoveBuildingRes} message RemoveBuildingRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveBuildingRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveBuildingRes message from the specified reader or buffer.
         * @function decode
         * @memberof Building.RemoveBuildingRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Building.RemoveBuildingRes} RemoveBuildingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveBuildingRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Building.RemoveBuildingRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveBuildingRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Building.RemoveBuildingRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Building.RemoveBuildingRes} RemoveBuildingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveBuildingRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveBuildingRes message.
         * @function verify
         * @memberof Building.RemoveBuildingRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveBuildingRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            return null;
        };

        return RemoveBuildingRes;
    })();

    return Building;
})();

$root.Scene = (function() {

    /**
     * Namespace Scene.
     * @exports Scene
     * @namespace
     */
    var Scene = {};

    Scene.UpdateSceneInfoReq = (function() {

        /**
         * Properties of an UpdateSceneInfoReq.
         * @memberof Scene
         * @interface IUpdateSceneInfoReq
         * @property {string|null} [customData] UpdateSceneInfoReq customData
         * @property {BaseInfo.IRewards|null} [rewards] UpdateSceneInfoReq rewards
         */

        /**
         * Constructs a new UpdateSceneInfoReq.
         * @memberof Scene
         * @classdesc Represents an UpdateSceneInfoReq.
         * @implements IUpdateSceneInfoReq
         * @constructor
         * @param {Scene.IUpdateSceneInfoReq=} [properties] Properties to set
         */
        function UpdateSceneInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateSceneInfoReq customData.
         * @member {string} customData
         * @memberof Scene.UpdateSceneInfoReq
         * @instance
         */
        UpdateSceneInfoReq.prototype.customData = "";

        /**
         * UpdateSceneInfoReq rewards.
         * @member {BaseInfo.IRewards|null|undefined} rewards
         * @memberof Scene.UpdateSceneInfoReq
         * @instance
         */
        UpdateSceneInfoReq.prototype.rewards = null;

        /**
         * Creates a new UpdateSceneInfoReq instance using the specified properties.
         * @function create
         * @memberof Scene.UpdateSceneInfoReq
         * @static
         * @param {Scene.IUpdateSceneInfoReq=} [properties] Properties to set
         * @returns {Scene.UpdateSceneInfoReq} UpdateSceneInfoReq instance
         */
        UpdateSceneInfoReq.create = function create(properties) {
            return new UpdateSceneInfoReq(properties);
        };

        /**
         * Encodes the specified UpdateSceneInfoReq message. Does not implicitly {@link Scene.UpdateSceneInfoReq.verify|verify} messages.
         * @function encode
         * @memberof Scene.UpdateSceneInfoReq
         * @static
         * @param {Scene.IUpdateSceneInfoReq} message UpdateSceneInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSceneInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.customData != null && message.hasOwnProperty("customData"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.customData);
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.BaseInfo.Rewards.encode(message.rewards, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateSceneInfoReq message, length delimited. Does not implicitly {@link Scene.UpdateSceneInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.UpdateSceneInfoReq
         * @static
         * @param {Scene.IUpdateSceneInfoReq} message UpdateSceneInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSceneInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateSceneInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.UpdateSceneInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.UpdateSceneInfoReq} UpdateSceneInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSceneInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.UpdateSceneInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.customData = reader.string();
                    break;
                case 2:
                    message.rewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateSceneInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.UpdateSceneInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.UpdateSceneInfoReq} UpdateSceneInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSceneInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateSceneInfoReq message.
         * @function verify
         * @memberof Scene.UpdateSceneInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateSceneInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.customData != null && message.hasOwnProperty("customData"))
                if (!$util.isString(message.customData))
                    return "customData: string expected";
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                var error = $root.BaseInfo.Rewards.verify(message.rewards);
                if (error)
                    return "rewards." + error;
            }
            return null;
        };

        return UpdateSceneInfoReq;
    })();

    Scene.UpdateSceneInfoRes = (function() {

        /**
         * Properties of an UpdateSceneInfoRes.
         * @memberof Scene
         * @interface IUpdateSceneInfoRes
         * @property {BaseInfo.IBag|null} [bag] UpdateSceneInfoRes bag
         * @property {BaseInfo.ILetterBox|null} [letterbox] UpdateSceneInfoRes letterbox
         */

        /**
         * Constructs a new UpdateSceneInfoRes.
         * @memberof Scene
         * @classdesc Represents an UpdateSceneInfoRes.
         * @implements IUpdateSceneInfoRes
         * @constructor
         * @param {Scene.IUpdateSceneInfoRes=} [properties] Properties to set
         */
        function UpdateSceneInfoRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateSceneInfoRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Scene.UpdateSceneInfoRes
         * @instance
         */
        UpdateSceneInfoRes.prototype.bag = null;

        /**
         * UpdateSceneInfoRes letterbox.
         * @member {BaseInfo.ILetterBox|null|undefined} letterbox
         * @memberof Scene.UpdateSceneInfoRes
         * @instance
         */
        UpdateSceneInfoRes.prototype.letterbox = null;

        /**
         * Creates a new UpdateSceneInfoRes instance using the specified properties.
         * @function create
         * @memberof Scene.UpdateSceneInfoRes
         * @static
         * @param {Scene.IUpdateSceneInfoRes=} [properties] Properties to set
         * @returns {Scene.UpdateSceneInfoRes} UpdateSceneInfoRes instance
         */
        UpdateSceneInfoRes.create = function create(properties) {
            return new UpdateSceneInfoRes(properties);
        };

        /**
         * Encodes the specified UpdateSceneInfoRes message. Does not implicitly {@link Scene.UpdateSceneInfoRes.verify|verify} messages.
         * @function encode
         * @memberof Scene.UpdateSceneInfoRes
         * @static
         * @param {Scene.IUpdateSceneInfoRes} message UpdateSceneInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSceneInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.letterbox != null && message.hasOwnProperty("letterbox"))
                $root.BaseInfo.LetterBox.encode(message.letterbox, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateSceneInfoRes message, length delimited. Does not implicitly {@link Scene.UpdateSceneInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.UpdateSceneInfoRes
         * @static
         * @param {Scene.IUpdateSceneInfoRes} message UpdateSceneInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSceneInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateSceneInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.UpdateSceneInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.UpdateSceneInfoRes} UpdateSceneInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSceneInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.UpdateSceneInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.letterbox = $root.BaseInfo.LetterBox.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateSceneInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.UpdateSceneInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.UpdateSceneInfoRes} UpdateSceneInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSceneInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateSceneInfoRes message.
         * @function verify
         * @memberof Scene.UpdateSceneInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateSceneInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.letterbox != null && message.hasOwnProperty("letterbox")) {
                var error = $root.BaseInfo.LetterBox.verify(message.letterbox);
                if (error)
                    return "letterbox." + error;
            }
            return null;
        };

        return UpdateSceneInfoRes;
    })();

    Scene.FetchLetterBoxReq = (function() {

        /**
         * Properties of a FetchLetterBoxReq.
         * @memberof Scene
         * @interface IFetchLetterBoxReq
         */

        /**
         * Constructs a new FetchLetterBoxReq.
         * @memberof Scene
         * @classdesc Represents a FetchLetterBoxReq.
         * @implements IFetchLetterBoxReq
         * @constructor
         * @param {Scene.IFetchLetterBoxReq=} [properties] Properties to set
         */
        function FetchLetterBoxReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FetchLetterBoxReq instance using the specified properties.
         * @function create
         * @memberof Scene.FetchLetterBoxReq
         * @static
         * @param {Scene.IFetchLetterBoxReq=} [properties] Properties to set
         * @returns {Scene.FetchLetterBoxReq} FetchLetterBoxReq instance
         */
        FetchLetterBoxReq.create = function create(properties) {
            return new FetchLetterBoxReq(properties);
        };

        /**
         * Encodes the specified FetchLetterBoxReq message. Does not implicitly {@link Scene.FetchLetterBoxReq.verify|verify} messages.
         * @function encode
         * @memberof Scene.FetchLetterBoxReq
         * @static
         * @param {Scene.IFetchLetterBoxReq} message FetchLetterBoxReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchLetterBoxReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FetchLetterBoxReq message, length delimited. Does not implicitly {@link Scene.FetchLetterBoxReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.FetchLetterBoxReq
         * @static
         * @param {Scene.IFetchLetterBoxReq} message FetchLetterBoxReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchLetterBoxReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchLetterBoxReq message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.FetchLetterBoxReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.FetchLetterBoxReq} FetchLetterBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchLetterBoxReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.FetchLetterBoxReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchLetterBoxReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.FetchLetterBoxReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.FetchLetterBoxReq} FetchLetterBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchLetterBoxReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchLetterBoxReq message.
         * @function verify
         * @memberof Scene.FetchLetterBoxReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchLetterBoxReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return FetchLetterBoxReq;
    })();

    Scene.FetchLetterBoxRes = (function() {

        /**
         * Properties of a FetchLetterBoxRes.
         * @memberof Scene
         * @interface IFetchLetterBoxRes
         * @property {BaseInfo.IBag|null} [bag] FetchLetterBoxRes bag
         * @property {BaseInfo.ILetterBox|null} [letterbox] FetchLetterBoxRes letterbox
         */

        /**
         * Constructs a new FetchLetterBoxRes.
         * @memberof Scene
         * @classdesc Represents a FetchLetterBoxRes.
         * @implements IFetchLetterBoxRes
         * @constructor
         * @param {Scene.IFetchLetterBoxRes=} [properties] Properties to set
         */
        function FetchLetterBoxRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FetchLetterBoxRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Scene.FetchLetterBoxRes
         * @instance
         */
        FetchLetterBoxRes.prototype.bag = null;

        /**
         * FetchLetterBoxRes letterbox.
         * @member {BaseInfo.ILetterBox|null|undefined} letterbox
         * @memberof Scene.FetchLetterBoxRes
         * @instance
         */
        FetchLetterBoxRes.prototype.letterbox = null;

        /**
         * Creates a new FetchLetterBoxRes instance using the specified properties.
         * @function create
         * @memberof Scene.FetchLetterBoxRes
         * @static
         * @param {Scene.IFetchLetterBoxRes=} [properties] Properties to set
         * @returns {Scene.FetchLetterBoxRes} FetchLetterBoxRes instance
         */
        FetchLetterBoxRes.create = function create(properties) {
            return new FetchLetterBoxRes(properties);
        };

        /**
         * Encodes the specified FetchLetterBoxRes message. Does not implicitly {@link Scene.FetchLetterBoxRes.verify|verify} messages.
         * @function encode
         * @memberof Scene.FetchLetterBoxRes
         * @static
         * @param {Scene.IFetchLetterBoxRes} message FetchLetterBoxRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchLetterBoxRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.letterbox != null && message.hasOwnProperty("letterbox"))
                $root.BaseInfo.LetterBox.encode(message.letterbox, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FetchLetterBoxRes message, length delimited. Does not implicitly {@link Scene.FetchLetterBoxRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.FetchLetterBoxRes
         * @static
         * @param {Scene.IFetchLetterBoxRes} message FetchLetterBoxRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchLetterBoxRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchLetterBoxRes message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.FetchLetterBoxRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.FetchLetterBoxRes} FetchLetterBoxRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchLetterBoxRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.FetchLetterBoxRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.letterbox = $root.BaseInfo.LetterBox.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchLetterBoxRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.FetchLetterBoxRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.FetchLetterBoxRes} FetchLetterBoxRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchLetterBoxRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchLetterBoxRes message.
         * @function verify
         * @memberof Scene.FetchLetterBoxRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchLetterBoxRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.letterbox != null && message.hasOwnProperty("letterbox")) {
                var error = $root.BaseInfo.LetterBox.verify(message.letterbox);
                if (error)
                    return "letterbox." + error;
            }
            return null;
        };

        return FetchLetterBoxRes;
    })();

    Scene.GetLetterBoxInfoReq = (function() {

        /**
         * Properties of a GetLetterBoxInfoReq.
         * @memberof Scene
         * @interface IGetLetterBoxInfoReq
         */

        /**
         * Constructs a new GetLetterBoxInfoReq.
         * @memberof Scene
         * @classdesc Represents a GetLetterBoxInfoReq.
         * @implements IGetLetterBoxInfoReq
         * @constructor
         * @param {Scene.IGetLetterBoxInfoReq=} [properties] Properties to set
         */
        function GetLetterBoxInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetLetterBoxInfoReq instance using the specified properties.
         * @function create
         * @memberof Scene.GetLetterBoxInfoReq
         * @static
         * @param {Scene.IGetLetterBoxInfoReq=} [properties] Properties to set
         * @returns {Scene.GetLetterBoxInfoReq} GetLetterBoxInfoReq instance
         */
        GetLetterBoxInfoReq.create = function create(properties) {
            return new GetLetterBoxInfoReq(properties);
        };

        /**
         * Encodes the specified GetLetterBoxInfoReq message. Does not implicitly {@link Scene.GetLetterBoxInfoReq.verify|verify} messages.
         * @function encode
         * @memberof Scene.GetLetterBoxInfoReq
         * @static
         * @param {Scene.IGetLetterBoxInfoReq} message GetLetterBoxInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLetterBoxInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetLetterBoxInfoReq message, length delimited. Does not implicitly {@link Scene.GetLetterBoxInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.GetLetterBoxInfoReq
         * @static
         * @param {Scene.IGetLetterBoxInfoReq} message GetLetterBoxInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLetterBoxInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLetterBoxInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.GetLetterBoxInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.GetLetterBoxInfoReq} GetLetterBoxInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLetterBoxInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.GetLetterBoxInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetLetterBoxInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.GetLetterBoxInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.GetLetterBoxInfoReq} GetLetterBoxInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLetterBoxInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLetterBoxInfoReq message.
         * @function verify
         * @memberof Scene.GetLetterBoxInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLetterBoxInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetLetterBoxInfoReq;
    })();

    Scene.GetLetterBoxInfoRes = (function() {

        /**
         * Properties of a GetLetterBoxInfoRes.
         * @memberof Scene
         * @interface IGetLetterBoxInfoRes
         * @property {BaseInfo.ILetterBox|null} [letterbox] GetLetterBoxInfoRes letterbox
         */

        /**
         * Constructs a new GetLetterBoxInfoRes.
         * @memberof Scene
         * @classdesc Represents a GetLetterBoxInfoRes.
         * @implements IGetLetterBoxInfoRes
         * @constructor
         * @param {Scene.IGetLetterBoxInfoRes=} [properties] Properties to set
         */
        function GetLetterBoxInfoRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetLetterBoxInfoRes letterbox.
         * @member {BaseInfo.ILetterBox|null|undefined} letterbox
         * @memberof Scene.GetLetterBoxInfoRes
         * @instance
         */
        GetLetterBoxInfoRes.prototype.letterbox = null;

        /**
         * Creates a new GetLetterBoxInfoRes instance using the specified properties.
         * @function create
         * @memberof Scene.GetLetterBoxInfoRes
         * @static
         * @param {Scene.IGetLetterBoxInfoRes=} [properties] Properties to set
         * @returns {Scene.GetLetterBoxInfoRes} GetLetterBoxInfoRes instance
         */
        GetLetterBoxInfoRes.create = function create(properties) {
            return new GetLetterBoxInfoRes(properties);
        };

        /**
         * Encodes the specified GetLetterBoxInfoRes message. Does not implicitly {@link Scene.GetLetterBoxInfoRes.verify|verify} messages.
         * @function encode
         * @memberof Scene.GetLetterBoxInfoRes
         * @static
         * @param {Scene.IGetLetterBoxInfoRes} message GetLetterBoxInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLetterBoxInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.letterbox != null && message.hasOwnProperty("letterbox"))
                $root.BaseInfo.LetterBox.encode(message.letterbox, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetLetterBoxInfoRes message, length delimited. Does not implicitly {@link Scene.GetLetterBoxInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.GetLetterBoxInfoRes
         * @static
         * @param {Scene.IGetLetterBoxInfoRes} message GetLetterBoxInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLetterBoxInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLetterBoxInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.GetLetterBoxInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.GetLetterBoxInfoRes} GetLetterBoxInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLetterBoxInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.GetLetterBoxInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.letterbox = $root.BaseInfo.LetterBox.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetLetterBoxInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.GetLetterBoxInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.GetLetterBoxInfoRes} GetLetterBoxInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLetterBoxInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLetterBoxInfoRes message.
         * @function verify
         * @memberof Scene.GetLetterBoxInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLetterBoxInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.letterbox != null && message.hasOwnProperty("letterbox")) {
                var error = $root.BaseInfo.LetterBox.verify(message.letterbox);
                if (error)
                    return "letterbox." + error;
            }
            return null;
        };

        return GetLetterBoxInfoRes;
    })();

    return Scene;
})();

$root.Task = (function() {

    /**
     * Namespace Task.
     * @exports Task
     * @namespace
     */
    var Task = {};

    Task.GetAllTasksReq = (function() {

        /**
         * Properties of a GetAllTasksReq.
         * @memberof Task
         * @interface IGetAllTasksReq
         */

        /**
         * Constructs a new GetAllTasksReq.
         * @memberof Task
         * @classdesc Represents a GetAllTasksReq.
         * @implements IGetAllTasksReq
         * @constructor
         * @param {Task.IGetAllTasksReq=} [properties] Properties to set
         */
        function GetAllTasksReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetAllTasksReq instance using the specified properties.
         * @function create
         * @memberof Task.GetAllTasksReq
         * @static
         * @param {Task.IGetAllTasksReq=} [properties] Properties to set
         * @returns {Task.GetAllTasksReq} GetAllTasksReq instance
         */
        GetAllTasksReq.create = function create(properties) {
            return new GetAllTasksReq(properties);
        };

        /**
         * Encodes the specified GetAllTasksReq message. Does not implicitly {@link Task.GetAllTasksReq.verify|verify} messages.
         * @function encode
         * @memberof Task.GetAllTasksReq
         * @static
         * @param {Task.IGetAllTasksReq} message GetAllTasksReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllTasksReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetAllTasksReq message, length delimited. Does not implicitly {@link Task.GetAllTasksReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Task.GetAllTasksReq
         * @static
         * @param {Task.IGetAllTasksReq} message GetAllTasksReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllTasksReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllTasksReq message from the specified reader or buffer.
         * @function decode
         * @memberof Task.GetAllTasksReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Task.GetAllTasksReq} GetAllTasksReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllTasksReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Task.GetAllTasksReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAllTasksReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Task.GetAllTasksReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Task.GetAllTasksReq} GetAllTasksReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllTasksReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllTasksReq message.
         * @function verify
         * @memberof Task.GetAllTasksReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllTasksReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetAllTasksReq;
    })();

    Task.GetAllTasksRes = (function() {

        /**
         * Properties of a GetAllTasksRes.
         * @memberof Task
         * @interface IGetAllTasksRes
         * @property {BaseInfo.ITasks|null} [tasks] GetAllTasksRes tasks
         */

        /**
         * Constructs a new GetAllTasksRes.
         * @memberof Task
         * @classdesc Represents a GetAllTasksRes.
         * @implements IGetAllTasksRes
         * @constructor
         * @param {Task.IGetAllTasksRes=} [properties] Properties to set
         */
        function GetAllTasksRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAllTasksRes tasks.
         * @member {BaseInfo.ITasks|null|undefined} tasks
         * @memberof Task.GetAllTasksRes
         * @instance
         */
        GetAllTasksRes.prototype.tasks = null;

        /**
         * Creates a new GetAllTasksRes instance using the specified properties.
         * @function create
         * @memberof Task.GetAllTasksRes
         * @static
         * @param {Task.IGetAllTasksRes=} [properties] Properties to set
         * @returns {Task.GetAllTasksRes} GetAllTasksRes instance
         */
        GetAllTasksRes.create = function create(properties) {
            return new GetAllTasksRes(properties);
        };

        /**
         * Encodes the specified GetAllTasksRes message. Does not implicitly {@link Task.GetAllTasksRes.verify|verify} messages.
         * @function encode
         * @memberof Task.GetAllTasksRes
         * @static
         * @param {Task.IGetAllTasksRes} message GetAllTasksRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllTasksRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tasks != null && message.hasOwnProperty("tasks"))
                $root.BaseInfo.Tasks.encode(message.tasks, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAllTasksRes message, length delimited. Does not implicitly {@link Task.GetAllTasksRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Task.GetAllTasksRes
         * @static
         * @param {Task.IGetAllTasksRes} message GetAllTasksRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllTasksRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllTasksRes message from the specified reader or buffer.
         * @function decode
         * @memberof Task.GetAllTasksRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Task.GetAllTasksRes} GetAllTasksRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllTasksRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Task.GetAllTasksRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tasks = $root.BaseInfo.Tasks.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAllTasksRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Task.GetAllTasksRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Task.GetAllTasksRes} GetAllTasksRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllTasksRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllTasksRes message.
         * @function verify
         * @memberof Task.GetAllTasksRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllTasksRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                var error = $root.BaseInfo.Tasks.verify(message.tasks);
                if (error)
                    return "tasks." + error;
            }
            return null;
        };

        return GetAllTasksRes;
    })();

    Task.getDailyTaskRewardReq = (function() {

        /**
         * Properties of a getDailyTaskRewardReq.
         * @memberof Task
         * @interface IgetDailyTaskRewardReq
         * @property {string|null} [taskId] getDailyTaskRewardReq taskId
         */

        /**
         * Constructs a new getDailyTaskRewardReq.
         * @memberof Task
         * @classdesc Represents a getDailyTaskRewardReq.
         * @implements IgetDailyTaskRewardReq
         * @constructor
         * @param {Task.IgetDailyTaskRewardReq=} [properties] Properties to set
         */
        function getDailyTaskRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * getDailyTaskRewardReq taskId.
         * @member {string} taskId
         * @memberof Task.getDailyTaskRewardReq
         * @instance
         */
        getDailyTaskRewardReq.prototype.taskId = "";

        /**
         * Creates a new getDailyTaskRewardReq instance using the specified properties.
         * @function create
         * @memberof Task.getDailyTaskRewardReq
         * @static
         * @param {Task.IgetDailyTaskRewardReq=} [properties] Properties to set
         * @returns {Task.getDailyTaskRewardReq} getDailyTaskRewardReq instance
         */
        getDailyTaskRewardReq.create = function create(properties) {
            return new getDailyTaskRewardReq(properties);
        };

        /**
         * Encodes the specified getDailyTaskRewardReq message. Does not implicitly {@link Task.getDailyTaskRewardReq.verify|verify} messages.
         * @function encode
         * @memberof Task.getDailyTaskRewardReq
         * @static
         * @param {Task.IgetDailyTaskRewardReq} message getDailyTaskRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getDailyTaskRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.taskId);
            return writer;
        };

        /**
         * Encodes the specified getDailyTaskRewardReq message, length delimited. Does not implicitly {@link Task.getDailyTaskRewardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Task.getDailyTaskRewardReq
         * @static
         * @param {Task.IgetDailyTaskRewardReq} message getDailyTaskRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getDailyTaskRewardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a getDailyTaskRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof Task.getDailyTaskRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Task.getDailyTaskRewardReq} getDailyTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getDailyTaskRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Task.getDailyTaskRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a getDailyTaskRewardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Task.getDailyTaskRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Task.getDailyTaskRewardReq} getDailyTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getDailyTaskRewardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a getDailyTaskRewardReq message.
         * @function verify
         * @memberof Task.getDailyTaskRewardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        getDailyTaskRewardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isString(message.taskId))
                    return "taskId: string expected";
            return null;
        };

        return getDailyTaskRewardReq;
    })();

    Task.getDailyTaskRewardRes = (function() {

        /**
         * Properties of a getDailyTaskRewardRes.
         * @memberof Task
         * @interface IgetDailyTaskRewardRes
         * @property {BaseInfo.ITasks|null} [tasks] getDailyTaskRewardRes tasks
         * @property {BaseInfo.IBag|null} [bag] getDailyTaskRewardRes bag
         * @property {BaseInfo.IRewards|null} [rewards] getDailyTaskRewardRes rewards
         */

        /**
         * Constructs a new getDailyTaskRewardRes.
         * @memberof Task
         * @classdesc Represents a getDailyTaskRewardRes.
         * @implements IgetDailyTaskRewardRes
         * @constructor
         * @param {Task.IgetDailyTaskRewardRes=} [properties] Properties to set
         */
        function getDailyTaskRewardRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * getDailyTaskRewardRes tasks.
         * @member {BaseInfo.ITasks|null|undefined} tasks
         * @memberof Task.getDailyTaskRewardRes
         * @instance
         */
        getDailyTaskRewardRes.prototype.tasks = null;

        /**
         * getDailyTaskRewardRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Task.getDailyTaskRewardRes
         * @instance
         */
        getDailyTaskRewardRes.prototype.bag = null;

        /**
         * getDailyTaskRewardRes rewards.
         * @member {BaseInfo.IRewards|null|undefined} rewards
         * @memberof Task.getDailyTaskRewardRes
         * @instance
         */
        getDailyTaskRewardRes.prototype.rewards = null;

        /**
         * Creates a new getDailyTaskRewardRes instance using the specified properties.
         * @function create
         * @memberof Task.getDailyTaskRewardRes
         * @static
         * @param {Task.IgetDailyTaskRewardRes=} [properties] Properties to set
         * @returns {Task.getDailyTaskRewardRes} getDailyTaskRewardRes instance
         */
        getDailyTaskRewardRes.create = function create(properties) {
            return new getDailyTaskRewardRes(properties);
        };

        /**
         * Encodes the specified getDailyTaskRewardRes message. Does not implicitly {@link Task.getDailyTaskRewardRes.verify|verify} messages.
         * @function encode
         * @memberof Task.getDailyTaskRewardRes
         * @static
         * @param {Task.IgetDailyTaskRewardRes} message getDailyTaskRewardRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getDailyTaskRewardRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tasks != null && message.hasOwnProperty("tasks"))
                $root.BaseInfo.Tasks.encode(message.tasks, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.BaseInfo.Rewards.encode(message.rewards, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified getDailyTaskRewardRes message, length delimited. Does not implicitly {@link Task.getDailyTaskRewardRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Task.getDailyTaskRewardRes
         * @static
         * @param {Task.IgetDailyTaskRewardRes} message getDailyTaskRewardRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getDailyTaskRewardRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a getDailyTaskRewardRes message from the specified reader or buffer.
         * @function decode
         * @memberof Task.getDailyTaskRewardRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Task.getDailyTaskRewardRes} getDailyTaskRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getDailyTaskRewardRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Task.getDailyTaskRewardRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tasks = $root.BaseInfo.Tasks.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a getDailyTaskRewardRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Task.getDailyTaskRewardRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Task.getDailyTaskRewardRes} getDailyTaskRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getDailyTaskRewardRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a getDailyTaskRewardRes message.
         * @function verify
         * @memberof Task.getDailyTaskRewardRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        getDailyTaskRewardRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                var error = $root.BaseInfo.Tasks.verify(message.tasks);
                if (error)
                    return "tasks." + error;
            }
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                var error = $root.BaseInfo.Rewards.verify(message.rewards);
                if (error)
                    return "rewards." + error;
            }
            return null;
        };

        return getDailyTaskRewardRes;
    })();

    Task.getTrophyTaskRewardReq = (function() {

        /**
         * Properties of a getTrophyTaskRewardReq.
         * @memberof Task
         * @interface IgetTrophyTaskRewardReq
         * @property {string|null} [taskId] getTrophyTaskRewardReq taskId
         */

        /**
         * Constructs a new getTrophyTaskRewardReq.
         * @memberof Task
         * @classdesc Represents a getTrophyTaskRewardReq.
         * @implements IgetTrophyTaskRewardReq
         * @constructor
         * @param {Task.IgetTrophyTaskRewardReq=} [properties] Properties to set
         */
        function getTrophyTaskRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * getTrophyTaskRewardReq taskId.
         * @member {string} taskId
         * @memberof Task.getTrophyTaskRewardReq
         * @instance
         */
        getTrophyTaskRewardReq.prototype.taskId = "";

        /**
         * Creates a new getTrophyTaskRewardReq instance using the specified properties.
         * @function create
         * @memberof Task.getTrophyTaskRewardReq
         * @static
         * @param {Task.IgetTrophyTaskRewardReq=} [properties] Properties to set
         * @returns {Task.getTrophyTaskRewardReq} getTrophyTaskRewardReq instance
         */
        getTrophyTaskRewardReq.create = function create(properties) {
            return new getTrophyTaskRewardReq(properties);
        };

        /**
         * Encodes the specified getTrophyTaskRewardReq message. Does not implicitly {@link Task.getTrophyTaskRewardReq.verify|verify} messages.
         * @function encode
         * @memberof Task.getTrophyTaskRewardReq
         * @static
         * @param {Task.IgetTrophyTaskRewardReq} message getTrophyTaskRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getTrophyTaskRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.taskId);
            return writer;
        };

        /**
         * Encodes the specified getTrophyTaskRewardReq message, length delimited. Does not implicitly {@link Task.getTrophyTaskRewardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Task.getTrophyTaskRewardReq
         * @static
         * @param {Task.IgetTrophyTaskRewardReq} message getTrophyTaskRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getTrophyTaskRewardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a getTrophyTaskRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof Task.getTrophyTaskRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Task.getTrophyTaskRewardReq} getTrophyTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getTrophyTaskRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Task.getTrophyTaskRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a getTrophyTaskRewardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Task.getTrophyTaskRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Task.getTrophyTaskRewardReq} getTrophyTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getTrophyTaskRewardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a getTrophyTaskRewardReq message.
         * @function verify
         * @memberof Task.getTrophyTaskRewardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        getTrophyTaskRewardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isString(message.taskId))
                    return "taskId: string expected";
            return null;
        };

        return getTrophyTaskRewardReq;
    })();

    Task.getTrophyTaskRewardRes = (function() {

        /**
         * Properties of a getTrophyTaskRewardRes.
         * @memberof Task
         * @interface IgetTrophyTaskRewardRes
         * @property {BaseInfo.ITasks|null} [tasks] getTrophyTaskRewardRes tasks
         * @property {BaseInfo.IBag|null} [bag] getTrophyTaskRewardRes bag
         * @property {BaseInfo.IRewards|null} [rewards] getTrophyTaskRewardRes rewards
         */

        /**
         * Constructs a new getTrophyTaskRewardRes.
         * @memberof Task
         * @classdesc Represents a getTrophyTaskRewardRes.
         * @implements IgetTrophyTaskRewardRes
         * @constructor
         * @param {Task.IgetTrophyTaskRewardRes=} [properties] Properties to set
         */
        function getTrophyTaskRewardRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * getTrophyTaskRewardRes tasks.
         * @member {BaseInfo.ITasks|null|undefined} tasks
         * @memberof Task.getTrophyTaskRewardRes
         * @instance
         */
        getTrophyTaskRewardRes.prototype.tasks = null;

        /**
         * getTrophyTaskRewardRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Task.getTrophyTaskRewardRes
         * @instance
         */
        getTrophyTaskRewardRes.prototype.bag = null;

        /**
         * getTrophyTaskRewardRes rewards.
         * @member {BaseInfo.IRewards|null|undefined} rewards
         * @memberof Task.getTrophyTaskRewardRes
         * @instance
         */
        getTrophyTaskRewardRes.prototype.rewards = null;

        /**
         * Creates a new getTrophyTaskRewardRes instance using the specified properties.
         * @function create
         * @memberof Task.getTrophyTaskRewardRes
         * @static
         * @param {Task.IgetTrophyTaskRewardRes=} [properties] Properties to set
         * @returns {Task.getTrophyTaskRewardRes} getTrophyTaskRewardRes instance
         */
        getTrophyTaskRewardRes.create = function create(properties) {
            return new getTrophyTaskRewardRes(properties);
        };

        /**
         * Encodes the specified getTrophyTaskRewardRes message. Does not implicitly {@link Task.getTrophyTaskRewardRes.verify|verify} messages.
         * @function encode
         * @memberof Task.getTrophyTaskRewardRes
         * @static
         * @param {Task.IgetTrophyTaskRewardRes} message getTrophyTaskRewardRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getTrophyTaskRewardRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tasks != null && message.hasOwnProperty("tasks"))
                $root.BaseInfo.Tasks.encode(message.tasks, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.BaseInfo.Rewards.encode(message.rewards, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified getTrophyTaskRewardRes message, length delimited. Does not implicitly {@link Task.getTrophyTaskRewardRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Task.getTrophyTaskRewardRes
         * @static
         * @param {Task.IgetTrophyTaskRewardRes} message getTrophyTaskRewardRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getTrophyTaskRewardRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a getTrophyTaskRewardRes message from the specified reader or buffer.
         * @function decode
         * @memberof Task.getTrophyTaskRewardRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Task.getTrophyTaskRewardRes} getTrophyTaskRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getTrophyTaskRewardRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Task.getTrophyTaskRewardRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tasks = $root.BaseInfo.Tasks.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a getTrophyTaskRewardRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Task.getTrophyTaskRewardRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Task.getTrophyTaskRewardRes} getTrophyTaskRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getTrophyTaskRewardRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a getTrophyTaskRewardRes message.
         * @function verify
         * @memberof Task.getTrophyTaskRewardRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        getTrophyTaskRewardRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                var error = $root.BaseInfo.Tasks.verify(message.tasks);
                if (error)
                    return "tasks." + error;
            }
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                var error = $root.BaseInfo.Rewards.verify(message.rewards);
                if (error)
                    return "rewards." + error;
            }
            return null;
        };

        return getTrophyTaskRewardRes;
    })();

    return Task;
})();

$root.Food = (function() {

    /**
     * Namespace Food.
     * @exports Food
     * @namespace
     */
    var Food = {};

    Food.GetPlayerFoodMenuReq = (function() {

        /**
         * Properties of a GetPlayerFoodMenuReq.
         * @memberof Food
         * @interface IGetPlayerFoodMenuReq
         */

        /**
         * Constructs a new GetPlayerFoodMenuReq.
         * @memberof Food
         * @classdesc Represents a GetPlayerFoodMenuReq.
         * @implements IGetPlayerFoodMenuReq
         * @constructor
         * @param {Food.IGetPlayerFoodMenuReq=} [properties] Properties to set
         */
        function GetPlayerFoodMenuReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetPlayerFoodMenuReq instance using the specified properties.
         * @function create
         * @memberof Food.GetPlayerFoodMenuReq
         * @static
         * @param {Food.IGetPlayerFoodMenuReq=} [properties] Properties to set
         * @returns {Food.GetPlayerFoodMenuReq} GetPlayerFoodMenuReq instance
         */
        GetPlayerFoodMenuReq.create = function create(properties) {
            return new GetPlayerFoodMenuReq(properties);
        };

        /**
         * Encodes the specified GetPlayerFoodMenuReq message. Does not implicitly {@link Food.GetPlayerFoodMenuReq.verify|verify} messages.
         * @function encode
         * @memberof Food.GetPlayerFoodMenuReq
         * @static
         * @param {Food.IGetPlayerFoodMenuReq} message GetPlayerFoodMenuReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerFoodMenuReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetPlayerFoodMenuReq message, length delimited. Does not implicitly {@link Food.GetPlayerFoodMenuReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Food.GetPlayerFoodMenuReq
         * @static
         * @param {Food.IGetPlayerFoodMenuReq} message GetPlayerFoodMenuReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerFoodMenuReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerFoodMenuReq message from the specified reader or buffer.
         * @function decode
         * @memberof Food.GetPlayerFoodMenuReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Food.GetPlayerFoodMenuReq} GetPlayerFoodMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerFoodMenuReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Food.GetPlayerFoodMenuReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayerFoodMenuReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Food.GetPlayerFoodMenuReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Food.GetPlayerFoodMenuReq} GetPlayerFoodMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerFoodMenuReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayerFoodMenuReq message.
         * @function verify
         * @memberof Food.GetPlayerFoodMenuReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerFoodMenuReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetPlayerFoodMenuReq;
    })();

    Food.GetPlayerFoodMenuRes = (function() {

        /**
         * Properties of a GetPlayerFoodMenuRes.
         * @memberof Food
         * @interface IGetPlayerFoodMenuRes
         * @property {BaseInfo.IFoodMenu|null} [menu] GetPlayerFoodMenuRes menu
         */

        /**
         * Constructs a new GetPlayerFoodMenuRes.
         * @memberof Food
         * @classdesc Represents a GetPlayerFoodMenuRes.
         * @implements IGetPlayerFoodMenuRes
         * @constructor
         * @param {Food.IGetPlayerFoodMenuRes=} [properties] Properties to set
         */
        function GetPlayerFoodMenuRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayerFoodMenuRes menu.
         * @member {BaseInfo.IFoodMenu|null|undefined} menu
         * @memberof Food.GetPlayerFoodMenuRes
         * @instance
         */
        GetPlayerFoodMenuRes.prototype.menu = null;

        /**
         * Creates a new GetPlayerFoodMenuRes instance using the specified properties.
         * @function create
         * @memberof Food.GetPlayerFoodMenuRes
         * @static
         * @param {Food.IGetPlayerFoodMenuRes=} [properties] Properties to set
         * @returns {Food.GetPlayerFoodMenuRes} GetPlayerFoodMenuRes instance
         */
        GetPlayerFoodMenuRes.create = function create(properties) {
            return new GetPlayerFoodMenuRes(properties);
        };

        /**
         * Encodes the specified GetPlayerFoodMenuRes message. Does not implicitly {@link Food.GetPlayerFoodMenuRes.verify|verify} messages.
         * @function encode
         * @memberof Food.GetPlayerFoodMenuRes
         * @static
         * @param {Food.IGetPlayerFoodMenuRes} message GetPlayerFoodMenuRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerFoodMenuRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.menu != null && message.hasOwnProperty("menu"))
                $root.BaseInfo.FoodMenu.encode(message.menu, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPlayerFoodMenuRes message, length delimited. Does not implicitly {@link Food.GetPlayerFoodMenuRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Food.GetPlayerFoodMenuRes
         * @static
         * @param {Food.IGetPlayerFoodMenuRes} message GetPlayerFoodMenuRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerFoodMenuRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerFoodMenuRes message from the specified reader or buffer.
         * @function decode
         * @memberof Food.GetPlayerFoodMenuRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Food.GetPlayerFoodMenuRes} GetPlayerFoodMenuRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerFoodMenuRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Food.GetPlayerFoodMenuRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.menu = $root.BaseInfo.FoodMenu.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayerFoodMenuRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Food.GetPlayerFoodMenuRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Food.GetPlayerFoodMenuRes} GetPlayerFoodMenuRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerFoodMenuRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayerFoodMenuRes message.
         * @function verify
         * @memberof Food.GetPlayerFoodMenuRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerFoodMenuRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.menu != null && message.hasOwnProperty("menu")) {
                var error = $root.BaseInfo.FoodMenu.verify(message.menu);
                if (error)
                    return "menu." + error;
            }
            return null;
        };

        return GetPlayerFoodMenuRes;
    })();

    Food.FoodLevelUpReq = (function() {

        /**
         * Properties of a FoodLevelUpReq.
         * @memberof Food
         * @interface IFoodLevelUpReq
         * @property {string|null} [foodListId] FoodLevelUpReq foodListId
         */

        /**
         * Constructs a new FoodLevelUpReq.
         * @memberof Food
         * @classdesc Represents a FoodLevelUpReq.
         * @implements IFoodLevelUpReq
         * @constructor
         * @param {Food.IFoodLevelUpReq=} [properties] Properties to set
         */
        function FoodLevelUpReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FoodLevelUpReq foodListId.
         * @member {string} foodListId
         * @memberof Food.FoodLevelUpReq
         * @instance
         */
        FoodLevelUpReq.prototype.foodListId = "";

        /**
         * Creates a new FoodLevelUpReq instance using the specified properties.
         * @function create
         * @memberof Food.FoodLevelUpReq
         * @static
         * @param {Food.IFoodLevelUpReq=} [properties] Properties to set
         * @returns {Food.FoodLevelUpReq} FoodLevelUpReq instance
         */
        FoodLevelUpReq.create = function create(properties) {
            return new FoodLevelUpReq(properties);
        };

        /**
         * Encodes the specified FoodLevelUpReq message. Does not implicitly {@link Food.FoodLevelUpReq.verify|verify} messages.
         * @function encode
         * @memberof Food.FoodLevelUpReq
         * @static
         * @param {Food.IFoodLevelUpReq} message FoodLevelUpReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FoodLevelUpReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.foodListId != null && message.hasOwnProperty("foodListId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.foodListId);
            return writer;
        };

        /**
         * Encodes the specified FoodLevelUpReq message, length delimited. Does not implicitly {@link Food.FoodLevelUpReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Food.FoodLevelUpReq
         * @static
         * @param {Food.IFoodLevelUpReq} message FoodLevelUpReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FoodLevelUpReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FoodLevelUpReq message from the specified reader or buffer.
         * @function decode
         * @memberof Food.FoodLevelUpReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Food.FoodLevelUpReq} FoodLevelUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FoodLevelUpReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Food.FoodLevelUpReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.foodListId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FoodLevelUpReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Food.FoodLevelUpReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Food.FoodLevelUpReq} FoodLevelUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FoodLevelUpReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FoodLevelUpReq message.
         * @function verify
         * @memberof Food.FoodLevelUpReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FoodLevelUpReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.foodListId != null && message.hasOwnProperty("foodListId"))
                if (!$util.isString(message.foodListId))
                    return "foodListId: string expected";
            return null;
        };

        return FoodLevelUpReq;
    })();

    Food.FoodLevelUpRes = (function() {

        /**
         * Properties of a FoodLevelUpRes.
         * @memberof Food
         * @interface IFoodLevelUpRes
         * @property {BaseInfo.IFoodMenu|null} [menu] FoodLevelUpRes menu
         * @property {BaseInfo.IBag|null} [bag] FoodLevelUpRes bag
         */

        /**
         * Constructs a new FoodLevelUpRes.
         * @memberof Food
         * @classdesc Represents a FoodLevelUpRes.
         * @implements IFoodLevelUpRes
         * @constructor
         * @param {Food.IFoodLevelUpRes=} [properties] Properties to set
         */
        function FoodLevelUpRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FoodLevelUpRes menu.
         * @member {BaseInfo.IFoodMenu|null|undefined} menu
         * @memberof Food.FoodLevelUpRes
         * @instance
         */
        FoodLevelUpRes.prototype.menu = null;

        /**
         * FoodLevelUpRes bag.
         * @member {BaseInfo.IBag|null|undefined} bag
         * @memberof Food.FoodLevelUpRes
         * @instance
         */
        FoodLevelUpRes.prototype.bag = null;

        /**
         * Creates a new FoodLevelUpRes instance using the specified properties.
         * @function create
         * @memberof Food.FoodLevelUpRes
         * @static
         * @param {Food.IFoodLevelUpRes=} [properties] Properties to set
         * @returns {Food.FoodLevelUpRes} FoodLevelUpRes instance
         */
        FoodLevelUpRes.create = function create(properties) {
            return new FoodLevelUpRes(properties);
        };

        /**
         * Encodes the specified FoodLevelUpRes message. Does not implicitly {@link Food.FoodLevelUpRes.verify|verify} messages.
         * @function encode
         * @memberof Food.FoodLevelUpRes
         * @static
         * @param {Food.IFoodLevelUpRes} message FoodLevelUpRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FoodLevelUpRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.menu != null && message.hasOwnProperty("menu"))
                $root.BaseInfo.FoodMenu.encode(message.menu, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.Bag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FoodLevelUpRes message, length delimited. Does not implicitly {@link Food.FoodLevelUpRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Food.FoodLevelUpRes
         * @static
         * @param {Food.IFoodLevelUpRes} message FoodLevelUpRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FoodLevelUpRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FoodLevelUpRes message from the specified reader or buffer.
         * @function decode
         * @memberof Food.FoodLevelUpRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Food.FoodLevelUpRes} FoodLevelUpRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FoodLevelUpRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Food.FoodLevelUpRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.menu = $root.BaseInfo.FoodMenu.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bag = $root.BaseInfo.Bag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FoodLevelUpRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Food.FoodLevelUpRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Food.FoodLevelUpRes} FoodLevelUpRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FoodLevelUpRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FoodLevelUpRes message.
         * @function verify
         * @memberof Food.FoodLevelUpRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FoodLevelUpRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.menu != null && message.hasOwnProperty("menu")) {
                var error = $root.BaseInfo.FoodMenu.verify(message.menu);
                if (error)
                    return "menu." + error;
            }
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.Bag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            return null;
        };

        return FoodLevelUpRes;
    })();

    return Food;
})();