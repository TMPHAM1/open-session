"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _http = _interopRequireDefault(require("http"));
var _db = _interopRequireDefault(require("./config/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PORT = process.env.PORT || 4001;
const server = _http.default.createServer((req, res) => {
  res.end('Hello from the server');
}).listen(PORT);
(0, _db.default)();
console.log(`Server is up and running and listening on por: ${PORT}`);
var _default = exports.default = server;