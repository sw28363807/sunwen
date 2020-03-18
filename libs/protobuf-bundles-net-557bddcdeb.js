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
         * @property {BaseInfo.ICurrencyBag|null} [bag] LoginRes bag
         * @property {BaseInfo.IPlayerBuilding|null} [playerBuilding] LoginRes playerBuilding
         * @property {BaseInfo.IPlayerPets|null} [playerPets] LoginRes playerPets
         * @property {BaseInfo.ITasks|null} [tasks] LoginRes tasks
         * @property {BaseInfo.IFoodMenu|null} [menu] LoginRes menu
         * @property {BaseInfo.ILetterBox|null} [letterbox] LoginRes letterbox
         * @property {FishingGame.IFishingGameInfo|null} [fishingGameInfo] LoginRes fishingGameInfo
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
         * LoginRes playerPets.
         * @member {BaseInfo.IPlayerPets|null|undefined} playerPets
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.playerPets = null;

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
         * LoginRes fishingGameInfo.
         * @member {FishingGame.IFishingGameInfo|null|undefined} fishingGameInfo
         * @memberof Player.LoginRes
         * @instance
         */
        LoginRes.prototype.fishingGameInfo = null;

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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.playerBuilding != null && message.hasOwnProperty("playerBuilding"))
                $root.BaseInfo.PlayerBuilding.encode(message.playerBuilding, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.playerPets != null && message.hasOwnProperty("playerPets"))
                $root.BaseInfo.PlayerPets.encode(message.playerPets, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.tasks != null && message.hasOwnProperty("tasks"))
                $root.BaseInfo.Tasks.encode(message.tasks, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.menu != null && message.hasOwnProperty("menu"))
                $root.BaseInfo.FoodMenu.encode(message.menu, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.letterbox != null && message.hasOwnProperty("letterbox"))
                $root.BaseInfo.LetterBox.encode(message.letterbox, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.customData != null && message.hasOwnProperty("customData"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.customData);
            if (message.fishingGameInfo != null && message.hasOwnProperty("fishingGameInfo"))
                $root.FishingGame.FishingGameInfo.encode(message.fishingGameInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.playerBuilding = $root.BaseInfo.PlayerBuilding.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.playerPets = $root.BaseInfo.PlayerPets.decode(reader, reader.uint32());
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
                case 8:
                    message.fishingGameInfo = $root.FishingGame.FishingGameInfo.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.playerBuilding != null && message.hasOwnProperty("playerBuilding")) {
                var error = $root.BaseInfo.PlayerBuilding.verify(message.playerBuilding);
                if (error)
                    return "playerBuilding." + error;
            }
            if (message.playerPets != null && message.hasOwnProperty("playerPets")) {
                var error = $root.BaseInfo.PlayerPets.verify(message.playerPets);
                if (error)
                    return "playerPets." + error;
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
            if (message.fishingGameInfo != null && message.hasOwnProperty("fishingGameInfo")) {
                var error = $root.FishingGame.FishingGameInfo.verify(message.fishingGameInfo);
                if (error)
                    return "fishingGameInfo." + error;
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
         * @property {BaseInfo.ICurrencyBag|null} [bag] OnlineCrossDayRes bag
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
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

    Player.FullBagReq = (function() {

        /**
         * Properties of a FullBagReq.
         * @memberof Player
         * @interface IFullBagReq
         */

        /**
         * Constructs a new FullBagReq.
         * @memberof Player
         * @classdesc Represents a FullBagReq.
         * @implements IFullBagReq
         * @constructor
         * @param {Player.IFullBagReq=} [properties] Properties to set
         */
        function FullBagReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FullBagReq instance using the specified properties.
         * @function create
         * @memberof Player.FullBagReq
         * @static
         * @param {Player.IFullBagReq=} [properties] Properties to set
         * @returns {Player.FullBagReq} FullBagReq instance
         */
        FullBagReq.create = function create(properties) {
            return new FullBagReq(properties);
        };

        /**
         * Encodes the specified FullBagReq message. Does not implicitly {@link Player.FullBagReq.verify|verify} messages.
         * @function encode
         * @memberof Player.FullBagReq
         * @static
         * @param {Player.IFullBagReq} message FullBagReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullBagReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FullBagReq message, length delimited. Does not implicitly {@link Player.FullBagReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Player.FullBagReq
         * @static
         * @param {Player.IFullBagReq} message FullBagReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullBagReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FullBagReq message from the specified reader or buffer.
         * @function decode
         * @memberof Player.FullBagReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Player.FullBagReq} FullBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullBagReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player.FullBagReq();
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
         * Decodes a FullBagReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Player.FullBagReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Player.FullBagReq} FullBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullBagReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FullBagReq message.
         * @function verify
         * @memberof Player.FullBagReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FullBagReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return FullBagReq;
    })();

    Player.FullBagRes = (function() {

        /**
         * Properties of a FullBagRes.
         * @memberof Player
         * @interface IFullBagRes
         * @property {BaseInfo.IFullBag|null} [bag] FullBagRes bag
         */

        /**
         * Constructs a new FullBagRes.
         * @memberof Player
         * @classdesc Represents a FullBagRes.
         * @implements IFullBagRes
         * @constructor
         * @param {Player.IFullBagRes=} [properties] Properties to set
         */
        function FullBagRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FullBagRes bag.
         * @member {BaseInfo.IFullBag|null|undefined} bag
         * @memberof Player.FullBagRes
         * @instance
         */
        FullBagRes.prototype.bag = null;

        /**
         * Creates a new FullBagRes instance using the specified properties.
         * @function create
         * @memberof Player.FullBagRes
         * @static
         * @param {Player.IFullBagRes=} [properties] Properties to set
         * @returns {Player.FullBagRes} FullBagRes instance
         */
        FullBagRes.create = function create(properties) {
            return new FullBagRes(properties);
        };

        /**
         * Encodes the specified FullBagRes message. Does not implicitly {@link Player.FullBagRes.verify|verify} messages.
         * @function encode
         * @memberof Player.FullBagRes
         * @static
         * @param {Player.IFullBagRes} message FullBagRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullBagRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.FullBag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FullBagRes message, length delimited. Does not implicitly {@link Player.FullBagRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Player.FullBagRes
         * @static
         * @param {Player.IFullBagRes} message FullBagRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullBagRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FullBagRes message from the specified reader or buffer.
         * @function decode
         * @memberof Player.FullBagRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Player.FullBagRes} FullBagRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullBagRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player.FullBagRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bag = $root.BaseInfo.FullBag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FullBagRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Player.FullBagRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Player.FullBagRes} FullBagRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullBagRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FullBagRes message.
         * @function verify
         * @memberof Player.FullBagRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FullBagRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.FullBag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            return null;
        };

        return FullBagRes;
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
         * @property {string|null} [type] Item type
         * @property {string|null} [id] Item id
         * @property {number|Long|null} [amount] Item amount
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
         * Item type.
         * @member {string} type
         * @memberof BaseInfo.Item
         * @instance
         */
        Item.prototype.type = "";

        /**
         * Item id.
         * @member {string} id
         * @memberof BaseInfo.Item
         * @instance
         */
        Item.prototype.id = "";

        /**
         * Item amount.
         * @member {number|Long} amount
         * @memberof BaseInfo.Item
         * @instance
         */
        Item.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
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
                    message.type = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.amount = reader.int64();
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
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        return Item;
    })();

    BaseInfo.CurrencyBag = (function() {

        /**
         * Properties of a CurrencyBag.
         * @memberof BaseInfo
         * @interface ICurrencyBag
         * @property {Object.<string,BaseInfo.IItem>|null} [currency] CurrencyBag currency
         */

        /**
         * Constructs a new CurrencyBag.
         * @memberof BaseInfo
         * @classdesc Represents a CurrencyBag.
         * @implements ICurrencyBag
         * @constructor
         * @param {BaseInfo.ICurrencyBag=} [properties] Properties to set
         */
        function CurrencyBag(properties) {
            this.currency = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrencyBag currency.
         * @member {Object.<string,BaseInfo.IItem>} currency
         * @memberof BaseInfo.CurrencyBag
         * @instance
         */
        CurrencyBag.prototype.currency = $util.emptyObject;

        /**
         * Creates a new CurrencyBag instance using the specified properties.
         * @function create
         * @memberof BaseInfo.CurrencyBag
         * @static
         * @param {BaseInfo.ICurrencyBag=} [properties] Properties to set
         * @returns {BaseInfo.CurrencyBag} CurrencyBag instance
         */
        CurrencyBag.create = function create(properties) {
            return new CurrencyBag(properties);
        };

        /**
         * Encodes the specified CurrencyBag message. Does not implicitly {@link BaseInfo.CurrencyBag.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.CurrencyBag
         * @static
         * @param {BaseInfo.ICurrencyBag} message CurrencyBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyBag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currency != null && message.hasOwnProperty("currency"))
                for (var keys = Object.keys(message.currency), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Item.encode(message.currency[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified CurrencyBag message, length delimited. Does not implicitly {@link BaseInfo.CurrencyBag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.CurrencyBag
         * @static
         * @param {BaseInfo.ICurrencyBag} message CurrencyBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyBag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurrencyBag message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.CurrencyBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.CurrencyBag} CurrencyBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyBag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.CurrencyBag(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.currency === $util.emptyObject)
                        message.currency = {};
                    key = reader.string();
                    reader.pos++;
                    message.currency[key] = $root.BaseInfo.Item.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurrencyBag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.CurrencyBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.CurrencyBag} CurrencyBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyBag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurrencyBag message.
         * @function verify
         * @memberof BaseInfo.CurrencyBag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurrencyBag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currency != null && message.hasOwnProperty("currency")) {
                if (!$util.isObject(message.currency))
                    return "currency: object expected";
                var key = Object.keys(message.currency);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Item.verify(message.currency[key[i]]);
                    if (error)
                        return "currency." + error;
                }
            }
            return null;
        };

        return CurrencyBag;
    })();

    BaseInfo.FullBag = (function() {

        /**
         * Properties of a FullBag.
         * @memberof BaseInfo
         * @interface IFullBag
         * @property {Object.<string,BaseInfo.IItem>|null} [currency] FullBag currency
         * @property {Object.<string,BaseInfo.IItem>|null} [nauticalFoods] FullBag nauticalFoods
         * @property {Object.<string,BaseInfo.IItem>|null} [nauticalTools] FullBag nauticalTools
         * @property {Object.<string,number>|null} [foodMenu] FullBag foodMenu
         */

        /**
         * Constructs a new FullBag.
         * @memberof BaseInfo
         * @classdesc Represents a FullBag.
         * @implements IFullBag
         * @constructor
         * @param {BaseInfo.IFullBag=} [properties] Properties to set
         */
        function FullBag(properties) {
            this.currency = {};
            this.nauticalFoods = {};
            this.nauticalTools = {};
            this.foodMenu = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FullBag currency.
         * @member {Object.<string,BaseInfo.IItem>} currency
         * @memberof BaseInfo.FullBag
         * @instance
         */
        FullBag.prototype.currency = $util.emptyObject;

        /**
         * FullBag nauticalFoods.
         * @member {Object.<string,BaseInfo.IItem>} nauticalFoods
         * @memberof BaseInfo.FullBag
         * @instance
         */
        FullBag.prototype.nauticalFoods = $util.emptyObject;

        /**
         * FullBag nauticalTools.
         * @member {Object.<string,BaseInfo.IItem>} nauticalTools
         * @memberof BaseInfo.FullBag
         * @instance
         */
        FullBag.prototype.nauticalTools = $util.emptyObject;

        /**
         * FullBag foodMenu.
         * @member {Object.<string,number>} foodMenu
         * @memberof BaseInfo.FullBag
         * @instance
         */
        FullBag.prototype.foodMenu = $util.emptyObject;

        /**
         * Creates a new FullBag instance using the specified properties.
         * @function create
         * @memberof BaseInfo.FullBag
         * @static
         * @param {BaseInfo.IFullBag=} [properties] Properties to set
         * @returns {BaseInfo.FullBag} FullBag instance
         */
        FullBag.create = function create(properties) {
            return new FullBag(properties);
        };

        /**
         * Encodes the specified FullBag message. Does not implicitly {@link BaseInfo.FullBag.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.FullBag
         * @static
         * @param {BaseInfo.IFullBag} message FullBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullBag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currency != null && message.hasOwnProperty("currency"))
                for (var keys = Object.keys(message.currency), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Item.encode(message.currency[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.nauticalFoods != null && message.hasOwnProperty("nauticalFoods"))
                for (var keys = Object.keys(message.nauticalFoods), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Item.encode(message.nauticalFoods[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.nauticalTools != null && message.hasOwnProperty("nauticalTools"))
                for (var keys = Object.keys(message.nauticalTools), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Item.encode(message.nauticalTools[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.foodMenu != null && message.hasOwnProperty("foodMenu"))
                for (var keys = Object.keys(message.foodMenu), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.foodMenu[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FullBag message, length delimited. Does not implicitly {@link BaseInfo.FullBag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.FullBag
         * @static
         * @param {BaseInfo.IFullBag} message FullBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullBag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FullBag message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.FullBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.FullBag} FullBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullBag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.FullBag(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.currency === $util.emptyObject)
                        message.currency = {};
                    key = reader.string();
                    reader.pos++;
                    message.currency[key] = $root.BaseInfo.Item.decode(reader, reader.uint32());
                    break;
                case 2:
                    reader.skip().pos++;
                    if (message.nauticalFoods === $util.emptyObject)
                        message.nauticalFoods = {};
                    key = reader.string();
                    reader.pos++;
                    message.nauticalFoods[key] = $root.BaseInfo.Item.decode(reader, reader.uint32());
                    break;
                case 3:
                    reader.skip().pos++;
                    if (message.nauticalTools === $util.emptyObject)
                        message.nauticalTools = {};
                    key = reader.string();
                    reader.pos++;
                    message.nauticalTools[key] = $root.BaseInfo.Item.decode(reader, reader.uint32());
                    break;
                case 4:
                    reader.skip().pos++;
                    if (message.foodMenu === $util.emptyObject)
                        message.foodMenu = {};
                    key = reader.string();
                    reader.pos++;
                    message.foodMenu[key] = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FullBag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.FullBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.FullBag} FullBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullBag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FullBag message.
         * @function verify
         * @memberof BaseInfo.FullBag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FullBag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currency != null && message.hasOwnProperty("currency")) {
                if (!$util.isObject(message.currency))
                    return "currency: object expected";
                var key = Object.keys(message.currency);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Item.verify(message.currency[key[i]]);
                    if (error)
                        return "currency." + error;
                }
            }
            if (message.nauticalFoods != null && message.hasOwnProperty("nauticalFoods")) {
                if (!$util.isObject(message.nauticalFoods))
                    return "nauticalFoods: object expected";
                var key = Object.keys(message.nauticalFoods);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Item.verify(message.nauticalFoods[key[i]]);
                    if (error)
                        return "nauticalFoods." + error;
                }
            }
            if (message.nauticalTools != null && message.hasOwnProperty("nauticalTools")) {
                if (!$util.isObject(message.nauticalTools))
                    return "nauticalTools: object expected";
                var key = Object.keys(message.nauticalTools);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Item.verify(message.nauticalTools[key[i]]);
                    if (error)
                        return "nauticalTools." + error;
                }
            }
            if (message.foodMenu != null && message.hasOwnProperty("foodMenu")) {
                if (!$util.isObject(message.foodMenu))
                    return "foodMenu: object expected";
                var key = Object.keys(message.foodMenu);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.foodMenu[key[i]]))
                        return "foodMenu: integer{k:string} expected";
            }
            return null;
        };

        return FullBag;
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

    BaseInfo.PetInfo = (function() {

        /**
         * Properties of a PetInfo.
         * @memberof BaseInfo
         * @interface IPetInfo
         * @property {string|null} [id] PetInfo id
         * @property {number|null} [intimacy] PetInfo intimacy
         * @property {number|null} [visitTimes] PetInfo visitTimes
         * @property {boolean|null} [adopted] PetInfo adopted
         * @property {boolean|null} [newCome] PetInfo newCome
         */

        /**
         * Constructs a new PetInfo.
         * @memberof BaseInfo
         * @classdesc Represents a PetInfo.
         * @implements IPetInfo
         * @constructor
         * @param {BaseInfo.IPetInfo=} [properties] Properties to set
         */
        function PetInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PetInfo id.
         * @member {string} id
         * @memberof BaseInfo.PetInfo
         * @instance
         */
        PetInfo.prototype.id = "";

        /**
         * PetInfo intimacy.
         * @member {number} intimacy
         * @memberof BaseInfo.PetInfo
         * @instance
         */
        PetInfo.prototype.intimacy = 0;

        /**
         * PetInfo visitTimes.
         * @member {number} visitTimes
         * @memberof BaseInfo.PetInfo
         * @instance
         */
        PetInfo.prototype.visitTimes = 0;

        /**
         * PetInfo adopted.
         * @member {boolean} adopted
         * @memberof BaseInfo.PetInfo
         * @instance
         */
        PetInfo.prototype.adopted = false;

        /**
         * PetInfo newCome.
         * @member {boolean} newCome
         * @memberof BaseInfo.PetInfo
         * @instance
         */
        PetInfo.prototype.newCome = false;

        /**
         * Creates a new PetInfo instance using the specified properties.
         * @function create
         * @memberof BaseInfo.PetInfo
         * @static
         * @param {BaseInfo.IPetInfo=} [properties] Properties to set
         * @returns {BaseInfo.PetInfo} PetInfo instance
         */
        PetInfo.create = function create(properties) {
            return new PetInfo(properties);
        };

        /**
         * Encodes the specified PetInfo message. Does not implicitly {@link BaseInfo.PetInfo.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.PetInfo
         * @static
         * @param {BaseInfo.IPetInfo} message PetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PetInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.intimacy != null && message.hasOwnProperty("intimacy"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.intimacy);
            if (message.visitTimes != null && message.hasOwnProperty("visitTimes"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.visitTimes);
            if (message.adopted != null && message.hasOwnProperty("adopted"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.adopted);
            if (message.newCome != null && message.hasOwnProperty("newCome"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.newCome);
            return writer;
        };

        /**
         * Encodes the specified PetInfo message, length delimited. Does not implicitly {@link BaseInfo.PetInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.PetInfo
         * @static
         * @param {BaseInfo.IPetInfo} message PetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PetInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PetInfo message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.PetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.PetInfo} PetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PetInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.PetInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.intimacy = reader.int32();
                    break;
                case 3:
                    message.visitTimes = reader.int32();
                    break;
                case 4:
                    message.adopted = reader.bool();
                    break;
                case 5:
                    message.newCome = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PetInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.PetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.PetInfo} PetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PetInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PetInfo message.
         * @function verify
         * @memberof BaseInfo.PetInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PetInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.intimacy != null && message.hasOwnProperty("intimacy"))
                if (!$util.isInteger(message.intimacy))
                    return "intimacy: integer expected";
            if (message.visitTimes != null && message.hasOwnProperty("visitTimes"))
                if (!$util.isInteger(message.visitTimes))
                    return "visitTimes: integer expected";
            if (message.adopted != null && message.hasOwnProperty("adopted"))
                if (typeof message.adopted !== "boolean")
                    return "adopted: boolean expected";
            if (message.newCome != null && message.hasOwnProperty("newCome"))
                if (typeof message.newCome !== "boolean")
                    return "newCome: boolean expected";
            return null;
        };

        return PetInfo;
    })();

    BaseInfo.PlayerPets = (function() {

        /**
         * Properties of a PlayerPets.
         * @memberof BaseInfo
         * @interface IPlayerPets
         * @property {Object.<string,BaseInfo.IPetInfo>|null} [cats] PlayerPets cats
         */

        /**
         * Constructs a new PlayerPets.
         * @memberof BaseInfo
         * @classdesc Represents a PlayerPets.
         * @implements IPlayerPets
         * @constructor
         * @param {BaseInfo.IPlayerPets=} [properties] Properties to set
         */
        function PlayerPets(properties) {
            this.cats = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerPets cats.
         * @member {Object.<string,BaseInfo.IPetInfo>} cats
         * @memberof BaseInfo.PlayerPets
         * @instance
         */
        PlayerPets.prototype.cats = $util.emptyObject;

        /**
         * Creates a new PlayerPets instance using the specified properties.
         * @function create
         * @memberof BaseInfo.PlayerPets
         * @static
         * @param {BaseInfo.IPlayerPets=} [properties] Properties to set
         * @returns {BaseInfo.PlayerPets} PlayerPets instance
         */
        PlayerPets.create = function create(properties) {
            return new PlayerPets(properties);
        };

        /**
         * Encodes the specified PlayerPets message. Does not implicitly {@link BaseInfo.PlayerPets.verify|verify} messages.
         * @function encode
         * @memberof BaseInfo.PlayerPets
         * @static
         * @param {BaseInfo.IPlayerPets} message PlayerPets message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPets.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cats != null && message.hasOwnProperty("cats"))
                for (var keys = Object.keys(message.cats), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.PetInfo.encode(message.cats[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified PlayerPets message, length delimited. Does not implicitly {@link BaseInfo.PlayerPets.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BaseInfo.PlayerPets
         * @static
         * @param {BaseInfo.IPlayerPets} message PlayerPets message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPets.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerPets message from the specified reader or buffer.
         * @function decode
         * @memberof BaseInfo.PlayerPets
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BaseInfo.PlayerPets} PlayerPets
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPets.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseInfo.PlayerPets(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.cats === $util.emptyObject)
                        message.cats = {};
                    key = reader.string();
                    reader.pos++;
                    message.cats[key] = $root.BaseInfo.PetInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerPets message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BaseInfo.PlayerPets
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BaseInfo.PlayerPets} PlayerPets
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPets.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerPets message.
         * @function verify
         * @memberof BaseInfo.PlayerPets
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerPets.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cats != null && message.hasOwnProperty("cats")) {
                if (!$util.isObject(message.cats))
                    return "cats: object expected";
                var key = Object.keys(message.cats);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.PetInfo.verify(message.cats[key[i]]);
                    if (error)
                        return "cats." + error;
                }
            }
            return null;
        };

        return PlayerPets;
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

    /**
     * FetchType enum.
     * @name BaseInfo.FetchType
     * @enum {string}
     * @property {number} DIRECT=0 DIRECT value
     * @property {number} AD=1 AD value
     */
    BaseInfo.FetchType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DIRECT"] = 0;
        values[valuesById[1] = "AD"] = 1;
        return values;
    })();

    return BaseInfo;
})();

$root.FishingGame = (function() {

    /**
     * Namespace FishingGame.
     * @exports FishingGame
     * @namespace
     */
    var FishingGame = {};

    FishingGame.GetFishGameInfoReq = (function() {

        /**
         * Properties of a GetFishGameInfoReq.
         * @memberof FishingGame
         * @interface IGetFishGameInfoReq
         */

        /**
         * Constructs a new GetFishGameInfoReq.
         * @memberof FishingGame
         * @classdesc Represents a GetFishGameInfoReq.
         * @implements IGetFishGameInfoReq
         * @constructor
         * @param {FishingGame.IGetFishGameInfoReq=} [properties] Properties to set
         */
        function GetFishGameInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetFishGameInfoReq instance using the specified properties.
         * @function create
         * @memberof FishingGame.GetFishGameInfoReq
         * @static
         * @param {FishingGame.IGetFishGameInfoReq=} [properties] Properties to set
         * @returns {FishingGame.GetFishGameInfoReq} GetFishGameInfoReq instance
         */
        GetFishGameInfoReq.create = function create(properties) {
            return new GetFishGameInfoReq(properties);
        };

        /**
         * Encodes the specified GetFishGameInfoReq message. Does not implicitly {@link FishingGame.GetFishGameInfoReq.verify|verify} messages.
         * @function encode
         * @memberof FishingGame.GetFishGameInfoReq
         * @static
         * @param {FishingGame.IGetFishGameInfoReq} message GetFishGameInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFishGameInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetFishGameInfoReq message, length delimited. Does not implicitly {@link FishingGame.GetFishGameInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FishingGame.GetFishGameInfoReq
         * @static
         * @param {FishingGame.IGetFishGameInfoReq} message GetFishGameInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFishGameInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFishGameInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof FishingGame.GetFishGameInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FishingGame.GetFishGameInfoReq} GetFishGameInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFishGameInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishingGame.GetFishGameInfoReq();
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
         * Decodes a GetFishGameInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FishingGame.GetFishGameInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FishingGame.GetFishGameInfoReq} GetFishGameInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFishGameInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFishGameInfoReq message.
         * @function verify
         * @memberof FishingGame.GetFishGameInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFishGameInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetFishGameInfoReq;
    })();

    FishingGame.GetFishGameInfoRes = (function() {

        /**
         * Properties of a GetFishGameInfoRes.
         * @memberof FishingGame
         * @interface IGetFishGameInfoRes
         * @property {FishingGame.IFishingGameInfo|null} [gameInfo] GetFishGameInfoRes gameInfo
         * @property {BaseInfo.ICurrencyBag|null} [bag] GetFishGameInfoRes bag
         */

        /**
         * Constructs a new GetFishGameInfoRes.
         * @memberof FishingGame
         * @classdesc Represents a GetFishGameInfoRes.
         * @implements IGetFishGameInfoRes
         * @constructor
         * @param {FishingGame.IGetFishGameInfoRes=} [properties] Properties to set
         */
        function GetFishGameInfoRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFishGameInfoRes gameInfo.
         * @member {FishingGame.IFishingGameInfo|null|undefined} gameInfo
         * @memberof FishingGame.GetFishGameInfoRes
         * @instance
         */
        GetFishGameInfoRes.prototype.gameInfo = null;

        /**
         * GetFishGameInfoRes bag.
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
         * @memberof FishingGame.GetFishGameInfoRes
         * @instance
         */
        GetFishGameInfoRes.prototype.bag = null;

        /**
         * Creates a new GetFishGameInfoRes instance using the specified properties.
         * @function create
         * @memberof FishingGame.GetFishGameInfoRes
         * @static
         * @param {FishingGame.IGetFishGameInfoRes=} [properties] Properties to set
         * @returns {FishingGame.GetFishGameInfoRes} GetFishGameInfoRes instance
         */
        GetFishGameInfoRes.create = function create(properties) {
            return new GetFishGameInfoRes(properties);
        };

        /**
         * Encodes the specified GetFishGameInfoRes message. Does not implicitly {@link FishingGame.GetFishGameInfoRes.verify|verify} messages.
         * @function encode
         * @memberof FishingGame.GetFishGameInfoRes
         * @static
         * @param {FishingGame.IGetFishGameInfoRes} message GetFishGameInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFishGameInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                $root.FishingGame.FishingGameInfo.encode(message.gameInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetFishGameInfoRes message, length delimited. Does not implicitly {@link FishingGame.GetFishGameInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FishingGame.GetFishGameInfoRes
         * @static
         * @param {FishingGame.IGetFishGameInfoRes} message GetFishGameInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFishGameInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFishGameInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof FishingGame.GetFishGameInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FishingGame.GetFishGameInfoRes} GetFishGameInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFishGameInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishingGame.GetFishGameInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameInfo = $root.FishingGame.FishingGameInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetFishGameInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FishingGame.GetFishGameInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FishingGame.GetFishGameInfoRes} GetFishGameInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFishGameInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFishGameInfoRes message.
         * @function verify
         * @memberof FishingGame.GetFishGameInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFishGameInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                var error = $root.FishingGame.FishingGameInfo.verify(message.gameInfo);
                if (error)
                    return "gameInfo." + error;
            }
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            return null;
        };

        return GetFishGameInfoRes;
    })();

    FishingGame.PlayFishGameReq = (function() {

        /**
         * Properties of a PlayFishGameReq.
         * @memberof FishingGame
         * @interface IPlayFishGameReq
         * @property {string|null} [fishingFishId] PlayFishGameReq fishingFishId
         * @property {string|null} [fishingBaitId] PlayFishGameReq fishingBaitId
         * @property {BaseInfo.IRewards|null} [rewards] PlayFishGameReq rewards
         * @property {number|null} [fishingFishSize] PlayFishGameReq fishingFishSize
         */

        /**
         * Constructs a new PlayFishGameReq.
         * @memberof FishingGame
         * @classdesc Represents a PlayFishGameReq.
         * @implements IPlayFishGameReq
         * @constructor
         * @param {FishingGame.IPlayFishGameReq=} [properties] Properties to set
         */
        function PlayFishGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayFishGameReq fishingFishId.
         * @member {string} fishingFishId
         * @memberof FishingGame.PlayFishGameReq
         * @instance
         */
        PlayFishGameReq.prototype.fishingFishId = "";

        /**
         * PlayFishGameReq fishingBaitId.
         * @member {string} fishingBaitId
         * @memberof FishingGame.PlayFishGameReq
         * @instance
         */
        PlayFishGameReq.prototype.fishingBaitId = "";

        /**
         * PlayFishGameReq rewards.
         * @member {BaseInfo.IRewards|null|undefined} rewards
         * @memberof FishingGame.PlayFishGameReq
         * @instance
         */
        PlayFishGameReq.prototype.rewards = null;

        /**
         * PlayFishGameReq fishingFishSize.
         * @member {number} fishingFishSize
         * @memberof FishingGame.PlayFishGameReq
         * @instance
         */
        PlayFishGameReq.prototype.fishingFishSize = 0;

        /**
         * Creates a new PlayFishGameReq instance using the specified properties.
         * @function create
         * @memberof FishingGame.PlayFishGameReq
         * @static
         * @param {FishingGame.IPlayFishGameReq=} [properties] Properties to set
         * @returns {FishingGame.PlayFishGameReq} PlayFishGameReq instance
         */
        PlayFishGameReq.create = function create(properties) {
            return new PlayFishGameReq(properties);
        };

        /**
         * Encodes the specified PlayFishGameReq message. Does not implicitly {@link FishingGame.PlayFishGameReq.verify|verify} messages.
         * @function encode
         * @memberof FishingGame.PlayFishGameReq
         * @static
         * @param {FishingGame.IPlayFishGameReq} message PlayFishGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayFishGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fishingFishId != null && message.hasOwnProperty("fishingFishId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fishingFishId);
            if (message.fishingBaitId != null && message.hasOwnProperty("fishingBaitId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fishingBaitId);
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.BaseInfo.Rewards.encode(message.rewards, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.fishingFishSize != null && message.hasOwnProperty("fishingFishSize"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.fishingFishSize);
            return writer;
        };

        /**
         * Encodes the specified PlayFishGameReq message, length delimited. Does not implicitly {@link FishingGame.PlayFishGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FishingGame.PlayFishGameReq
         * @static
         * @param {FishingGame.IPlayFishGameReq} message PlayFishGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayFishGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayFishGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof FishingGame.PlayFishGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FishingGame.PlayFishGameReq} PlayFishGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayFishGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishingGame.PlayFishGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fishingFishId = reader.string();
                    break;
                case 2:
                    message.fishingBaitId = reader.string();
                    break;
                case 3:
                    message.rewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fishingFishSize = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayFishGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FishingGame.PlayFishGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FishingGame.PlayFishGameReq} PlayFishGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayFishGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayFishGameReq message.
         * @function verify
         * @memberof FishingGame.PlayFishGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayFishGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fishingFishId != null && message.hasOwnProperty("fishingFishId"))
                if (!$util.isString(message.fishingFishId))
                    return "fishingFishId: string expected";
            if (message.fishingBaitId != null && message.hasOwnProperty("fishingBaitId"))
                if (!$util.isString(message.fishingBaitId))
                    return "fishingBaitId: string expected";
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                var error = $root.BaseInfo.Rewards.verify(message.rewards);
                if (error)
                    return "rewards." + error;
            }
            if (message.fishingFishSize != null && message.hasOwnProperty("fishingFishSize"))
                if (typeof message.fishingFishSize !== "number")
                    return "fishingFishSize: number expected";
            return null;
        };

        return PlayFishGameReq;
    })();

    FishingGame.PlayFishGameRes = (function() {

        /**
         * Properties of a PlayFishGameRes.
         * @memberof FishingGame
         * @interface IPlayFishGameRes
         * @property {BaseInfo.ICurrencyBag|null} [bag] PlayFishGameRes bag
         * @property {FishingGame.IFishingGameInfo|null} [gameInfo] PlayFishGameRes gameInfo
         * @property {BaseInfo.IRewards|null} [actualRewards] PlayFishGameRes actualRewards
         */

        /**
         * Constructs a new PlayFishGameRes.
         * @memberof FishingGame
         * @classdesc Represents a PlayFishGameRes.
         * @implements IPlayFishGameRes
         * @constructor
         * @param {FishingGame.IPlayFishGameRes=} [properties] Properties to set
         */
        function PlayFishGameRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayFishGameRes bag.
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
         * @memberof FishingGame.PlayFishGameRes
         * @instance
         */
        PlayFishGameRes.prototype.bag = null;

        /**
         * PlayFishGameRes gameInfo.
         * @member {FishingGame.IFishingGameInfo|null|undefined} gameInfo
         * @memberof FishingGame.PlayFishGameRes
         * @instance
         */
        PlayFishGameRes.prototype.gameInfo = null;

        /**
         * PlayFishGameRes actualRewards.
         * @member {BaseInfo.IRewards|null|undefined} actualRewards
         * @memberof FishingGame.PlayFishGameRes
         * @instance
         */
        PlayFishGameRes.prototype.actualRewards = null;

        /**
         * Creates a new PlayFishGameRes instance using the specified properties.
         * @function create
         * @memberof FishingGame.PlayFishGameRes
         * @static
         * @param {FishingGame.IPlayFishGameRes=} [properties] Properties to set
         * @returns {FishingGame.PlayFishGameRes} PlayFishGameRes instance
         */
        PlayFishGameRes.create = function create(properties) {
            return new PlayFishGameRes(properties);
        };

        /**
         * Encodes the specified PlayFishGameRes message. Does not implicitly {@link FishingGame.PlayFishGameRes.verify|verify} messages.
         * @function encode
         * @memberof FishingGame.PlayFishGameRes
         * @static
         * @param {FishingGame.IPlayFishGameRes} message PlayFishGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayFishGameRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                $root.FishingGame.FishingGameInfo.encode(message.gameInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.actualRewards != null && message.hasOwnProperty("actualRewards"))
                $root.BaseInfo.Rewards.encode(message.actualRewards, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayFishGameRes message, length delimited. Does not implicitly {@link FishingGame.PlayFishGameRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FishingGame.PlayFishGameRes
         * @static
         * @param {FishingGame.IPlayFishGameRes} message PlayFishGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayFishGameRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayFishGameRes message from the specified reader or buffer.
         * @function decode
         * @memberof FishingGame.PlayFishGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FishingGame.PlayFishGameRes} PlayFishGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayFishGameRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishingGame.PlayFishGameRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gameInfo = $root.FishingGame.FishingGameInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.actualRewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayFishGameRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FishingGame.PlayFishGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FishingGame.PlayFishGameRes} PlayFishGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayFishGameRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayFishGameRes message.
         * @function verify
         * @memberof FishingGame.PlayFishGameRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayFishGameRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                var error = $root.FishingGame.FishingGameInfo.verify(message.gameInfo);
                if (error)
                    return "gameInfo." + error;
            }
            if (message.actualRewards != null && message.hasOwnProperty("actualRewards")) {
                var error = $root.BaseInfo.Rewards.verify(message.actualRewards);
                if (error)
                    return "actualRewards." + error;
            }
            return null;
        };

        return PlayFishGameRes;
    })();

    FishingGame.GetFishingFishInfoReq = (function() {

        /**
         * Properties of a GetFishingFishInfoReq.
         * @memberof FishingGame
         * @interface IGetFishingFishInfoReq
         */

        /**
         * Constructs a new GetFishingFishInfoReq.
         * @memberof FishingGame
         * @classdesc Represents a GetFishingFishInfoReq.
         * @implements IGetFishingFishInfoReq
         * @constructor
         * @param {FishingGame.IGetFishingFishInfoReq=} [properties] Properties to set
         */
        function GetFishingFishInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetFishingFishInfoReq instance using the specified properties.
         * @function create
         * @memberof FishingGame.GetFishingFishInfoReq
         * @static
         * @param {FishingGame.IGetFishingFishInfoReq=} [properties] Properties to set
         * @returns {FishingGame.GetFishingFishInfoReq} GetFishingFishInfoReq instance
         */
        GetFishingFishInfoReq.create = function create(properties) {
            return new GetFishingFishInfoReq(properties);
        };

        /**
         * Encodes the specified GetFishingFishInfoReq message. Does not implicitly {@link FishingGame.GetFishingFishInfoReq.verify|verify} messages.
         * @function encode
         * @memberof FishingGame.GetFishingFishInfoReq
         * @static
         * @param {FishingGame.IGetFishingFishInfoReq} message GetFishingFishInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFishingFishInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetFishingFishInfoReq message, length delimited. Does not implicitly {@link FishingGame.GetFishingFishInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FishingGame.GetFishingFishInfoReq
         * @static
         * @param {FishingGame.IGetFishingFishInfoReq} message GetFishingFishInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFishingFishInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFishingFishInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof FishingGame.GetFishingFishInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FishingGame.GetFishingFishInfoReq} GetFishingFishInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFishingFishInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishingGame.GetFishingFishInfoReq();
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
         * Decodes a GetFishingFishInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FishingGame.GetFishingFishInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FishingGame.GetFishingFishInfoReq} GetFishingFishInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFishingFishInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFishingFishInfoReq message.
         * @function verify
         * @memberof FishingGame.GetFishingFishInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFishingFishInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetFishingFishInfoReq;
    })();

    FishingGame.GetFishingFishInfoRes = (function() {

        /**
         * Properties of a GetFishingFishInfoRes.
         * @memberof FishingGame
         * @interface IGetFishingFishInfoRes
         * @property {Object.<string,FishingGame.IFishingFishInfo>|null} [fishInfos] GetFishingFishInfoRes fishInfos
         */

        /**
         * Constructs a new GetFishingFishInfoRes.
         * @memberof FishingGame
         * @classdesc Represents a GetFishingFishInfoRes.
         * @implements IGetFishingFishInfoRes
         * @constructor
         * @param {FishingGame.IGetFishingFishInfoRes=} [properties] Properties to set
         */
        function GetFishingFishInfoRes(properties) {
            this.fishInfos = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFishingFishInfoRes fishInfos.
         * @member {Object.<string,FishingGame.IFishingFishInfo>} fishInfos
         * @memberof FishingGame.GetFishingFishInfoRes
         * @instance
         */
        GetFishingFishInfoRes.prototype.fishInfos = $util.emptyObject;

        /**
         * Creates a new GetFishingFishInfoRes instance using the specified properties.
         * @function create
         * @memberof FishingGame.GetFishingFishInfoRes
         * @static
         * @param {FishingGame.IGetFishingFishInfoRes=} [properties] Properties to set
         * @returns {FishingGame.GetFishingFishInfoRes} GetFishingFishInfoRes instance
         */
        GetFishingFishInfoRes.create = function create(properties) {
            return new GetFishingFishInfoRes(properties);
        };

        /**
         * Encodes the specified GetFishingFishInfoRes message. Does not implicitly {@link FishingGame.GetFishingFishInfoRes.verify|verify} messages.
         * @function encode
         * @memberof FishingGame.GetFishingFishInfoRes
         * @static
         * @param {FishingGame.IGetFishingFishInfoRes} message GetFishingFishInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFishingFishInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fishInfos != null && message.hasOwnProperty("fishInfos"))
                for (var keys = Object.keys(message.fishInfos), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.FishingGame.FishingFishInfo.encode(message.fishInfos[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified GetFishingFishInfoRes message, length delimited. Does not implicitly {@link FishingGame.GetFishingFishInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FishingGame.GetFishingFishInfoRes
         * @static
         * @param {FishingGame.IGetFishingFishInfoRes} message GetFishingFishInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFishingFishInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFishingFishInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof FishingGame.GetFishingFishInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FishingGame.GetFishingFishInfoRes} GetFishingFishInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFishingFishInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishingGame.GetFishingFishInfoRes(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.fishInfos === $util.emptyObject)
                        message.fishInfos = {};
                    key = reader.string();
                    reader.pos++;
                    message.fishInfos[key] = $root.FishingGame.FishingFishInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetFishingFishInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FishingGame.GetFishingFishInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FishingGame.GetFishingFishInfoRes} GetFishingFishInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFishingFishInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFishingFishInfoRes message.
         * @function verify
         * @memberof FishingGame.GetFishingFishInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFishingFishInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fishInfos != null && message.hasOwnProperty("fishInfos")) {
                if (!$util.isObject(message.fishInfos))
                    return "fishInfos: object expected";
                var key = Object.keys(message.fishInfos);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.FishingGame.FishingFishInfo.verify(message.fishInfos[key[i]]);
                    if (error)
                        return "fishInfos." + error;
                }
            }
            return null;
        };

        return GetFishingFishInfoRes;
    })();

    FishingGame.FishingGameInfo = (function() {

        /**
         * Properties of a FishingGameInfo.
         * @memberof FishingGame
         * @interface IFishingGameInfo
         * @property {number|null} [remainTimes] FishingGameInfo remainTimes
         * @property {number|null} [maxTimes] FishingGameInfo maxTimes
         * @property {number|Long|null} [nextUpdateTs] FishingGameInfo nextUpdateTs
         * @property {string|null} [lastBaitsId] FishingGameInfo lastBaitsId
         */

        /**
         * Constructs a new FishingGameInfo.
         * @memberof FishingGame
         * @classdesc Represents a FishingGameInfo.
         * @implements IFishingGameInfo
         * @constructor
         * @param {FishingGame.IFishingGameInfo=} [properties] Properties to set
         */
        function FishingGameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishingGameInfo remainTimes.
         * @member {number} remainTimes
         * @memberof FishingGame.FishingGameInfo
         * @instance
         */
        FishingGameInfo.prototype.remainTimes = 0;

        /**
         * FishingGameInfo maxTimes.
         * @member {number} maxTimes
         * @memberof FishingGame.FishingGameInfo
         * @instance
         */
        FishingGameInfo.prototype.maxTimes = 0;

        /**
         * FishingGameInfo nextUpdateTs.
         * @member {number|Long} nextUpdateTs
         * @memberof FishingGame.FishingGameInfo
         * @instance
         */
        FishingGameInfo.prototype.nextUpdateTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishingGameInfo lastBaitsId.
         * @member {string} lastBaitsId
         * @memberof FishingGame.FishingGameInfo
         * @instance
         */
        FishingGameInfo.prototype.lastBaitsId = "";

        /**
         * Creates a new FishingGameInfo instance using the specified properties.
         * @function create
         * @memberof FishingGame.FishingGameInfo
         * @static
         * @param {FishingGame.IFishingGameInfo=} [properties] Properties to set
         * @returns {FishingGame.FishingGameInfo} FishingGameInfo instance
         */
        FishingGameInfo.create = function create(properties) {
            return new FishingGameInfo(properties);
        };

        /**
         * Encodes the specified FishingGameInfo message. Does not implicitly {@link FishingGame.FishingGameInfo.verify|verify} messages.
         * @function encode
         * @memberof FishingGame.FishingGameInfo
         * @static
         * @param {FishingGame.IFishingGameInfo} message FishingGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingGameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.remainTimes != null && message.hasOwnProperty("remainTimes"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.remainTimes);
            if (message.maxTimes != null && message.hasOwnProperty("maxTimes"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxTimes);
            if (message.nextUpdateTs != null && message.hasOwnProperty("nextUpdateTs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nextUpdateTs);
            if (message.lastBaitsId != null && message.hasOwnProperty("lastBaitsId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lastBaitsId);
            return writer;
        };

        /**
         * Encodes the specified FishingGameInfo message, length delimited. Does not implicitly {@link FishingGame.FishingGameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FishingGame.FishingGameInfo
         * @static
         * @param {FishingGame.IFishingGameInfo} message FishingGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishingGameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof FishingGame.FishingGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FishingGame.FishingGameInfo} FishingGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingGameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishingGame.FishingGameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.remainTimes = reader.int32();
                    break;
                case 2:
                    message.maxTimes = reader.int32();
                    break;
                case 3:
                    message.nextUpdateTs = reader.int64();
                    break;
                case 4:
                    message.lastBaitsId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishingGameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FishingGame.FishingGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FishingGame.FishingGameInfo} FishingGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingGameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishingGameInfo message.
         * @function verify
         * @memberof FishingGame.FishingGameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishingGameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.remainTimes != null && message.hasOwnProperty("remainTimes"))
                if (!$util.isInteger(message.remainTimes))
                    return "remainTimes: integer expected";
            if (message.maxTimes != null && message.hasOwnProperty("maxTimes"))
                if (!$util.isInteger(message.maxTimes))
                    return "maxTimes: integer expected";
            if (message.nextUpdateTs != null && message.hasOwnProperty("nextUpdateTs"))
                if (!$util.isInteger(message.nextUpdateTs) && !(message.nextUpdateTs && $util.isInteger(message.nextUpdateTs.low) && $util.isInteger(message.nextUpdateTs.high)))
                    return "nextUpdateTs: integer|Long expected";
            if (message.lastBaitsId != null && message.hasOwnProperty("lastBaitsId"))
                if (!$util.isString(message.lastBaitsId))
                    return "lastBaitsId: string expected";
            return null;
        };

        return FishingGameInfo;
    })();

    FishingGame.FishingFishInfo = (function() {

        /**
         * Properties of a FishingFishInfo.
         * @memberof FishingGame
         * @interface IFishingFishInfo
         * @property {string|null} [fishId] FishingFishInfo fishId
         * @property {number|null} [acquireTimes] FishingFishInfo acquireTimes
         * @property {number|null} [maxSize] FishingFishInfo maxSize
         * @property {boolean|null} [newCome] FishingFishInfo newCome
         */

        /**
         * Constructs a new FishingFishInfo.
         * @memberof FishingGame
         * @classdesc Represents a FishingFishInfo.
         * @implements IFishingFishInfo
         * @constructor
         * @param {FishingGame.IFishingFishInfo=} [properties] Properties to set
         */
        function FishingFishInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishingFishInfo fishId.
         * @member {string} fishId
         * @memberof FishingGame.FishingFishInfo
         * @instance
         */
        FishingFishInfo.prototype.fishId = "";

        /**
         * FishingFishInfo acquireTimes.
         * @member {number} acquireTimes
         * @memberof FishingGame.FishingFishInfo
         * @instance
         */
        FishingFishInfo.prototype.acquireTimes = 0;

        /**
         * FishingFishInfo maxSize.
         * @member {number} maxSize
         * @memberof FishingGame.FishingFishInfo
         * @instance
         */
        FishingFishInfo.prototype.maxSize = 0;

        /**
         * FishingFishInfo newCome.
         * @member {boolean} newCome
         * @memberof FishingGame.FishingFishInfo
         * @instance
         */
        FishingFishInfo.prototype.newCome = false;

        /**
         * Creates a new FishingFishInfo instance using the specified properties.
         * @function create
         * @memberof FishingGame.FishingFishInfo
         * @static
         * @param {FishingGame.IFishingFishInfo=} [properties] Properties to set
         * @returns {FishingGame.FishingFishInfo} FishingFishInfo instance
         */
        FishingFishInfo.create = function create(properties) {
            return new FishingFishInfo(properties);
        };

        /**
         * Encodes the specified FishingFishInfo message. Does not implicitly {@link FishingGame.FishingFishInfo.verify|verify} messages.
         * @function encode
         * @memberof FishingGame.FishingFishInfo
         * @static
         * @param {FishingGame.IFishingFishInfo} message FishingFishInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingFishInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fishId != null && message.hasOwnProperty("fishId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fishId);
            if (message.acquireTimes != null && message.hasOwnProperty("acquireTimes"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.acquireTimes);
            if (message.maxSize != null && message.hasOwnProperty("maxSize"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.maxSize);
            if (message.newCome != null && message.hasOwnProperty("newCome"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.newCome);
            return writer;
        };

        /**
         * Encodes the specified FishingFishInfo message, length delimited. Does not implicitly {@link FishingGame.FishingFishInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FishingGame.FishingFishInfo
         * @static
         * @param {FishingGame.IFishingFishInfo} message FishingFishInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishingFishInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishingFishInfo message from the specified reader or buffer.
         * @function decode
         * @memberof FishingGame.FishingFishInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FishingGame.FishingFishInfo} FishingFishInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingFishInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishingGame.FishingFishInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fishId = reader.string();
                    break;
                case 2:
                    message.acquireTimes = reader.int32();
                    break;
                case 3:
                    message.maxSize = reader.double();
                    break;
                case 5:
                    message.newCome = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishingFishInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FishingGame.FishingFishInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FishingGame.FishingFishInfo} FishingFishInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishingFishInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishingFishInfo message.
         * @function verify
         * @memberof FishingGame.FishingFishInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishingFishInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fishId != null && message.hasOwnProperty("fishId"))
                if (!$util.isString(message.fishId))
                    return "fishId: string expected";
            if (message.acquireTimes != null && message.hasOwnProperty("acquireTimes"))
                if (!$util.isInteger(message.acquireTimes))
                    return "acquireTimes: integer expected";
            if (message.maxSize != null && message.hasOwnProperty("maxSize"))
                if (typeof message.maxSize !== "number")
                    return "maxSize: number expected";
            if (message.newCome != null && message.hasOwnProperty("newCome"))
                if (typeof message.newCome !== "boolean")
                    return "newCome: boolean expected";
            return null;
        };

        return FishingFishInfo;
    })();

    return FishingGame;
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
         * @property {BaseInfo.ICurrencyBag|null} [bag] GetAllBuildingRes bag
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
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
         * @property {BaseInfo.ICurrencyBag|null} [bag] PutBuildingRes bag
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
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
         * @property {BaseInfo.ICurrencyBag|null} [bag] RemoveBuildingRes bag
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
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
         * @property {Object.<string,Scene.IPetReward>|null} [petRewards] UpdateSceneInfoReq petRewards
         * @property {Array.<Scene.IVisitorReward>|null} [visitorRewards] UpdateSceneInfoReq visitorRewards
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
            this.petRewards = {};
            this.visitorRewards = [];
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
         * UpdateSceneInfoReq petRewards.
         * @member {Object.<string,Scene.IPetReward>} petRewards
         * @memberof Scene.UpdateSceneInfoReq
         * @instance
         */
        UpdateSceneInfoReq.prototype.petRewards = $util.emptyObject;

        /**
         * UpdateSceneInfoReq visitorRewards.
         * @member {Array.<Scene.IVisitorReward>} visitorRewards
         * @memberof Scene.UpdateSceneInfoReq
         * @instance
         */
        UpdateSceneInfoReq.prototype.visitorRewards = $util.emptyArray;

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
            if (message.petRewards != null && message.hasOwnProperty("petRewards"))
                for (var keys = Object.keys(message.petRewards), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Scene.PetReward.encode(message.petRewards[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.visitorRewards != null && message.visitorRewards.length)
                for (var i = 0; i < message.visitorRewards.length; ++i)
                    $root.Scene.VisitorReward.encode(message.visitorRewards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.UpdateSceneInfoReq(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.customData = reader.string();
                    break;
                case 2:
                    message.rewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                case 3:
                    reader.skip().pos++;
                    if (message.petRewards === $util.emptyObject)
                        message.petRewards = {};
                    key = reader.string();
                    reader.pos++;
                    message.petRewards[key] = $root.Scene.PetReward.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.visitorRewards && message.visitorRewards.length))
                        message.visitorRewards = [];
                    message.visitorRewards.push($root.Scene.VisitorReward.decode(reader, reader.uint32()));
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
            if (message.petRewards != null && message.hasOwnProperty("petRewards")) {
                if (!$util.isObject(message.petRewards))
                    return "petRewards: object expected";
                var key = Object.keys(message.petRewards);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.Scene.PetReward.verify(message.petRewards[key[i]]);
                    if (error)
                        return "petRewards." + error;
                }
            }
            if (message.visitorRewards != null && message.hasOwnProperty("visitorRewards")) {
                if (!Array.isArray(message.visitorRewards))
                    return "visitorRewards: array expected";
                for (var i = 0; i < message.visitorRewards.length; ++i) {
                    var error = $root.Scene.VisitorReward.verify(message.visitorRewards[i]);
                    if (error)
                        return "visitorRewards." + error;
                }
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
         * @property {BaseInfo.ICurrencyBag|null} [bag] UpdateSceneInfoRes bag
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
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
         * @property {BaseInfo.ICurrencyBag|null} [bag] FetchLetterBoxRes bag
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
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

    Scene.FindVisitorGiftReq = (function() {

        /**
         * Properties of a FindVisitorGiftReq.
         * @memberof Scene
         * @interface IFindVisitorGiftReq
         */

        /**
         * Constructs a new FindVisitorGiftReq.
         * @memberof Scene
         * @classdesc Represents a FindVisitorGiftReq.
         * @implements IFindVisitorGiftReq
         * @constructor
         * @param {Scene.IFindVisitorGiftReq=} [properties] Properties to set
         */
        function FindVisitorGiftReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FindVisitorGiftReq instance using the specified properties.
         * @function create
         * @memberof Scene.FindVisitorGiftReq
         * @static
         * @param {Scene.IFindVisitorGiftReq=} [properties] Properties to set
         * @returns {Scene.FindVisitorGiftReq} FindVisitorGiftReq instance
         */
        FindVisitorGiftReq.create = function create(properties) {
            return new FindVisitorGiftReq(properties);
        };

        /**
         * Encodes the specified FindVisitorGiftReq message. Does not implicitly {@link Scene.FindVisitorGiftReq.verify|verify} messages.
         * @function encode
         * @memberof Scene.FindVisitorGiftReq
         * @static
         * @param {Scene.IFindVisitorGiftReq} message FindVisitorGiftReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindVisitorGiftReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FindVisitorGiftReq message, length delimited. Does not implicitly {@link Scene.FindVisitorGiftReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.FindVisitorGiftReq
         * @static
         * @param {Scene.IFindVisitorGiftReq} message FindVisitorGiftReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindVisitorGiftReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindVisitorGiftReq message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.FindVisitorGiftReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.FindVisitorGiftReq} FindVisitorGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindVisitorGiftReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.FindVisitorGiftReq();
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
         * Decodes a FindVisitorGiftReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.FindVisitorGiftReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.FindVisitorGiftReq} FindVisitorGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindVisitorGiftReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindVisitorGiftReq message.
         * @function verify
         * @memberof Scene.FindVisitorGiftReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindVisitorGiftReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return FindVisitorGiftReq;
    })();

    Scene.FindVisitorGiftRes = (function() {

        /**
         * Properties of a FindVisitorGiftRes.
         * @memberof Scene
         * @interface IFindVisitorGiftRes
         * @property {Array.<Scene.IVisitorReward>|null} [visitorRewards] FindVisitorGiftRes visitorRewards
         */

        /**
         * Constructs a new FindVisitorGiftRes.
         * @memberof Scene
         * @classdesc Represents a FindVisitorGiftRes.
         * @implements IFindVisitorGiftRes
         * @constructor
         * @param {Scene.IFindVisitorGiftRes=} [properties] Properties to set
         */
        function FindVisitorGiftRes(properties) {
            this.visitorRewards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindVisitorGiftRes visitorRewards.
         * @member {Array.<Scene.IVisitorReward>} visitorRewards
         * @memberof Scene.FindVisitorGiftRes
         * @instance
         */
        FindVisitorGiftRes.prototype.visitorRewards = $util.emptyArray;

        /**
         * Creates a new FindVisitorGiftRes instance using the specified properties.
         * @function create
         * @memberof Scene.FindVisitorGiftRes
         * @static
         * @param {Scene.IFindVisitorGiftRes=} [properties] Properties to set
         * @returns {Scene.FindVisitorGiftRes} FindVisitorGiftRes instance
         */
        FindVisitorGiftRes.create = function create(properties) {
            return new FindVisitorGiftRes(properties);
        };

        /**
         * Encodes the specified FindVisitorGiftRes message. Does not implicitly {@link Scene.FindVisitorGiftRes.verify|verify} messages.
         * @function encode
         * @memberof Scene.FindVisitorGiftRes
         * @static
         * @param {Scene.IFindVisitorGiftRes} message FindVisitorGiftRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindVisitorGiftRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.visitorRewards != null && message.visitorRewards.length)
                for (var i = 0; i < message.visitorRewards.length; ++i)
                    $root.Scene.VisitorReward.encode(message.visitorRewards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FindVisitorGiftRes message, length delimited. Does not implicitly {@link Scene.FindVisitorGiftRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.FindVisitorGiftRes
         * @static
         * @param {Scene.IFindVisitorGiftRes} message FindVisitorGiftRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindVisitorGiftRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindVisitorGiftRes message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.FindVisitorGiftRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.FindVisitorGiftRes} FindVisitorGiftRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindVisitorGiftRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.FindVisitorGiftRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.visitorRewards && message.visitorRewards.length))
                        message.visitorRewards = [];
                    message.visitorRewards.push($root.Scene.VisitorReward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FindVisitorGiftRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.FindVisitorGiftRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.FindVisitorGiftRes} FindVisitorGiftRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindVisitorGiftRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindVisitorGiftRes message.
         * @function verify
         * @memberof Scene.FindVisitorGiftRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindVisitorGiftRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.visitorRewards != null && message.hasOwnProperty("visitorRewards")) {
                if (!Array.isArray(message.visitorRewards))
                    return "visitorRewards: array expected";
                for (var i = 0; i < message.visitorRewards.length; ++i) {
                    var error = $root.Scene.VisitorReward.verify(message.visitorRewards[i]);
                    if (error)
                        return "visitorRewards." + error;
                }
            }
            return null;
        };

        return FindVisitorGiftRes;
    })();

    Scene.GetVisitorGiftAllReq = (function() {

        /**
         * Properties of a GetVisitorGiftAllReq.
         * @memberof Scene
         * @interface IGetVisitorGiftAllReq
         * @property {BaseInfo.FetchType|null} [type] GetVisitorGiftAllReq type
         */

        /**
         * Constructs a new GetVisitorGiftAllReq.
         * @memberof Scene
         * @classdesc Represents a GetVisitorGiftAllReq.
         * @implements IGetVisitorGiftAllReq
         * @constructor
         * @param {Scene.IGetVisitorGiftAllReq=} [properties] Properties to set
         */
        function GetVisitorGiftAllReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVisitorGiftAllReq type.
         * @member {BaseInfo.FetchType} type
         * @memberof Scene.GetVisitorGiftAllReq
         * @instance
         */
        GetVisitorGiftAllReq.prototype.type = 0;

        /**
         * Creates a new GetVisitorGiftAllReq instance using the specified properties.
         * @function create
         * @memberof Scene.GetVisitorGiftAllReq
         * @static
         * @param {Scene.IGetVisitorGiftAllReq=} [properties] Properties to set
         * @returns {Scene.GetVisitorGiftAllReq} GetVisitorGiftAllReq instance
         */
        GetVisitorGiftAllReq.create = function create(properties) {
            return new GetVisitorGiftAllReq(properties);
        };

        /**
         * Encodes the specified GetVisitorGiftAllReq message. Does not implicitly {@link Scene.GetVisitorGiftAllReq.verify|verify} messages.
         * @function encode
         * @memberof Scene.GetVisitorGiftAllReq
         * @static
         * @param {Scene.IGetVisitorGiftAllReq} message GetVisitorGiftAllReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVisitorGiftAllReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified GetVisitorGiftAllReq message, length delimited. Does not implicitly {@link Scene.GetVisitorGiftAllReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.GetVisitorGiftAllReq
         * @static
         * @param {Scene.IGetVisitorGiftAllReq} message GetVisitorGiftAllReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVisitorGiftAllReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVisitorGiftAllReq message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.GetVisitorGiftAllReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.GetVisitorGiftAllReq} GetVisitorGiftAllReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVisitorGiftAllReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.GetVisitorGiftAllReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVisitorGiftAllReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.GetVisitorGiftAllReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.GetVisitorGiftAllReq} GetVisitorGiftAllReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVisitorGiftAllReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVisitorGiftAllReq message.
         * @function verify
         * @memberof Scene.GetVisitorGiftAllReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVisitorGiftAllReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        return GetVisitorGiftAllReq;
    })();

    Scene.GetVisitorGiftAllRes = (function() {

        /**
         * Properties of a GetVisitorGiftAllRes.
         * @memberof Scene
         * @interface IGetVisitorGiftAllRes
         * @property {BaseInfo.IRewards|null} [rewards] GetVisitorGiftAllRes rewards
         * @property {BaseInfo.ICurrencyBag|null} [bag] GetVisitorGiftAllRes bag
         */

        /**
         * Constructs a new GetVisitorGiftAllRes.
         * @memberof Scene
         * @classdesc Represents a GetVisitorGiftAllRes.
         * @implements IGetVisitorGiftAllRes
         * @constructor
         * @param {Scene.IGetVisitorGiftAllRes=} [properties] Properties to set
         */
        function GetVisitorGiftAllRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVisitorGiftAllRes rewards.
         * @member {BaseInfo.IRewards|null|undefined} rewards
         * @memberof Scene.GetVisitorGiftAllRes
         * @instance
         */
        GetVisitorGiftAllRes.prototype.rewards = null;

        /**
         * GetVisitorGiftAllRes bag.
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
         * @memberof Scene.GetVisitorGiftAllRes
         * @instance
         */
        GetVisitorGiftAllRes.prototype.bag = null;

        /**
         * Creates a new GetVisitorGiftAllRes instance using the specified properties.
         * @function create
         * @memberof Scene.GetVisitorGiftAllRes
         * @static
         * @param {Scene.IGetVisitorGiftAllRes=} [properties] Properties to set
         * @returns {Scene.GetVisitorGiftAllRes} GetVisitorGiftAllRes instance
         */
        GetVisitorGiftAllRes.create = function create(properties) {
            return new GetVisitorGiftAllRes(properties);
        };

        /**
         * Encodes the specified GetVisitorGiftAllRes message. Does not implicitly {@link Scene.GetVisitorGiftAllRes.verify|verify} messages.
         * @function encode
         * @memberof Scene.GetVisitorGiftAllRes
         * @static
         * @param {Scene.IGetVisitorGiftAllRes} message GetVisitorGiftAllRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVisitorGiftAllRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.BaseInfo.Rewards.encode(message.rewards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetVisitorGiftAllRes message, length delimited. Does not implicitly {@link Scene.GetVisitorGiftAllRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.GetVisitorGiftAllRes
         * @static
         * @param {Scene.IGetVisitorGiftAllRes} message GetVisitorGiftAllRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVisitorGiftAllRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVisitorGiftAllRes message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.GetVisitorGiftAllRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.GetVisitorGiftAllRes} GetVisitorGiftAllRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVisitorGiftAllRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.GetVisitorGiftAllRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVisitorGiftAllRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.GetVisitorGiftAllRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.GetVisitorGiftAllRes} GetVisitorGiftAllRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVisitorGiftAllRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVisitorGiftAllRes message.
         * @function verify
         * @memberof Scene.GetVisitorGiftAllRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVisitorGiftAllRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                var error = $root.BaseInfo.Rewards.verify(message.rewards);
                if (error)
                    return "rewards." + error;
            }
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            return null;
        };

        return GetVisitorGiftAllRes;
    })();

    Scene.GetVisitorGiftSingleReq = (function() {

        /**
         * Properties of a GetVisitorGiftSingleReq.
         * @memberof Scene
         * @interface IGetVisitorGiftSingleReq
         * @property {string|null} [id] GetVisitorGiftSingleReq id
         */

        /**
         * Constructs a new GetVisitorGiftSingleReq.
         * @memberof Scene
         * @classdesc Represents a GetVisitorGiftSingleReq.
         * @implements IGetVisitorGiftSingleReq
         * @constructor
         * @param {Scene.IGetVisitorGiftSingleReq=} [properties] Properties to set
         */
        function GetVisitorGiftSingleReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVisitorGiftSingleReq id.
         * @member {string} id
         * @memberof Scene.GetVisitorGiftSingleReq
         * @instance
         */
        GetVisitorGiftSingleReq.prototype.id = "";

        /**
         * Creates a new GetVisitorGiftSingleReq instance using the specified properties.
         * @function create
         * @memberof Scene.GetVisitorGiftSingleReq
         * @static
         * @param {Scene.IGetVisitorGiftSingleReq=} [properties] Properties to set
         * @returns {Scene.GetVisitorGiftSingleReq} GetVisitorGiftSingleReq instance
         */
        GetVisitorGiftSingleReq.create = function create(properties) {
            return new GetVisitorGiftSingleReq(properties);
        };

        /**
         * Encodes the specified GetVisitorGiftSingleReq message. Does not implicitly {@link Scene.GetVisitorGiftSingleReq.verify|verify} messages.
         * @function encode
         * @memberof Scene.GetVisitorGiftSingleReq
         * @static
         * @param {Scene.IGetVisitorGiftSingleReq} message GetVisitorGiftSingleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVisitorGiftSingleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified GetVisitorGiftSingleReq message, length delimited. Does not implicitly {@link Scene.GetVisitorGiftSingleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.GetVisitorGiftSingleReq
         * @static
         * @param {Scene.IGetVisitorGiftSingleReq} message GetVisitorGiftSingleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVisitorGiftSingleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVisitorGiftSingleReq message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.GetVisitorGiftSingleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.GetVisitorGiftSingleReq} GetVisitorGiftSingleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVisitorGiftSingleReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.GetVisitorGiftSingleReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVisitorGiftSingleReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.GetVisitorGiftSingleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.GetVisitorGiftSingleReq} GetVisitorGiftSingleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVisitorGiftSingleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVisitorGiftSingleReq message.
         * @function verify
         * @memberof Scene.GetVisitorGiftSingleReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVisitorGiftSingleReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        return GetVisitorGiftSingleReq;
    })();

    Scene.GetVisitorGiftSingleRes = (function() {

        /**
         * Properties of a GetVisitorGiftSingleRes.
         * @memberof Scene
         * @interface IGetVisitorGiftSingleRes
         * @property {BaseInfo.IRewards|null} [rewards] GetVisitorGiftSingleRes rewards
         * @property {BaseInfo.ICurrencyBag|null} [bag] GetVisitorGiftSingleRes bag
         * @property {Array.<Scene.IVisitorReward>|null} [visitorRewards] GetVisitorGiftSingleRes visitorRewards
         */

        /**
         * Constructs a new GetVisitorGiftSingleRes.
         * @memberof Scene
         * @classdesc Represents a GetVisitorGiftSingleRes.
         * @implements IGetVisitorGiftSingleRes
         * @constructor
         * @param {Scene.IGetVisitorGiftSingleRes=} [properties] Properties to set
         */
        function GetVisitorGiftSingleRes(properties) {
            this.visitorRewards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVisitorGiftSingleRes rewards.
         * @member {BaseInfo.IRewards|null|undefined} rewards
         * @memberof Scene.GetVisitorGiftSingleRes
         * @instance
         */
        GetVisitorGiftSingleRes.prototype.rewards = null;

        /**
         * GetVisitorGiftSingleRes bag.
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
         * @memberof Scene.GetVisitorGiftSingleRes
         * @instance
         */
        GetVisitorGiftSingleRes.prototype.bag = null;

        /**
         * GetVisitorGiftSingleRes visitorRewards.
         * @member {Array.<Scene.IVisitorReward>} visitorRewards
         * @memberof Scene.GetVisitorGiftSingleRes
         * @instance
         */
        GetVisitorGiftSingleRes.prototype.visitorRewards = $util.emptyArray;

        /**
         * Creates a new GetVisitorGiftSingleRes instance using the specified properties.
         * @function create
         * @memberof Scene.GetVisitorGiftSingleRes
         * @static
         * @param {Scene.IGetVisitorGiftSingleRes=} [properties] Properties to set
         * @returns {Scene.GetVisitorGiftSingleRes} GetVisitorGiftSingleRes instance
         */
        GetVisitorGiftSingleRes.create = function create(properties) {
            return new GetVisitorGiftSingleRes(properties);
        };

        /**
         * Encodes the specified GetVisitorGiftSingleRes message. Does not implicitly {@link Scene.GetVisitorGiftSingleRes.verify|verify} messages.
         * @function encode
         * @memberof Scene.GetVisitorGiftSingleRes
         * @static
         * @param {Scene.IGetVisitorGiftSingleRes} message GetVisitorGiftSingleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVisitorGiftSingleRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.BaseInfo.Rewards.encode(message.rewards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.visitorRewards != null && message.visitorRewards.length)
                for (var i = 0; i < message.visitorRewards.length; ++i)
                    $root.Scene.VisitorReward.encode(message.visitorRewards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetVisitorGiftSingleRes message, length delimited. Does not implicitly {@link Scene.GetVisitorGiftSingleRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.GetVisitorGiftSingleRes
         * @static
         * @param {Scene.IGetVisitorGiftSingleRes} message GetVisitorGiftSingleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVisitorGiftSingleRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVisitorGiftSingleRes message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.GetVisitorGiftSingleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.GetVisitorGiftSingleRes} GetVisitorGiftSingleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVisitorGiftSingleRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.GetVisitorGiftSingleRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.visitorRewards && message.visitorRewards.length))
                        message.visitorRewards = [];
                    message.visitorRewards.push($root.Scene.VisitorReward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVisitorGiftSingleRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.GetVisitorGiftSingleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.GetVisitorGiftSingleRes} GetVisitorGiftSingleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVisitorGiftSingleRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVisitorGiftSingleRes message.
         * @function verify
         * @memberof Scene.GetVisitorGiftSingleRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVisitorGiftSingleRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                var error = $root.BaseInfo.Rewards.verify(message.rewards);
                if (error)
                    return "rewards." + error;
            }
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            if (message.visitorRewards != null && message.hasOwnProperty("visitorRewards")) {
                if (!Array.isArray(message.visitorRewards))
                    return "visitorRewards: array expected";
                for (var i = 0; i < message.visitorRewards.length; ++i) {
                    var error = $root.Scene.VisitorReward.verify(message.visitorRewards[i]);
                    if (error)
                        return "visitorRewards." + error;
                }
            }
            return null;
        };

        return GetVisitorGiftSingleRes;
    })();

    Scene.PetReward = (function() {

        /**
         * Properties of a PetReward.
         * @memberof Scene
         * @interface IPetReward
         * @property {number|null} [intimacyIncr] PetReward intimacyIncr
         * @property {number|null} [visitTimesIncr] PetReward visitTimesIncr
         */

        /**
         * Constructs a new PetReward.
         * @memberof Scene
         * @classdesc Represents a PetReward.
         * @implements IPetReward
         * @constructor
         * @param {Scene.IPetReward=} [properties] Properties to set
         */
        function PetReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PetReward intimacyIncr.
         * @member {number} intimacyIncr
         * @memberof Scene.PetReward
         * @instance
         */
        PetReward.prototype.intimacyIncr = 0;

        /**
         * PetReward visitTimesIncr.
         * @member {number} visitTimesIncr
         * @memberof Scene.PetReward
         * @instance
         */
        PetReward.prototype.visitTimesIncr = 0;

        /**
         * Creates a new PetReward instance using the specified properties.
         * @function create
         * @memberof Scene.PetReward
         * @static
         * @param {Scene.IPetReward=} [properties] Properties to set
         * @returns {Scene.PetReward} PetReward instance
         */
        PetReward.create = function create(properties) {
            return new PetReward(properties);
        };

        /**
         * Encodes the specified PetReward message. Does not implicitly {@link Scene.PetReward.verify|verify} messages.
         * @function encode
         * @memberof Scene.PetReward
         * @static
         * @param {Scene.IPetReward} message PetReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PetReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.intimacyIncr != null && message.hasOwnProperty("intimacyIncr"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.intimacyIncr);
            if (message.visitTimesIncr != null && message.hasOwnProperty("visitTimesIncr"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.visitTimesIncr);
            return writer;
        };

        /**
         * Encodes the specified PetReward message, length delimited. Does not implicitly {@link Scene.PetReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.PetReward
         * @static
         * @param {Scene.IPetReward} message PetReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PetReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PetReward message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.PetReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.PetReward} PetReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PetReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.PetReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.intimacyIncr = reader.int32();
                    break;
                case 3:
                    message.visitTimesIncr = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PetReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.PetReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.PetReward} PetReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PetReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PetReward message.
         * @function verify
         * @memberof Scene.PetReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PetReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.intimacyIncr != null && message.hasOwnProperty("intimacyIncr"))
                if (!$util.isInteger(message.intimacyIncr))
                    return "intimacyIncr: integer expected";
            if (message.visitTimesIncr != null && message.hasOwnProperty("visitTimesIncr"))
                if (!$util.isInteger(message.visitTimesIncr))
                    return "visitTimesIncr: integer expected";
            return null;
        };

        return PetReward;
    })();

    Scene.VisitorReward = (function() {

        /**
         * Properties of a VisitorReward.
         * @memberof Scene
         * @interface IVisitorReward
         * @property {string|null} [id] VisitorReward id
         * @property {string|null} [name] VisitorReward name
         * @property {string|null} [buildingId] VisitorReward buildingId
         * @property {BaseInfo.IRewards|null} [rewards] VisitorReward rewards
         * @property {string|null} [roleId] VisitorReward roleId
         */

        /**
         * Constructs a new VisitorReward.
         * @memberof Scene
         * @classdesc Represents a VisitorReward.
         * @implements IVisitorReward
         * @constructor
         * @param {Scene.IVisitorReward=} [properties] Properties to set
         */
        function VisitorReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VisitorReward id.
         * @member {string} id
         * @memberof Scene.VisitorReward
         * @instance
         */
        VisitorReward.prototype.id = "";

        /**
         * VisitorReward name.
         * @member {string} name
         * @memberof Scene.VisitorReward
         * @instance
         */
        VisitorReward.prototype.name = "";

        /**
         * VisitorReward buildingId.
         * @member {string} buildingId
         * @memberof Scene.VisitorReward
         * @instance
         */
        VisitorReward.prototype.buildingId = "";

        /**
         * VisitorReward rewards.
         * @member {BaseInfo.IRewards|null|undefined} rewards
         * @memberof Scene.VisitorReward
         * @instance
         */
        VisitorReward.prototype.rewards = null;

        /**
         * VisitorReward roleId.
         * @member {string} roleId
         * @memberof Scene.VisitorReward
         * @instance
         */
        VisitorReward.prototype.roleId = "";

        /**
         * Creates a new VisitorReward instance using the specified properties.
         * @function create
         * @memberof Scene.VisitorReward
         * @static
         * @param {Scene.IVisitorReward=} [properties] Properties to set
         * @returns {Scene.VisitorReward} VisitorReward instance
         */
        VisitorReward.create = function create(properties) {
            return new VisitorReward(properties);
        };

        /**
         * Encodes the specified VisitorReward message. Does not implicitly {@link Scene.VisitorReward.verify|verify} messages.
         * @function encode
         * @memberof Scene.VisitorReward
         * @static
         * @param {Scene.IVisitorReward} message VisitorReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VisitorReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.buildingId != null && message.hasOwnProperty("buildingId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.buildingId);
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.BaseInfo.Rewards.encode(message.rewards, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.roleId);
            return writer;
        };

        /**
         * Encodes the specified VisitorReward message, length delimited. Does not implicitly {@link Scene.VisitorReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Scene.VisitorReward
         * @static
         * @param {Scene.IVisitorReward} message VisitorReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VisitorReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VisitorReward message from the specified reader or buffer.
         * @function decode
         * @memberof Scene.VisitorReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Scene.VisitorReward} VisitorReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VisitorReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Scene.VisitorReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.buildingId = reader.string();
                    break;
                case 4:
                    message.rewards = $root.BaseInfo.Rewards.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.roleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VisitorReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Scene.VisitorReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Scene.VisitorReward} VisitorReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VisitorReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VisitorReward message.
         * @function verify
         * @memberof Scene.VisitorReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VisitorReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.buildingId != null && message.hasOwnProperty("buildingId"))
                if (!$util.isString(message.buildingId))
                    return "buildingId: string expected";
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                var error = $root.BaseInfo.Rewards.verify(message.rewards);
                if (error)
                    return "rewards." + error;
            }
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isString(message.roleId))
                    return "roleId: string expected";
            return null;
        };

        return VisitorReward;
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
         * @property {BaseInfo.ICurrencyBag|null} [bag] getDailyTaskRewardRes bag
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
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
         * @property {BaseInfo.ICurrencyBag|null} [bag] getTrophyTaskRewardRes bag
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
         * @member {BaseInfo.ICurrencyBag|null|undefined} bag
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
                $root.BaseInfo.CurrencyBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.CurrencyBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.CurrencyBag.verify(message.bag);
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
         * @property {BaseInfo.IFullBag|null} [bag] FoodLevelUpRes bag
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
         * @member {BaseInfo.IFullBag|null|undefined} bag
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
                $root.BaseInfo.FullBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.bag = $root.BaseInfo.FullBag.decode(reader, reader.uint32());
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
                var error = $root.BaseInfo.FullBag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            return null;
        };

        return FoodLevelUpRes;
    })();

    return Food;
})();

$root.Pet = (function() {

    /**
     * Namespace Pet.
     * @exports Pet
     * @namespace
     */
    var Pet = {};

    Pet.GetPlayerPetsInfoReq = (function() {

        /**
         * Properties of a GetPlayerPetsInfoReq.
         * @memberof Pet
         * @interface IGetPlayerPetsInfoReq
         */

        /**
         * Constructs a new GetPlayerPetsInfoReq.
         * @memberof Pet
         * @classdesc 获取猫咪图鉴：请求
         * @implements IGetPlayerPetsInfoReq
         * @constructor
         * @param {Pet.IGetPlayerPetsInfoReq=} [properties] Properties to set
         */
        function GetPlayerPetsInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetPlayerPetsInfoReq instance using the specified properties.
         * @function create
         * @memberof Pet.GetPlayerPetsInfoReq
         * @static
         * @param {Pet.IGetPlayerPetsInfoReq=} [properties] Properties to set
         * @returns {Pet.GetPlayerPetsInfoReq} GetPlayerPetsInfoReq instance
         */
        GetPlayerPetsInfoReq.create = function create(properties) {
            return new GetPlayerPetsInfoReq(properties);
        };

        /**
         * Encodes the specified GetPlayerPetsInfoReq message. Does not implicitly {@link Pet.GetPlayerPetsInfoReq.verify|verify} messages.
         * @function encode
         * @memberof Pet.GetPlayerPetsInfoReq
         * @static
         * @param {Pet.IGetPlayerPetsInfoReq} message GetPlayerPetsInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerPetsInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetPlayerPetsInfoReq message, length delimited. Does not implicitly {@link Pet.GetPlayerPetsInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Pet.GetPlayerPetsInfoReq
         * @static
         * @param {Pet.IGetPlayerPetsInfoReq} message GetPlayerPetsInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerPetsInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerPetsInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof Pet.GetPlayerPetsInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Pet.GetPlayerPetsInfoReq} GetPlayerPetsInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerPetsInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pet.GetPlayerPetsInfoReq();
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
         * Decodes a GetPlayerPetsInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Pet.GetPlayerPetsInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Pet.GetPlayerPetsInfoReq} GetPlayerPetsInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerPetsInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayerPetsInfoReq message.
         * @function verify
         * @memberof Pet.GetPlayerPetsInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerPetsInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetPlayerPetsInfoReq;
    })();

    Pet.GetPlayerPetsInfoRes = (function() {

        /**
         * Properties of a GetPlayerPetsInfoRes.
         * @memberof Pet
         * @interface IGetPlayerPetsInfoRes
         * @property {BaseInfo.IPlayerPets|null} [playerPets] GetPlayerPetsInfoRes playerPets
         */

        /**
         * Constructs a new GetPlayerPetsInfoRes.
         * @memberof Pet
         * @classdesc Represents a GetPlayerPetsInfoRes.
         * @implements IGetPlayerPetsInfoRes
         * @constructor
         * @param {Pet.IGetPlayerPetsInfoRes=} [properties] Properties to set
         */
        function GetPlayerPetsInfoRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayerPetsInfoRes playerPets.
         * @member {BaseInfo.IPlayerPets|null|undefined} playerPets
         * @memberof Pet.GetPlayerPetsInfoRes
         * @instance
         */
        GetPlayerPetsInfoRes.prototype.playerPets = null;

        /**
         * Creates a new GetPlayerPetsInfoRes instance using the specified properties.
         * @function create
         * @memberof Pet.GetPlayerPetsInfoRes
         * @static
         * @param {Pet.IGetPlayerPetsInfoRes=} [properties] Properties to set
         * @returns {Pet.GetPlayerPetsInfoRes} GetPlayerPetsInfoRes instance
         */
        GetPlayerPetsInfoRes.create = function create(properties) {
            return new GetPlayerPetsInfoRes(properties);
        };

        /**
         * Encodes the specified GetPlayerPetsInfoRes message. Does not implicitly {@link Pet.GetPlayerPetsInfoRes.verify|verify} messages.
         * @function encode
         * @memberof Pet.GetPlayerPetsInfoRes
         * @static
         * @param {Pet.IGetPlayerPetsInfoRes} message GetPlayerPetsInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerPetsInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerPets != null && message.hasOwnProperty("playerPets"))
                $root.BaseInfo.PlayerPets.encode(message.playerPets, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPlayerPetsInfoRes message, length delimited. Does not implicitly {@link Pet.GetPlayerPetsInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Pet.GetPlayerPetsInfoRes
         * @static
         * @param {Pet.IGetPlayerPetsInfoRes} message GetPlayerPetsInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerPetsInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerPetsInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof Pet.GetPlayerPetsInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Pet.GetPlayerPetsInfoRes} GetPlayerPetsInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerPetsInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pet.GetPlayerPetsInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerPets = $root.BaseInfo.PlayerPets.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayerPetsInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Pet.GetPlayerPetsInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Pet.GetPlayerPetsInfoRes} GetPlayerPetsInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerPetsInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayerPetsInfoRes message.
         * @function verify
         * @memberof Pet.GetPlayerPetsInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerPetsInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerPets != null && message.hasOwnProperty("playerPets")) {
                var error = $root.BaseInfo.PlayerPets.verify(message.playerPets);
                if (error)
                    return "playerPets." + error;
            }
            return null;
        };

        return GetPlayerPetsInfoRes;
    })();

    Pet.AdoptPetReq = (function() {

        /**
         * Properties of an AdoptPetReq.
         * @memberof Pet
         * @interface IAdoptPetReq
         * @property {string|null} [roleId] AdoptPetReq roleId
         */

        /**
         * Constructs a new AdoptPetReq.
         * @memberof Pet
         * @classdesc Represents an AdoptPetReq.
         * @implements IAdoptPetReq
         * @constructor
         * @param {Pet.IAdoptPetReq=} [properties] Properties to set
         */
        function AdoptPetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdoptPetReq roleId.
         * @member {string} roleId
         * @memberof Pet.AdoptPetReq
         * @instance
         */
        AdoptPetReq.prototype.roleId = "";

        /**
         * Creates a new AdoptPetReq instance using the specified properties.
         * @function create
         * @memberof Pet.AdoptPetReq
         * @static
         * @param {Pet.IAdoptPetReq=} [properties] Properties to set
         * @returns {Pet.AdoptPetReq} AdoptPetReq instance
         */
        AdoptPetReq.create = function create(properties) {
            return new AdoptPetReq(properties);
        };

        /**
         * Encodes the specified AdoptPetReq message. Does not implicitly {@link Pet.AdoptPetReq.verify|verify} messages.
         * @function encode
         * @memberof Pet.AdoptPetReq
         * @static
         * @param {Pet.IAdoptPetReq} message AdoptPetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdoptPetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roleId);
            return writer;
        };

        /**
         * Encodes the specified AdoptPetReq message, length delimited. Does not implicitly {@link Pet.AdoptPetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Pet.AdoptPetReq
         * @static
         * @param {Pet.IAdoptPetReq} message AdoptPetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdoptPetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdoptPetReq message from the specified reader or buffer.
         * @function decode
         * @memberof Pet.AdoptPetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Pet.AdoptPetReq} AdoptPetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdoptPetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pet.AdoptPetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdoptPetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Pet.AdoptPetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Pet.AdoptPetReq} AdoptPetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdoptPetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdoptPetReq message.
         * @function verify
         * @memberof Pet.AdoptPetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdoptPetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isString(message.roleId))
                    return "roleId: string expected";
            return null;
        };

        return AdoptPetReq;
    })();

    Pet.AdoptPetRes = (function() {

        /**
         * Properties of an AdoptPetRes.
         * @memberof Pet
         * @interface IAdoptPetRes
         */

        /**
         * Constructs a new AdoptPetRes.
         * @memberof Pet
         * @classdesc Represents an AdoptPetRes.
         * @implements IAdoptPetRes
         * @constructor
         * @param {Pet.IAdoptPetRes=} [properties] Properties to set
         */
        function AdoptPetRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AdoptPetRes instance using the specified properties.
         * @function create
         * @memberof Pet.AdoptPetRes
         * @static
         * @param {Pet.IAdoptPetRes=} [properties] Properties to set
         * @returns {Pet.AdoptPetRes} AdoptPetRes instance
         */
        AdoptPetRes.create = function create(properties) {
            return new AdoptPetRes(properties);
        };

        /**
         * Encodes the specified AdoptPetRes message. Does not implicitly {@link Pet.AdoptPetRes.verify|verify} messages.
         * @function encode
         * @memberof Pet.AdoptPetRes
         * @static
         * @param {Pet.IAdoptPetRes} message AdoptPetRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdoptPetRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AdoptPetRes message, length delimited. Does not implicitly {@link Pet.AdoptPetRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Pet.AdoptPetRes
         * @static
         * @param {Pet.IAdoptPetRes} message AdoptPetRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdoptPetRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdoptPetRes message from the specified reader or buffer.
         * @function decode
         * @memberof Pet.AdoptPetRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Pet.AdoptPetRes} AdoptPetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdoptPetRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pet.AdoptPetRes();
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
         * Decodes an AdoptPetRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Pet.AdoptPetRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Pet.AdoptPetRes} AdoptPetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdoptPetRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdoptPetRes message.
         * @function verify
         * @memberof Pet.AdoptPetRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdoptPetRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return AdoptPetRes;
    })();

    return Pet;
})();

$root.Nautical = (function() {

    /**
     * Namespace Nautical.
     * @exports Nautical
     * @namespace
     */
    var Nautical = {};

    Nautical.GetNauticalInfoReq = (function() {

        /**
         * Properties of a GetNauticalInfoReq.
         * @memberof Nautical
         * @interface IGetNauticalInfoReq
         */

        /**
         * Constructs a new GetNauticalInfoReq.
         * @memberof Nautical
         * @classdesc Represents a GetNauticalInfoReq.
         * @implements IGetNauticalInfoReq
         * @constructor
         * @param {Nautical.IGetNauticalInfoReq=} [properties] Properties to set
         */
        function GetNauticalInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetNauticalInfoReq instance using the specified properties.
         * @function create
         * @memberof Nautical.GetNauticalInfoReq
         * @static
         * @param {Nautical.IGetNauticalInfoReq=} [properties] Properties to set
         * @returns {Nautical.GetNauticalInfoReq} GetNauticalInfoReq instance
         */
        GetNauticalInfoReq.create = function create(properties) {
            return new GetNauticalInfoReq(properties);
        };

        /**
         * Encodes the specified GetNauticalInfoReq message. Does not implicitly {@link Nautical.GetNauticalInfoReq.verify|verify} messages.
         * @function encode
         * @memberof Nautical.GetNauticalInfoReq
         * @static
         * @param {Nautical.IGetNauticalInfoReq} message GetNauticalInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNauticalInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetNauticalInfoReq message, length delimited. Does not implicitly {@link Nautical.GetNauticalInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.GetNauticalInfoReq
         * @static
         * @param {Nautical.IGetNauticalInfoReq} message GetNauticalInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNauticalInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetNauticalInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.GetNauticalInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.GetNauticalInfoReq} GetNauticalInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNauticalInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.GetNauticalInfoReq();
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
         * Decodes a GetNauticalInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.GetNauticalInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.GetNauticalInfoReq} GetNauticalInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNauticalInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetNauticalInfoReq message.
         * @function verify
         * @memberof Nautical.GetNauticalInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetNauticalInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetNauticalInfoReq;
    })();

    Nautical.GetNauticalInfoRes = (function() {

        /**
         * Properties of a GetNauticalInfoRes.
         * @memberof Nautical
         * @interface IGetNauticalInfoRes
         * @property {Nautical.INauticalInfo|null} [nauticalInfo] GetNauticalInfoRes nauticalInfo
         * @property {Array.<string>|null} [petIds] GetNauticalInfoRes petIds
         * @property {Object.<string,BaseInfo.IItem>|null} [nauticalFoods] GetNauticalInfoRes nauticalFoods
         * @property {Object.<string,BaseInfo.IItem>|null} [nauticalTools] GetNauticalInfoRes nauticalTools
         */

        /**
         * Constructs a new GetNauticalInfoRes.
         * @memberof Nautical
         * @classdesc Represents a GetNauticalInfoRes.
         * @implements IGetNauticalInfoRes
         * @constructor
         * @param {Nautical.IGetNauticalInfoRes=} [properties] Properties to set
         */
        function GetNauticalInfoRes(properties) {
            this.petIds = [];
            this.nauticalFoods = {};
            this.nauticalTools = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetNauticalInfoRes nauticalInfo.
         * @member {Nautical.INauticalInfo|null|undefined} nauticalInfo
         * @memberof Nautical.GetNauticalInfoRes
         * @instance
         */
        GetNauticalInfoRes.prototype.nauticalInfo = null;

        /**
         * GetNauticalInfoRes petIds.
         * @member {Array.<string>} petIds
         * @memberof Nautical.GetNauticalInfoRes
         * @instance
         */
        GetNauticalInfoRes.prototype.petIds = $util.emptyArray;

        /**
         * GetNauticalInfoRes nauticalFoods.
         * @member {Object.<string,BaseInfo.IItem>} nauticalFoods
         * @memberof Nautical.GetNauticalInfoRes
         * @instance
         */
        GetNauticalInfoRes.prototype.nauticalFoods = $util.emptyObject;

        /**
         * GetNauticalInfoRes nauticalTools.
         * @member {Object.<string,BaseInfo.IItem>} nauticalTools
         * @memberof Nautical.GetNauticalInfoRes
         * @instance
         */
        GetNauticalInfoRes.prototype.nauticalTools = $util.emptyObject;

        /**
         * Creates a new GetNauticalInfoRes instance using the specified properties.
         * @function create
         * @memberof Nautical.GetNauticalInfoRes
         * @static
         * @param {Nautical.IGetNauticalInfoRes=} [properties] Properties to set
         * @returns {Nautical.GetNauticalInfoRes} GetNauticalInfoRes instance
         */
        GetNauticalInfoRes.create = function create(properties) {
            return new GetNauticalInfoRes(properties);
        };

        /**
         * Encodes the specified GetNauticalInfoRes message. Does not implicitly {@link Nautical.GetNauticalInfoRes.verify|verify} messages.
         * @function encode
         * @memberof Nautical.GetNauticalInfoRes
         * @static
         * @param {Nautical.IGetNauticalInfoRes} message GetNauticalInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNauticalInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nauticalInfo != null && message.hasOwnProperty("nauticalInfo"))
                $root.Nautical.NauticalInfo.encode(message.nauticalInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.petIds != null && message.petIds.length)
                for (var i = 0; i < message.petIds.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.petIds[i]);
            if (message.nauticalFoods != null && message.hasOwnProperty("nauticalFoods"))
                for (var keys = Object.keys(message.nauticalFoods), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Item.encode(message.nauticalFoods[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.nauticalTools != null && message.hasOwnProperty("nauticalTools"))
                for (var keys = Object.keys(message.nauticalTools), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.BaseInfo.Item.encode(message.nauticalTools[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified GetNauticalInfoRes message, length delimited. Does not implicitly {@link Nautical.GetNauticalInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.GetNauticalInfoRes
         * @static
         * @param {Nautical.IGetNauticalInfoRes} message GetNauticalInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNauticalInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetNauticalInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.GetNauticalInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.GetNauticalInfoRes} GetNauticalInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNauticalInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.GetNauticalInfoRes(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nauticalInfo = $root.Nautical.NauticalInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    if (!(message.petIds && message.petIds.length))
                        message.petIds = [];
                    message.petIds.push(reader.string());
                    break;
                case 9:
                    reader.skip().pos++;
                    if (message.nauticalFoods === $util.emptyObject)
                        message.nauticalFoods = {};
                    key = reader.string();
                    reader.pos++;
                    message.nauticalFoods[key] = $root.BaseInfo.Item.decode(reader, reader.uint32());
                    break;
                case 10:
                    reader.skip().pos++;
                    if (message.nauticalTools === $util.emptyObject)
                        message.nauticalTools = {};
                    key = reader.string();
                    reader.pos++;
                    message.nauticalTools[key] = $root.BaseInfo.Item.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetNauticalInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.GetNauticalInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.GetNauticalInfoRes} GetNauticalInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNauticalInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetNauticalInfoRes message.
         * @function verify
         * @memberof Nautical.GetNauticalInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetNauticalInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nauticalInfo != null && message.hasOwnProperty("nauticalInfo")) {
                var error = $root.Nautical.NauticalInfo.verify(message.nauticalInfo);
                if (error)
                    return "nauticalInfo." + error;
            }
            if (message.petIds != null && message.hasOwnProperty("petIds")) {
                if (!Array.isArray(message.petIds))
                    return "petIds: array expected";
                for (var i = 0; i < message.petIds.length; ++i)
                    if (!$util.isString(message.petIds[i]))
                        return "petIds: string[] expected";
            }
            if (message.nauticalFoods != null && message.hasOwnProperty("nauticalFoods")) {
                if (!$util.isObject(message.nauticalFoods))
                    return "nauticalFoods: object expected";
                var key = Object.keys(message.nauticalFoods);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Item.verify(message.nauticalFoods[key[i]]);
                    if (error)
                        return "nauticalFoods." + error;
                }
            }
            if (message.nauticalTools != null && message.hasOwnProperty("nauticalTools")) {
                if (!$util.isObject(message.nauticalTools))
                    return "nauticalTools: object expected";
                var key = Object.keys(message.nauticalTools);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.BaseInfo.Item.verify(message.nauticalTools[key[i]]);
                    if (error)
                        return "nauticalTools." + error;
                }
            }
            return null;
        };

        return GetNauticalInfoRes;
    })();

    Nautical.MergeNauticalFoodReq = (function() {

        /**
         * Properties of a MergeNauticalFoodReq.
         * @memberof Nautical
         * @interface IMergeNauticalFoodReq
         * @property {string|null} [id] MergeNauticalFoodReq id
         * @property {number|null} [amount] MergeNauticalFoodReq amount
         */

        /**
         * Constructs a new MergeNauticalFoodReq.
         * @memberof Nautical
         * @classdesc Represents a MergeNauticalFoodReq.
         * @implements IMergeNauticalFoodReq
         * @constructor
         * @param {Nautical.IMergeNauticalFoodReq=} [properties] Properties to set
         */
        function MergeNauticalFoodReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MergeNauticalFoodReq id.
         * @member {string} id
         * @memberof Nautical.MergeNauticalFoodReq
         * @instance
         */
        MergeNauticalFoodReq.prototype.id = "";

        /**
         * MergeNauticalFoodReq amount.
         * @member {number} amount
         * @memberof Nautical.MergeNauticalFoodReq
         * @instance
         */
        MergeNauticalFoodReq.prototype.amount = 0;

        /**
         * Creates a new MergeNauticalFoodReq instance using the specified properties.
         * @function create
         * @memberof Nautical.MergeNauticalFoodReq
         * @static
         * @param {Nautical.IMergeNauticalFoodReq=} [properties] Properties to set
         * @returns {Nautical.MergeNauticalFoodReq} MergeNauticalFoodReq instance
         */
        MergeNauticalFoodReq.create = function create(properties) {
            return new MergeNauticalFoodReq(properties);
        };

        /**
         * Encodes the specified MergeNauticalFoodReq message. Does not implicitly {@link Nautical.MergeNauticalFoodReq.verify|verify} messages.
         * @function encode
         * @memberof Nautical.MergeNauticalFoodReq
         * @static
         * @param {Nautical.IMergeNauticalFoodReq} message MergeNauticalFoodReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeNauticalFoodReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified MergeNauticalFoodReq message, length delimited. Does not implicitly {@link Nautical.MergeNauticalFoodReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.MergeNauticalFoodReq
         * @static
         * @param {Nautical.IMergeNauticalFoodReq} message MergeNauticalFoodReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeNauticalFoodReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MergeNauticalFoodReq message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.MergeNauticalFoodReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.MergeNauticalFoodReq} MergeNauticalFoodReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeNauticalFoodReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.MergeNauticalFoodReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.amount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MergeNauticalFoodReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.MergeNauticalFoodReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.MergeNauticalFoodReq} MergeNauticalFoodReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeNauticalFoodReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MergeNauticalFoodReq message.
         * @function verify
         * @memberof Nautical.MergeNauticalFoodReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MergeNauticalFoodReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            return null;
        };

        return MergeNauticalFoodReq;
    })();

    Nautical.MergeNauticalFoodRes = (function() {

        /**
         * Properties of a MergeNauticalFoodRes.
         * @memberof Nautical
         * @interface IMergeNauticalFoodRes
         * @property {BaseInfo.IFullBag|null} [bag] MergeNauticalFoodRes bag
         */

        /**
         * Constructs a new MergeNauticalFoodRes.
         * @memberof Nautical
         * @classdesc Represents a MergeNauticalFoodRes.
         * @implements IMergeNauticalFoodRes
         * @constructor
         * @param {Nautical.IMergeNauticalFoodRes=} [properties] Properties to set
         */
        function MergeNauticalFoodRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MergeNauticalFoodRes bag.
         * @member {BaseInfo.IFullBag|null|undefined} bag
         * @memberof Nautical.MergeNauticalFoodRes
         * @instance
         */
        MergeNauticalFoodRes.prototype.bag = null;

        /**
         * Creates a new MergeNauticalFoodRes instance using the specified properties.
         * @function create
         * @memberof Nautical.MergeNauticalFoodRes
         * @static
         * @param {Nautical.IMergeNauticalFoodRes=} [properties] Properties to set
         * @returns {Nautical.MergeNauticalFoodRes} MergeNauticalFoodRes instance
         */
        MergeNauticalFoodRes.create = function create(properties) {
            return new MergeNauticalFoodRes(properties);
        };

        /**
         * Encodes the specified MergeNauticalFoodRes message. Does not implicitly {@link Nautical.MergeNauticalFoodRes.verify|verify} messages.
         * @function encode
         * @memberof Nautical.MergeNauticalFoodRes
         * @static
         * @param {Nautical.IMergeNauticalFoodRes} message MergeNauticalFoodRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeNauticalFoodRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.FullBag.encode(message.bag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MergeNauticalFoodRes message, length delimited. Does not implicitly {@link Nautical.MergeNauticalFoodRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.MergeNauticalFoodRes
         * @static
         * @param {Nautical.IMergeNauticalFoodRes} message MergeNauticalFoodRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeNauticalFoodRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MergeNauticalFoodRes message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.MergeNauticalFoodRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.MergeNauticalFoodRes} MergeNauticalFoodRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeNauticalFoodRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.MergeNauticalFoodRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bag = $root.BaseInfo.FullBag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MergeNauticalFoodRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.MergeNauticalFoodRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.MergeNauticalFoodRes} MergeNauticalFoodRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeNauticalFoodRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MergeNauticalFoodRes message.
         * @function verify
         * @memberof Nautical.MergeNauticalFoodRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MergeNauticalFoodRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.FullBag.verify(message.bag);
                if (error)
                    return "bag." + error;
            }
            return null;
        };

        return MergeNauticalFoodRes;
    })();

    Nautical.StartNauticalTripReq = (function() {

        /**
         * Properties of a StartNauticalTripReq.
         * @memberof Nautical
         * @interface IStartNauticalTripReq
         * @property {Array.<string>|null} [catIds] StartNauticalTripReq catIds
         * @property {Object.<string,number|Long>|null} [foodInTrip] StartNauticalTripReq foodInTrip
         * @property {Array.<string>|null} [toolInTrip] StartNauticalTripReq toolInTrip
         */

        /**
         * Constructs a new StartNauticalTripReq.
         * @memberof Nautical
         * @classdesc Represents a StartNauticalTripReq.
         * @implements IStartNauticalTripReq
         * @constructor
         * @param {Nautical.IStartNauticalTripReq=} [properties] Properties to set
         */
        function StartNauticalTripReq(properties) {
            this.catIds = [];
            this.foodInTrip = {};
            this.toolInTrip = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartNauticalTripReq catIds.
         * @member {Array.<string>} catIds
         * @memberof Nautical.StartNauticalTripReq
         * @instance
         */
        StartNauticalTripReq.prototype.catIds = $util.emptyArray;

        /**
         * StartNauticalTripReq foodInTrip.
         * @member {Object.<string,number|Long>} foodInTrip
         * @memberof Nautical.StartNauticalTripReq
         * @instance
         */
        StartNauticalTripReq.prototype.foodInTrip = $util.emptyObject;

        /**
         * StartNauticalTripReq toolInTrip.
         * @member {Array.<string>} toolInTrip
         * @memberof Nautical.StartNauticalTripReq
         * @instance
         */
        StartNauticalTripReq.prototype.toolInTrip = $util.emptyArray;

        /**
         * Creates a new StartNauticalTripReq instance using the specified properties.
         * @function create
         * @memberof Nautical.StartNauticalTripReq
         * @static
         * @param {Nautical.IStartNauticalTripReq=} [properties] Properties to set
         * @returns {Nautical.StartNauticalTripReq} StartNauticalTripReq instance
         */
        StartNauticalTripReq.create = function create(properties) {
            return new StartNauticalTripReq(properties);
        };

        /**
         * Encodes the specified StartNauticalTripReq message. Does not implicitly {@link Nautical.StartNauticalTripReq.verify|verify} messages.
         * @function encode
         * @memberof Nautical.StartNauticalTripReq
         * @static
         * @param {Nautical.IStartNauticalTripReq} message StartNauticalTripReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartNauticalTripReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.catIds != null && message.catIds.length)
                for (var i = 0; i < message.catIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.catIds[i]);
            if (message.foodInTrip != null && message.hasOwnProperty("foodInTrip"))
                for (var keys = Object.keys(message.foodInTrip), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.foodInTrip[keys[i]]).ldelim();
            if (message.toolInTrip != null && message.toolInTrip.length)
                for (var i = 0; i < message.toolInTrip.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.toolInTrip[i]);
            return writer;
        };

        /**
         * Encodes the specified StartNauticalTripReq message, length delimited. Does not implicitly {@link Nautical.StartNauticalTripReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.StartNauticalTripReq
         * @static
         * @param {Nautical.IStartNauticalTripReq} message StartNauticalTripReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartNauticalTripReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartNauticalTripReq message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.StartNauticalTripReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.StartNauticalTripReq} StartNauticalTripReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartNauticalTripReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.StartNauticalTripReq(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.catIds && message.catIds.length))
                        message.catIds = [];
                    message.catIds.push(reader.string());
                    break;
                case 2:
                    reader.skip().pos++;
                    if (message.foodInTrip === $util.emptyObject)
                        message.foodInTrip = {};
                    key = reader.string();
                    reader.pos++;
                    message.foodInTrip[key] = reader.int64();
                    break;
                case 3:
                    if (!(message.toolInTrip && message.toolInTrip.length))
                        message.toolInTrip = [];
                    message.toolInTrip.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartNauticalTripReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.StartNauticalTripReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.StartNauticalTripReq} StartNauticalTripReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartNauticalTripReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartNauticalTripReq message.
         * @function verify
         * @memberof Nautical.StartNauticalTripReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartNauticalTripReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.catIds != null && message.hasOwnProperty("catIds")) {
                if (!Array.isArray(message.catIds))
                    return "catIds: array expected";
                for (var i = 0; i < message.catIds.length; ++i)
                    if (!$util.isString(message.catIds[i]))
                        return "catIds: string[] expected";
            }
            if (message.foodInTrip != null && message.hasOwnProperty("foodInTrip")) {
                if (!$util.isObject(message.foodInTrip))
                    return "foodInTrip: object expected";
                var key = Object.keys(message.foodInTrip);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.foodInTrip[key[i]]) && !(message.foodInTrip[key[i]] && $util.isInteger(message.foodInTrip[key[i]].low) && $util.isInteger(message.foodInTrip[key[i]].high)))
                        return "foodInTrip: integer|Long{k:string} expected";
            }
            if (message.toolInTrip != null && message.hasOwnProperty("toolInTrip")) {
                if (!Array.isArray(message.toolInTrip))
                    return "toolInTrip: array expected";
                for (var i = 0; i < message.toolInTrip.length; ++i)
                    if (!$util.isString(message.toolInTrip[i]))
                        return "toolInTrip: string[] expected";
            }
            return null;
        };

        return StartNauticalTripReq;
    })();

    Nautical.StartNauticalTripRes = (function() {

        /**
         * Properties of a StartNauticalTripRes.
         * @memberof Nautical
         * @interface IStartNauticalTripRes
         * @property {Nautical.INauticalInfo|null} [nauticalInfo] StartNauticalTripRes nauticalInfo
         */

        /**
         * Constructs a new StartNauticalTripRes.
         * @memberof Nautical
         * @classdesc Represents a StartNauticalTripRes.
         * @implements IStartNauticalTripRes
         * @constructor
         * @param {Nautical.IStartNauticalTripRes=} [properties] Properties to set
         */
        function StartNauticalTripRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartNauticalTripRes nauticalInfo.
         * @member {Nautical.INauticalInfo|null|undefined} nauticalInfo
         * @memberof Nautical.StartNauticalTripRes
         * @instance
         */
        StartNauticalTripRes.prototype.nauticalInfo = null;

        /**
         * Creates a new StartNauticalTripRes instance using the specified properties.
         * @function create
         * @memberof Nautical.StartNauticalTripRes
         * @static
         * @param {Nautical.IStartNauticalTripRes=} [properties] Properties to set
         * @returns {Nautical.StartNauticalTripRes} StartNauticalTripRes instance
         */
        StartNauticalTripRes.create = function create(properties) {
            return new StartNauticalTripRes(properties);
        };

        /**
         * Encodes the specified StartNauticalTripRes message. Does not implicitly {@link Nautical.StartNauticalTripRes.verify|verify} messages.
         * @function encode
         * @memberof Nautical.StartNauticalTripRes
         * @static
         * @param {Nautical.IStartNauticalTripRes} message StartNauticalTripRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartNauticalTripRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nauticalInfo != null && message.hasOwnProperty("nauticalInfo"))
                $root.Nautical.NauticalInfo.encode(message.nauticalInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartNauticalTripRes message, length delimited. Does not implicitly {@link Nautical.StartNauticalTripRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.StartNauticalTripRes
         * @static
         * @param {Nautical.IStartNauticalTripRes} message StartNauticalTripRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartNauticalTripRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartNauticalTripRes message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.StartNauticalTripRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.StartNauticalTripRes} StartNauticalTripRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartNauticalTripRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.StartNauticalTripRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nauticalInfo = $root.Nautical.NauticalInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartNauticalTripRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.StartNauticalTripRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.StartNauticalTripRes} StartNauticalTripRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartNauticalTripRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartNauticalTripRes message.
         * @function verify
         * @memberof Nautical.StartNauticalTripRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartNauticalTripRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nauticalInfo != null && message.hasOwnProperty("nauticalInfo")) {
                var error = $root.Nautical.NauticalInfo.verify(message.nauticalInfo);
                if (error)
                    return "nauticalInfo." + error;
            }
            return null;
        };

        return StartNauticalTripRes;
    })();

    Nautical.FinishNauticalTripReq = (function() {

        /**
         * Properties of a FinishNauticalTripReq.
         * @memberof Nautical
         * @interface IFinishNauticalTripReq
         */

        /**
         * Constructs a new FinishNauticalTripReq.
         * @memberof Nautical
         * @classdesc Represents a FinishNauticalTripReq.
         * @implements IFinishNauticalTripReq
         * @constructor
         * @param {Nautical.IFinishNauticalTripReq=} [properties] Properties to set
         */
        function FinishNauticalTripReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FinishNauticalTripReq instance using the specified properties.
         * @function create
         * @memberof Nautical.FinishNauticalTripReq
         * @static
         * @param {Nautical.IFinishNauticalTripReq=} [properties] Properties to set
         * @returns {Nautical.FinishNauticalTripReq} FinishNauticalTripReq instance
         */
        FinishNauticalTripReq.create = function create(properties) {
            return new FinishNauticalTripReq(properties);
        };

        /**
         * Encodes the specified FinishNauticalTripReq message. Does not implicitly {@link Nautical.FinishNauticalTripReq.verify|verify} messages.
         * @function encode
         * @memberof Nautical.FinishNauticalTripReq
         * @static
         * @param {Nautical.IFinishNauticalTripReq} message FinishNauticalTripReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishNauticalTripReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FinishNauticalTripReq message, length delimited. Does not implicitly {@link Nautical.FinishNauticalTripReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.FinishNauticalTripReq
         * @static
         * @param {Nautical.IFinishNauticalTripReq} message FinishNauticalTripReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishNauticalTripReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FinishNauticalTripReq message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.FinishNauticalTripReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.FinishNauticalTripReq} FinishNauticalTripReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishNauticalTripReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.FinishNauticalTripReq();
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
         * Decodes a FinishNauticalTripReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.FinishNauticalTripReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.FinishNauticalTripReq} FinishNauticalTripReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishNauticalTripReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FinishNauticalTripReq message.
         * @function verify
         * @memberof Nautical.FinishNauticalTripReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FinishNauticalTripReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return FinishNauticalTripReq;
    })();

    Nautical.FinishNauticalTripRes = (function() {

        /**
         * Properties of a FinishNauticalTripRes.
         * @memberof Nautical
         * @interface IFinishNauticalTripRes
         * @property {BaseInfo.IFullBag|null} [bag] FinishNauticalTripRes bag
         * @property {BaseInfo.IRewards|null} [rewards] FinishNauticalTripRes rewards
         */

        /**
         * Constructs a new FinishNauticalTripRes.
         * @memberof Nautical
         * @classdesc Represents a FinishNauticalTripRes.
         * @implements IFinishNauticalTripRes
         * @constructor
         * @param {Nautical.IFinishNauticalTripRes=} [properties] Properties to set
         */
        function FinishNauticalTripRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FinishNauticalTripRes bag.
         * @member {BaseInfo.IFullBag|null|undefined} bag
         * @memberof Nautical.FinishNauticalTripRes
         * @instance
         */
        FinishNauticalTripRes.prototype.bag = null;

        /**
         * FinishNauticalTripRes rewards.
         * @member {BaseInfo.IRewards|null|undefined} rewards
         * @memberof Nautical.FinishNauticalTripRes
         * @instance
         */
        FinishNauticalTripRes.prototype.rewards = null;

        /**
         * Creates a new FinishNauticalTripRes instance using the specified properties.
         * @function create
         * @memberof Nautical.FinishNauticalTripRes
         * @static
         * @param {Nautical.IFinishNauticalTripRes=} [properties] Properties to set
         * @returns {Nautical.FinishNauticalTripRes} FinishNauticalTripRes instance
         */
        FinishNauticalTripRes.create = function create(properties) {
            return new FinishNauticalTripRes(properties);
        };

        /**
         * Encodes the specified FinishNauticalTripRes message. Does not implicitly {@link Nautical.FinishNauticalTripRes.verify|verify} messages.
         * @function encode
         * @memberof Nautical.FinishNauticalTripRes
         * @static
         * @param {Nautical.IFinishNauticalTripRes} message FinishNauticalTripRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishNauticalTripRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag != null && message.hasOwnProperty("bag"))
                $root.BaseInfo.FullBag.encode(message.bag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.BaseInfo.Rewards.encode(message.rewards, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FinishNauticalTripRes message, length delimited. Does not implicitly {@link Nautical.FinishNauticalTripRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.FinishNauticalTripRes
         * @static
         * @param {Nautical.IFinishNauticalTripRes} message FinishNauticalTripRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishNauticalTripRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FinishNauticalTripRes message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.FinishNauticalTripRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.FinishNauticalTripRes} FinishNauticalTripRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishNauticalTripRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.FinishNauticalTripRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.bag = $root.BaseInfo.FullBag.decode(reader, reader.uint32());
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
         * Decodes a FinishNauticalTripRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.FinishNauticalTripRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.FinishNauticalTripRes} FinishNauticalTripRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishNauticalTripRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FinishNauticalTripRes message.
         * @function verify
         * @memberof Nautical.FinishNauticalTripRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FinishNauticalTripRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag != null && message.hasOwnProperty("bag")) {
                var error = $root.BaseInfo.FullBag.verify(message.bag);
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

        return FinishNauticalTripRes;
    })();

    Nautical.NauticalInfo = (function() {

        /**
         * Properties of a NauticalInfo.
         * @memberof Nautical
         * @interface INauticalInfo
         * @property {boolean|null} [inTrip] NauticalInfo inTrip
         * @property {number|Long|null} [tripStartSec] NauticalInfo tripStartSec
         * @property {number|Long|null} [tripEndSec] NauticalInfo tripEndSec
         * @property {Array.<string>|null} [team] NauticalInfo team
         * @property {Object.<string,number|Long>|null} [foodInTrip] NauticalInfo foodInTrip
         * @property {Array.<string>|null} [toolInTrip] NauticalInfo toolInTrip
         */

        /**
         * Constructs a new NauticalInfo.
         * @memberof Nautical
         * @classdesc Represents a NauticalInfo.
         * @implements INauticalInfo
         * @constructor
         * @param {Nautical.INauticalInfo=} [properties] Properties to set
         */
        function NauticalInfo(properties) {
            this.team = [];
            this.foodInTrip = {};
            this.toolInTrip = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NauticalInfo inTrip.
         * @member {boolean} inTrip
         * @memberof Nautical.NauticalInfo
         * @instance
         */
        NauticalInfo.prototype.inTrip = false;

        /**
         * NauticalInfo tripStartSec.
         * @member {number|Long} tripStartSec
         * @memberof Nautical.NauticalInfo
         * @instance
         */
        NauticalInfo.prototype.tripStartSec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NauticalInfo tripEndSec.
         * @member {number|Long} tripEndSec
         * @memberof Nautical.NauticalInfo
         * @instance
         */
        NauticalInfo.prototype.tripEndSec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NauticalInfo team.
         * @member {Array.<string>} team
         * @memberof Nautical.NauticalInfo
         * @instance
         */
        NauticalInfo.prototype.team = $util.emptyArray;

        /**
         * NauticalInfo foodInTrip.
         * @member {Object.<string,number|Long>} foodInTrip
         * @memberof Nautical.NauticalInfo
         * @instance
         */
        NauticalInfo.prototype.foodInTrip = $util.emptyObject;

        /**
         * NauticalInfo toolInTrip.
         * @member {Array.<string>} toolInTrip
         * @memberof Nautical.NauticalInfo
         * @instance
         */
        NauticalInfo.prototype.toolInTrip = $util.emptyArray;

        /**
         * Creates a new NauticalInfo instance using the specified properties.
         * @function create
         * @memberof Nautical.NauticalInfo
         * @static
         * @param {Nautical.INauticalInfo=} [properties] Properties to set
         * @returns {Nautical.NauticalInfo} NauticalInfo instance
         */
        NauticalInfo.create = function create(properties) {
            return new NauticalInfo(properties);
        };

        /**
         * Encodes the specified NauticalInfo message. Does not implicitly {@link Nautical.NauticalInfo.verify|verify} messages.
         * @function encode
         * @memberof Nautical.NauticalInfo
         * @static
         * @param {Nautical.INauticalInfo} message NauticalInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NauticalInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inTrip != null && message.hasOwnProperty("inTrip"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.inTrip);
            if (message.tripStartSec != null && message.hasOwnProperty("tripStartSec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.tripStartSec);
            if (message.tripEndSec != null && message.hasOwnProperty("tripEndSec"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.tripEndSec);
            if (message.team != null && message.team.length)
                for (var i = 0; i < message.team.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.team[i]);
            if (message.foodInTrip != null && message.hasOwnProperty("foodInTrip"))
                for (var keys = Object.keys(message.foodInTrip), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.foodInTrip[keys[i]]).ldelim();
            if (message.toolInTrip != null && message.toolInTrip.length)
                for (var i = 0; i < message.toolInTrip.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.toolInTrip[i]);
            return writer;
        };

        /**
         * Encodes the specified NauticalInfo message, length delimited. Does not implicitly {@link Nautical.NauticalInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Nautical.NauticalInfo
         * @static
         * @param {Nautical.INauticalInfo} message NauticalInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NauticalInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NauticalInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Nautical.NauticalInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Nautical.NauticalInfo} NauticalInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NauticalInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nautical.NauticalInfo(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inTrip = reader.bool();
                    break;
                case 3:
                    message.tripStartSec = reader.int64();
                    break;
                case 4:
                    message.tripEndSec = reader.int64();
                    break;
                case 5:
                    if (!(message.team && message.team.length))
                        message.team = [];
                    message.team.push(reader.string());
                    break;
                case 6:
                    reader.skip().pos++;
                    if (message.foodInTrip === $util.emptyObject)
                        message.foodInTrip = {};
                    key = reader.string();
                    reader.pos++;
                    message.foodInTrip[key] = reader.int64();
                    break;
                case 7:
                    if (!(message.toolInTrip && message.toolInTrip.length))
                        message.toolInTrip = [];
                    message.toolInTrip.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NauticalInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Nautical.NauticalInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Nautical.NauticalInfo} NauticalInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NauticalInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NauticalInfo message.
         * @function verify
         * @memberof Nautical.NauticalInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NauticalInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inTrip != null && message.hasOwnProperty("inTrip"))
                if (typeof message.inTrip !== "boolean")
                    return "inTrip: boolean expected";
            if (message.tripStartSec != null && message.hasOwnProperty("tripStartSec"))
                if (!$util.isInteger(message.tripStartSec) && !(message.tripStartSec && $util.isInteger(message.tripStartSec.low) && $util.isInteger(message.tripStartSec.high)))
                    return "tripStartSec: integer|Long expected";
            if (message.tripEndSec != null && message.hasOwnProperty("tripEndSec"))
                if (!$util.isInteger(message.tripEndSec) && !(message.tripEndSec && $util.isInteger(message.tripEndSec.low) && $util.isInteger(message.tripEndSec.high)))
                    return "tripEndSec: integer|Long expected";
            if (message.team != null && message.hasOwnProperty("team")) {
                if (!Array.isArray(message.team))
                    return "team: array expected";
                for (var i = 0; i < message.team.length; ++i)
                    if (!$util.isString(message.team[i]))
                        return "team: string[] expected";
            }
            if (message.foodInTrip != null && message.hasOwnProperty("foodInTrip")) {
                if (!$util.isObject(message.foodInTrip))
                    return "foodInTrip: object expected";
                var key = Object.keys(message.foodInTrip);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.foodInTrip[key[i]]) && !(message.foodInTrip[key[i]] && $util.isInteger(message.foodInTrip[key[i]].low) && $util.isInteger(message.foodInTrip[key[i]].high)))
                        return "foodInTrip: integer|Long{k:string} expected";
            }
            if (message.toolInTrip != null && message.hasOwnProperty("toolInTrip")) {
                if (!Array.isArray(message.toolInTrip))
                    return "toolInTrip: array expected";
                for (var i = 0; i < message.toolInTrip.length; ++i)
                    if (!$util.isString(message.toolInTrip[i]))
                        return "toolInTrip: string[] expected";
            }
            return null;
        };

        return NauticalInfo;
    })();

    return Nautical;
})();