/*--------------------------------------------------------------------------

fpv32 - fast 32-bit floating point vector math for JavaScript.

The MIT License (MIT)

Copyright (c) 2016 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR v
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR vWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR v DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
"use strict";
//--------------------------------------------------------------------------
//
// API binding functions.
//
//--------------------------------------------------------------------------
/**
 * binds the f32 api.
 * @param {Float32Array} the array to bind.
 * @returns {f32}
 */
function bind_f32(context, array) {
    var obj = array;
    obj.__f32 = true;
    obj.add = function (v) { return context.add_f32_f32(obj, v); };
    obj.sub = function (v) { return context.sub_f32_f32(obj, v); };
    obj.mul = function (v) { return context.mul_f32_f32(obj, v); };
    obj.div = function (v) { return context.div_f32_f32(obj, v); };
    obj.negate = function () { return context.negate_f32(obj); };
    obj.dis = function (v) { return context.dis_f32_f32(obj, v); };
    obj.dissq = function (v) { return context.dissq_f32_f32(obj, v); };
    obj.abs = function () { return context.abs_f32(obj); };
    obj.min = function (v) { return context.min_f32_f32(obj, v); };
    obj.max = function (v) { return context.max_f32_f32(obj, v); };
    obj.clamp = function (min, max) { return context.clamp_f32_f32_f32(obj, min, max); };
    obj.lerp = function (v, a) { return context.lerp_f32_f32_f32(obj, v, a); };
    obj.clone = function () { return context.clone_f32(obj); };
    obj.equals = function (v) { return context.equals_f32_f32(obj, v); };
    obj.inspect = function () { return context.inspect_f32(obj); };
    obj.store = function (out) { return context.store_f32(obj, out); };
    return array;
}
/**
 * binds the v2 api.
 * @param {Float32Array} the array to bind.
 * @returns {v2}
 */
function bind_v2(context, array) {
    var obj = array;
    obj.__v2 = true;
    obj.add = function (v) { return context.add_v2_v2(obj, v); };
    obj.sub = function (v) { return context.sub_v2_v2(obj, v); };
    obj.mul = function (v) { return context.mul_v2_v2(obj, v); };
    obj.div = function (v) { return context.div_v2_v2(obj, v); };
    obj.scale = function (v) { return context.mul_v2_f32(obj, v); };
    obj.dot = function (v) { return context.dot_v2_v2(obj, v); };
    obj.norm = function () { return context.norm_v2(obj); };
    obj.mag = function () { return context.mag_v2(obj); };
    obj.magsq = function () { return context.magsq_v2(obj); };
    obj.reflect = function (v) { return context.reflect_v2_v2(obj, v); };
    obj.negate = function () { return context.negate_v2(obj); };
    obj.dis = function (v) { return context.dis_v2_v2(obj, v); };
    obj.dissq = function (v) { return context.dissq_v2_v2(obj, v); };
    obj.abs = function () { return context.abs_v2(obj); };
    obj.min = function (v) { return context.min_v2_v2(obj, v); };
    obj.max = function (v) { return context.max_v2_v2(obj, v); };
    obj.clamp = function (min, max) { return context.clamp_v2_v2_v2(obj, min, max); };
    obj.lerp = function (v, a) { return context.lerp_v2_v2_f32(obj, v, a); };
    obj.transform = function (v) { return context.transform_v2_m4(obj, v); };
    obj.transform3 = function (v) { return context.transform3_v2_m4(obj, v); };
    obj.clone = function () { return context.clone_v2(obj); };
    obj.equals = function (v) { return context.equals_v2_v2(obj, v); };
    obj.inspect = function () { return context.inspect_v2(obj); };
    obj.store = function (out) { return context.store_v2(obj, out); };
    return array;
}
/**
 * binds the v3 api.
 * @param {Float32Array} the array to bind.
 * @returns {v3}
 */
function bind_v3(context, array) {
    var obj = array;
    obj.__v3 = true;
    obj.add = function (v) { return context.add_v3_v3(obj, v); };
    obj.sub = function (v) { return context.sub_v3_v3(obj, v); };
    obj.mul = function (v) { return context.mul_v3_v3(obj, v); };
    obj.div = function (v) { return context.div_v3_v3(obj, v); };
    obj.scale = function (v) { return context.mul_v3_f32(obj, v); };
    obj.dot = function (v) { return context.dot_v3_v3(obj, v); };
    obj.cross = function (v) { return context.cross_v3_v3(obj, v); };
    obj.norm = function () { return context.norm_v3(obj); };
    obj.mag = function () { return context.mag_v3(obj); };
    obj.magsq = function () { return context.magsq_v3(obj); };
    obj.reflect = function (v) { return context.reflect_v3_v3(obj, v); };
    obj.negate = function () { return context.negate_v3(obj); };
    obj.dis = function (v) { return context.dis_v3_v3(obj, v); };
    obj.dissq = function (v) { return context.dissq_v3_v3(obj, v); };
    obj.abs = function () { return context.abs_v3(obj); };
    obj.min = function (v) { return context.min_v3_v3(obj, v); };
    obj.max = function (v) { return context.max_v3_v3(obj, v); };
    obj.clamp = function (min, max) { return context.clamp_v3_v3_v3(obj, min, max); };
    obj.lerp = function (v, a) { return context.lerp_v3_v3_f32(obj, v, a); };
    obj.transform = function (m) { return context.transform_v3_m4(obj, m); };
    obj.transform3 = function (m) { return context.transform3_v3_m4(obj, m); };
    obj.clone = function () { return context.clone_v3(obj); };
    obj.equals = function (v) { return context.equals_v3_v3(obj, v); };
    obj.inspect = function () { return context.inspect_v3(obj); };
    obj.store = function (out) { return context.store_v3(obj, out); };
    return array;
}
/**
 * binds the v4 api.
 * @param {Float32Array} the array to bind.
 * @returns {v4}
 */
function bind_v4(context, array) {
    var obj = array;
    obj.__v4 = true;
    obj.add = function (v) { return context.add_v4_v4(obj, v); };
    obj.sub = function (v) { return context.sub_v4_v4(obj, v); };
    obj.mul = function (v) { return context.mul_v4_v4(obj, v); };
    obj.div = function (v) { return context.div_v4_v4(obj, v); };
    obj.scale = function (v) { return context.mul_v4_f32(obj, v); };
    obj.dot = function (v) { return context.dot_v4_v4(obj, v); };
    obj.norm = function () { return context.norm_v4(obj); };
    obj.mag = function () { return context.mag_v4(obj); };
    obj.magsq = function () { return context.magsq_v4(obj); };
    obj.negate = function () { return context.negate_v4(obj); };
    obj.dis = function (v) { return context.dis_v4_v4(obj, v); };
    obj.dissq = function (v) { return context.dissq_v4_v4(obj, v); };
    obj.abs = function () { return context.abs_v4(obj); };
    obj.min = function (v) { return context.min_v4_v4(obj, v); };
    obj.max = function (v) { return context.max_v4_v4(obj, v); };
    obj.clamp = function (min, max) { return context.clamp_v4_v4_v4(obj, min, max); };
    obj.lerp = function (v, amount) { return context.lerp_v4_v4_f32(obj, v, amount); };
    obj.transform = function (matrix) { return context.transform_v4_m4(obj, matrix); };
    obj.transform3 = function (matrix) { return context.transform3_v4_m4(obj, matrix); };
    obj.clone = function () { return context.clone_v4(obj); };
    obj.equals = function (v) { return context.equals_v4_v4(obj, v); };
    obj.inspect = function () { return context.inspect_v4(obj); };
    obj.store = function (out) { return context.store_v4(obj, out); };
    return array;
}
/**
 * binds the m4 api.
 * @param {Float32Array} the array to bind.
 * @returns {m4}
 */
function bind_m4(context, array) {
    var obj = array;
    obj.__m4 = true;
    obj.add = function (v) { return context.add_m4_m4(obj, v); };
    obj.sub = function (v) { return context.sub_m4_m4(obj, v); };
    obj.mul = function (v) { return context.mul_m4_m4(obj, v); };
    obj.div = function (v) { return context.div_m4_m4(obj, v); };
    obj.translate = function (v) { return context.mul_m4_m4(obj, context.m4_translation(v)); };
    obj.scale = function (v) { return context.scale_m4_v3(obj, v); };
    obj.rotatex = function (r) { return context.mul_m4_m4(obj, context.m4_rotationx(r)); };
    obj.rotatey = function (r) { return context.mul_m4_m4(obj, context.m4_rotationy(r)); };
    obj.rotatez = function (r) { return context.mul_m4_m4(obj, context.m4_rotationz(r)); };
    obj.invert = function () { return context.invert_m4(obj); };
    obj.transpose = function () { return context.transpose_m4(obj); };
    obj.determinant = function () { return context.determinant_m4(obj); };
    obj.lerp = function (v, a) { return context.lerp_m4_m4_f32(obj, v, a); };
    obj.clone = function () { return context.clone_m4(obj); };
    obj.equals = function (v) { return context.equals_m4_m4(obj, v); };
    obj.inspect = function () { return context.inspect_m4(obj); };
    obj.store = function (out) { return context.store_m4(obj, out); };
    return array;
}
/**
 * standard float32 memory allocator.
 */
var Memory = (function () {
    /**
     * creates a new float 32 allocator.
     */
    function Memory() {
    }
    /**
     * reverse binds the vector api from the given context.
     * @param {Context} the math context to bind.
     * @return {void}
     */
    Memory.prototype.bind = function (context) {
        this.context = context;
    };
    /**
     * returns a f32 value.
     * @returns {Float32Array}
     */
    Memory.prototype.f32 = function () {
        return bind_f32(this.context, new Float32Array([0]));
    };
    /**
     * returns a v2 value.
     * @returns {Float32Array}
     */
    Memory.prototype.v2 = function () {
        return bind_v2(this.context, new Float32Array([0, 0]));
    };
    /**
     * returns a v3 value.
     * @returns {Float32Array}
     */
    Memory.prototype.v3 = function () {
        return bind_v3(this.context, new Float32Array([0, 0, 0]));
    };
    /**
     * returns a v4 value.
     * @returns {Float32Array}
     */
    Memory.prototype.v4 = function () {
        return bind_v4(this.context, new Float32Array([0, 0, 0, 0]));
    };
    /**
     * returns a m4 value.
     * @returns {Float32Array}
     */
    Memory.prototype.m4 = function () {
        return bind_v4(this.context, new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    };
    return Memory;
}());
exports.Memory = Memory;
/**
 * A float32 array turbo allocator.
 */
var MemoryCache = (function () {
    /**
     * creates a volatile memory set with the given size.
     * @param {number} the number of registers in this memory set.
     * @returns {Memory}
     */
    function MemoryCache(size) {
        this.size = size;
        this.indices = new Uint32Array([0, 0, 0, 0, 0]);
        this.array_f32 = new Array(size);
        this.array_v2 = new Array(size);
        this.array_v3 = new Array(size);
        this.array_v4 = new Array(size);
        this.array_m4 = new Array(size);
        for (var i = 0; i < this.size; i++) {
            this.array_f32[i] = new Float32Array([0]);
            this.array_v2[i] = new Float32Array([0, 0]);
            this.array_v3[i] = new Float32Array([0, 0, 0]);
            this.array_v4[i] = new Float32Array([0, 0, 0, 0]);
            this.array_m4[i] = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
    }
    /**
     * reverse binds the vector api from the given context.
     * @param {Context} the math context to bind.
     * @return {void}
     */
    MemoryCache.prototype.bind = function (context) {
        for (var i = 0; i < this.size; i++) {
            this.array_f32[i] = bind_f32(context, this.array_f32[i]);
            this.array_v2[i] = bind_v2(context, this.array_v2[i]);
            this.array_v3[i] = bind_v3(context, this.array_v3[i]);
            this.array_v4[i] = bind_v4(context, this.array_v4[i]);
            this.array_m4[i] = bind_m4(context, this.array_m4[i]);
        }
    };
    /**
     * returns a f32 value.
     * @returns {Float32Array}
     */
    MemoryCache.prototype.f32 = function () {
        var array = this.array_f32[this.indices[0] % this.size];
        this.indices[0] += 1 | 0;
        return array;
    };
    /**
     * returns a v2 value.
     * @returns {Float32Array}
     */
    MemoryCache.prototype.v2 = function () {
        var array = this.array_v2[this.indices[1] % this.size];
        this.indices[1] += 1 | 0;
        return array;
    };
    /**
     * returns a v3 value.
     * @returns {Float32Array}
     */
    MemoryCache.prototype.v3 = function () {
        var array = this.array_v3[this.indices[2] % this.size];
        this.indices[2] += 1 | 0;
        return array;
    };
    /**
     * returns a v4 value.
     * @returns {Float32Array}
     */
    MemoryCache.prototype.v4 = function () {
        var array = this.array_v4[this.indices[3] % this.size];
        this.indices[3] += 1 | 0;
        return array;
    };
    /**
     * returns a m4 value.
     * @returns {Float32Array}
     */
    MemoryCache.prototype.m4 = function () {
        var array = this.array_m4[this.indices[4] % this.size];
        this.indices[4] += 1 | 0;
        return array;
    };
    return MemoryCache;
}());
exports.MemoryCache = MemoryCache;
//--------------------------------------------------------------------------
//
// memory interfaces.
//
//--------------------------------------------------------------------------
/**
 * fpv32 mathematics context.
 */
var Context = (function () {
    /**
     * creates a new fpv32 math context.
     * @param {Memory} the memory allocator for this context.
     * @returns{Context}
     */
    function Context(memory) {
        this.memory = memory;
        this.memory.bind(this);
    }
    /**
     * creates a new f32 value.
     * @param {number} the value for this f32.
     * @returns {f32}
     */
    Context.prototype.f32 = function (x) {
        var out = this.memory.f32();
        out[0] = x;
        return out;
    };
    /**
     * creates a new v2 value.
     * @param {number} the x value for this v2.
     * @param {number} the y value for this v2.
     * @returns {v2}
     */
    Context.prototype.v2 = function (x, y) {
        var out = this.memory.v2();
        out[0] = x;
        out[1] = y;
        return out;
    };
    /**
     * creates a new v3 value.
     * @param {number} the x value for this v3.
     * @param {number} the y value for this v3.
     * @param {number} the z value for this v3.
     * @returns {v3}
     */
    Context.prototype.v3 = function (x, y, z) {
        var out = this.memory.v3();
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
    };
    /**
     * creates a new v4 value.
     * @param {number} the x value for this v4.
     * @param {number} the y value for this v4.
     * @param {number} the z value for this v4.
     * @param {number} the w value for this v4.
     * @returns {v4}
     */
    Context.prototype.v4 = function (x, y, z, w) {
        var out = this.memory.v4();
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = z;
        return out;
    };
    /**
     * creates a new m4 value.
     * @param {Array<number>} optional array of values to create this m4.
     * @returns {m4}
     */
    Context.prototype.m4 = function (values) {
        var v = this.memory.m4();
        if (values !== undefined)
            v.set(values);
        return v;
    };
    /**
     * adds the left f32 value with the right.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {f32}
     */
    Context.prototype.add_f32_f32 = function (a, b) {
        var out = this.memory.f32();
        out[0] = a[0] + b[0];
        return out;
    };
    /**
     * adds the left v2 value with the right.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {v2}
     */
    Context.prototype.add_v2_v2 = function (a, b) {
        var out = this.memory.v2();
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
    };
    /**
     * adds the left v3 value with the right.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {v3}
     */
    Context.prototype.add_v3_v3 = function (a, b) {
        var out = this.memory.v3();
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
    };
    /**
     * adds the left v4 value with the right.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {v4}
     */
    Context.prototype.add_v4_v4 = function (a, b) {
        var out = this.memory.v4();
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
    };
    /**
     * adds the left m4 value with the right.
     * @param {m4} the left value.
     * @param {m4} the right value.
     * @returns {m4}
     */
    Context.prototype.add_m4_m4 = function (a, b) {
        var out = this.memory.m4();
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        out[9] = a[9] + b[9];
        out[10] = a[10] + b[10];
        out[11] = a[11] + b[11];
        out[12] = a[12] + b[12];
        out[13] = a[13] + b[13];
        out[14] = a[14] + b[14];
        out[15] = a[15] + b[15];
        return out;
    };
    /**
     * subtracts the left f32 value with the right.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {f32}
     */
    Context.prototype.sub_f32_f32 = function (a, b) {
        var out = this.memory.f32();
        out[0] = a[0] - b[0];
        return out;
    };
    /**
     * subtracts the left v2 value with the right.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {v2}
     */
    Context.prototype.sub_v2_v2 = function (a, b) {
        var out = this.memory.v2();
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
    };
    /**
     * subtracts the left v3 value with the right.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {v3}
     */
    Context.prototype.sub_v3_v3 = function (a, b) {
        var out = this.memory.v3();
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
    };
    /**
     * subtracts the left v4 value with the right.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {v4}
     */
    Context.prototype.sub_v4_v4 = function (a, b) {
        var out = this.memory.v4();
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
    };
    /**
     * subtracts the left m4 value with the right.
     * @param {m4} the left value.
     * @param {m4} the right value.
     * @returns {m4}
     */
    Context.prototype.sub_m4_m4 = function (a, b) {
        var out = this.memory.m4();
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        out[9] = a[9] - b[9];
        out[10] = a[10] - b[10];
        out[11] = a[11] - b[11];
        out[12] = a[12] - b[12];
        out[13] = a[13] - b[13];
        out[14] = a[14] - b[14];
        out[15] = a[15] - b[15];
        return out;
    };
    /**
     * multiplies the left f32 value with the right f32 value.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {f32}
     */
    Context.prototype.mul_f32_f32 = function (a, b) {
        var out = this.memory.f32();
        out[0] = a[0] * b[0];
        return out;
    };
    /**
     * multiplies the left v2 value with the right f32 value.
     * @param {v2} the left value.
     * @param {f32} the right value.
     * @returns {v2}
     */
    Context.prototype.mul_v2_f32 = function (a, b) {
        var out = this.memory.v2();
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[0];
        return out;
    };
    /**
     * multiplies the left v3 value with the right f32 value.
     * @param {v3} the left value.
     * @param {f32} the right value.
     * @returns {v3}
     */
    Context.prototype.mul_v3_f32 = function (a, b) {
        var out = this.memory.v3();
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[0];
        out[2] = a[2] * b[0];
        return out;
    };
    /**
     * multiplies the left v4 value with the right f32 value.
     * @param {v4} the left value.
     * @param {f32} the right value.
     * @returns {v4}
     */
    Context.prototype.mul_v4_f32 = function (a, b) {
        var out = this.memory.v4();
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[0];
        out[2] = a[2] * b[0];
        out[3] = a[3] * b[0];
        return out;
    };
    /**
     * multiplies the left v2 value with the right.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {v2}
     */
    Context.prototype.mul_v2_v2 = function (a, b) {
        var out = this.memory.v2();
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
    };
    /**
     * multiplies the left v3 value with the right.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {v3}
     */
    Context.prototype.mul_v3_v3 = function (a, b) {
        var out = this.memory.v3();
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
    };
    /**
     * multiplies the left v3 value with the right.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {v3}
     */
    Context.prototype.mul_v4_v4 = function (a, b) {
        var out = this.memory.v4();
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        out[3] = a[3] * b[3];
        return out;
    };
    /**
     * multiplies the left m4 value with the right.
     * @param {m4} the left value.
     * @param {m4} the right value.
     * @returns {m4}
     */
    Context.prototype.mul_m4_m4 = function (a, b) {
        var out = this.memory.m4();
        out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])) + (a[3] * b[12]);
        out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])) + (a[3] * b[13]);
        out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + (a[3] * b[14]);
        out[3] = (((a[0] * b[3]) + (a[1] * b[7])) + (a[2] * b[11])) + (a[3] * b[15]);
        out[4] = (((a[4] * b[0]) + (a[5] * b[4])) + (a[6] * b[8])) + (a[7] * b[12]);
        out[5] = (((a[4] * b[1]) + (a[5] * b[5])) + (a[6] * b[9])) + (a[7] * b[13]);
        out[6] = (((a[4] * b[2]) + (a[5] * b[6])) + (a[6] * b[10])) + (a[7] * b[14]);
        out[7] = (((a[4] * b[3]) + (a[5] * b[7])) + (a[6] * b[11])) + (a[7] * b[15]);
        out[8] = (((a[8] * b[0]) + (a[9] * b[4])) + (a[10] * b[8])) + (a[11] * b[12]);
        out[9] = (((a[8] * b[1]) + (a[9] * b[5])) + (a[10] * b[9])) + (a[11] * b[13]);
        out[10] = (((a[8] * b[2]) + (a[9] * b[6])) + (a[10] * b[10])) + (a[11] * b[14]);
        out[11] = (((a[8] * b[3]) + (a[9] * b[7])) + (a[10] * b[11])) + (a[11] * b[15]);
        out[12] = (((a[12] * b[0]) + (a[13] * b[4])) + (a[14] * b[8])) + (a[15] * b[12]);
        out[13] = (((a[12] * b[1]) + (a[13] * b[5])) + (a[14] * b[9])) + (a[15] * b[13]);
        out[14] = (((a[12] * b[2]) + (a[13] * b[6])) + (a[14] * b[10])) + (a[15] * b[14]);
        out[15] = (((a[12] * b[3]) + (a[13] * b[7])) + (a[14] * b[11])) + (a[15] * b[15]);
        return out;
    };
    /**
     * divides the left f32 value with the right.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {f32}
     */
    Context.prototype.div_f32_f32 = function (a, b) {
        var out = this.memory.f32();
        out[0] = a[0] / b[0];
        return out;
    };
    /**
     * divides the left v2 value with the right.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {v2}
     */
    Context.prototype.div_v2_v2 = function (a, b) {
        var out = this.memory.v2();
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
    };
    /**
     * divides the left v3 value with the right.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {v3}
     */
    Context.prototype.div_v3_v3 = function (a, b) {
        var out = this.memory.v3();
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
    };
    /**
     * divides the left v4 value with the right.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {v4}
     */
    Context.prototype.div_v4_v4 = function (a, b) {
        var out = this.memory.v4();
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        out[3] = a[3] / b[3];
        return out;
    };
    /**
     * divides the left m4 value with the right.
     * @param {m4} the left value.
     * @param {m4} the right value.
     * @returns {m4}
     */
    Context.prototype.div_m4_m4 = function (a, b) {
        var out = this.memory.m4();
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        out[3] = a[3] / b[3];
        out[4] = a[4] / b[4];
        out[5] = a[5] / b[5];
        out[6] = a[6] / b[6];
        out[7] = a[7] / b[7];
        out[8] = a[8] / b[8];
        out[9] = a[9] / b[9];
        out[10] = a[10] / b[10];
        out[11] = a[11] / b[11];
        out[12] = a[12] / b[12];
        out[13] = a[13] / b[13];
        out[14] = a[14] / b[14];
        out[15] = a[15] / b[15];
        return out;
    };
    /**
     * scales the left m4 by the given v3.
     * @param {m4} the left value.
     * @param {v4} the right value.
     * @returns {m4}
     */
    Context.prototype.scale_m4_v3 = function (m, b) {
        var out = this.memory.m4();
        out[0] = b[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = b[1];
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = b[2];
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    };
    /**
     * computes the dot product between the given two vectors.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {f32}
     */
    Context.prototype.dot_v2_v2 = function (a, b) {
        var out = this.memory.f32();
        out[0] = (a[0] * b[0]) + (a[1] * b[1]);
        return out;
    };
    /**
     * computes the dot product between the given two vectors.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {f32}
     */
    Context.prototype.dot_v3_v3 = function (a, b) {
        var out = this.memory.f32();
        out[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
        return out;
    };
    /**
     * computes the dot product between the given two vectors.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {f32}
     */
    Context.prototype.dot_v4_v4 = function (a, b) {
        var out = this.memory.f32();
        out[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]) + (a[3] * b[3]);
        return out;
    };
    /**
     * computes the cross product for the given two vectors.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {f32}
     */
    Context.prototype.cross_v3_v3 = function (a, b) {
        var out = this.memory.v3();
        out[0] = (a[1] * b[2]) - (a[2] * b[1]);
        out[1] = (a[2] * b[0]) - (a[0] * b[2]);
        out[2] = (a[0] * b[1]) - (a[1] * b[0]);
        return out;
    };
    /**
     * normalizes the given vector.
     * @param {v2} the vector to normalize.
     * @returns {v2}
     */
    Context.prototype.norm_v2 = function (a) {
        var out = this.memory.v2();
        var len = this.memory.f32();
        len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]));
        out[0] = a[0] * len[0];
        out[1] = a[1] * len[0];
        return out;
    };
    /**
     * normalizes the given vector.
     * @param {v3} the vector to normalize.
     * @returns {v3}
     */
    Context.prototype.norm_v3 = function (a) {
        var out = this.memory.v3();
        var len = this.memory.f32();
        len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]));
        out[0] = a[0] * len[0];
        out[1] = a[1] * len[0];
        out[2] = a[2] * len[0];
        return out;
    };
    /**
     * normalizes the given vector.
     * @param {v4} the vector to normalize.
     * @returns {v4}
     */
    Context.prototype.norm_v4 = function (a) {
        var out = this.memory.v4();
        var len = this.memory.f32();
        len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3]));
        out[0] = a[0] * len[0];
        out[1] = a[1] * len[0];
        out[2] = a[2] * len[0];
        out[3] = a[3] * len[0];
        return out;
    };
    /**
     * computes the magnitude of the given vector.
     * @param {v2} the vector.
     * @returns {f32}
     */
    Context.prototype.mag_v2 = function (a) {
        var out = this.memory.f32();
        out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]));
        return out;
    };
    /**
     * computes the magnitude of the given vector.
     * @param {v3} the vector.
     * @returns {f32}
     */
    Context.prototype.mag_v3 = function (a) {
        var out = this.memory.f32();
        out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]));
        return out;
    };
    /**
     * computes the magnitude of the given vector.
     * @param {v4} the vector.
     * @returns {f32}
     */
    Context.prototype.mag_v4 = function (a) {
        var out = this.memory.f32();
        out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3]));
        return out;
    };
    /**
     * computes the magnitude squared of the given vector.
     * @param {v2} the vector.
     * @returns {f32}
     */
    Context.prototype.magsq_v2 = function (a) {
        var out = this.memory.f32();
        out[0] = (a[0] * a[0]) + (a[1] * a[1]);
        return out;
    };
    /**
     * computes the magnitude squared of the given vector.
     * @param {v3} the vector.
     * @returns {f32}
     */
    Context.prototype.magsq_v3 = function (a) {
        var out = this.memory.f32();
        out[0] = (a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]);
        return out;
    };
    /**
     * computes the magnitude squared of the given vector.
     * @param {v4} the vector.
     * @returns {f32}
     */
    Context.prototype.magsq_v4 = function (a) {
        var out = this.memory.f32();
        out[0] = (a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3]);
        return out;
    };
    /**
     * computes the distance betwen the given values.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {f32}
     */
    Context.prototype.dis_f32_f32 = function (a, b) {
        var out = this.memory.f32();
        out[0] = Math.abs(a[0] - b[0]);
        return out;
    };
    /**
     * computes the distance betwen the given values.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {f32}
     */
    Context.prototype.dis_v2_v2 = function (a, b) {
        var out = this.memory.f32();
        var t = this.memory.v2();
        t[0] = a[0] - b[0];
        t[1] = a[1] - b[1];
        out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]));
        return out;
    };
    /**
     * computes the distance betwen the given values.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {f32}
     */
    Context.prototype.dis_v3_v3 = function (a, b) {
        var out = this.memory.f32();
        var t = this.memory.v3();
        t[0] = a[0] - b[0];
        t[1] = a[1] - b[1];
        t[2] = a[2] - b[2];
        out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]));
        return out;
    };
    /**
     * computes the distance betwen the given values.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {f32}
     */
    Context.prototype.dis_v4_v4 = function (a, b) {
        var out = this.memory.f32();
        var t = this.memory.v4();
        t[0] = a[0] - b[0];
        t[1] = a[1] - b[1];
        t[2] = a[2] - b[2];
        t[3] = a[3] - b[3];
        out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]) + (t[3] * t[3]));
        return out;
    };
    /**
     * computes the distance squared betwen the given values.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {f32}
     */
    Context.prototype.dissq_f32_f32 = function (a, b) {
        var out = this.memory.f32();
        out[0] = Math.abs(a[0] - b[0]);
        return out;
    };
    /**
     * computes the distance squared betwen the given values.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {f32}
     */
    Context.prototype.dissq_v2_v2 = function (a, b) {
        var out = this.memory.f32();
        var t = this.memory.v2();
        t[0] = a[0] - b[0];
        t[1] = a[1] - b[1];
        out[0] = (t[0] * t[0]) + (t[1] * t[1]);
        return out;
    };
    /**
     * computes the distance squared betwen the given values.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {f32}
     */
    Context.prototype.dissq_v3_v3 = function (a, b) {
        var out = this.memory.f32();
        var t = this.memory.v3();
        t[0] = a[0] - b[0];
        t[1] = a[1] - b[1];
        t[2] = a[2] - b[2];
        out[0] = (t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]);
        return out;
    };
    /**
     * computes the distance squared betwen the given values.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {f32}
     */
    Context.prototype.dissq_v4_v4 = function (a, b) {
        var out = this.memory.f32();
        var t = this.memory.v4();
        t[0] = a[0] - b[0];
        t[1] = a[1] - b[1];
        t[2] = a[2] - b[2];
        t[3] = a[3] - b[3];
        out[0] = (t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]) + (t[3] * t[3]);
        return out;
    };
    /**
     * reflects the left vector about the right.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {v2}
     */
    Context.prototype.reflect_v2_v2 = function (a, b) {
        var out = this.memory.v2();
        var dot = this.memory.f32();
        dot[0] = (a[0] * b[0]) + (a[1] * b[1]);
        out[0] = a[0] - ((2.0 * dot[0]) * b[0]);
        out[1] = a[1] - ((2.0 * dot[0]) * b[1]);
        return out;
    };
    /**
     * reflects the left vector about the right.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {v3}
     */
    Context.prototype.reflect_v3_v3 = function (a, b) {
        var out = this.memory.v3();
        var dot = this.memory.f32();
        dot[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
        out[0] = a[0] - ((2.0 * dot[0]) * b[0]);
        out[1] = a[1] - ((2.0 * dot[0]) * b[1]);
        out[2] = a[2] - ((2.0 * dot[0]) * b[2]);
        return out;
    };
    /**
     * negates the given value.
     * @param {f32} the value to negate.
     * @returns {f32}
     */
    Context.prototype.negate_f32 = function (a) {
        var out = this.memory.f32();
        out[0] = -a[0];
        return out;
    };
    /**
     * negates the given value.
     * @param {v2} the value to negate.
     * @returns {v2}
     */
    Context.prototype.negate_v2 = function (a) {
        var out = this.memory.v2();
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
    };
    /**
     * negates the given value.
     * @param {v3} the value to negate.
     * @returns {v3}
     */
    Context.prototype.negate_v3 = function (a) {
        var out = this.memory.v3();
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
    };
    /**
     * negates the given value.
     * @param {v4} the value to negate.
     * @returns {v4}
     */
    Context.prototype.negate_v4 = function (a) {
        var out = this.memory.v4();
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = -a[3];
        return out;
    };
    /**
     * returns the absolute values for the given value.
     * @param {f32}
     * @returns {f32}
     */
    Context.prototype.abs_f32 = function (a) {
        var out = this.memory.f32();
        out[0] = Math.abs(a[0]);
        return out;
    };
    /**
     * returns the absolute values for the given vector.
     * @param {v2}
     * @returns {v2}
     */
    Context.prototype.abs_v2 = function (a) {
        var out = this.memory.v2();
        out[0] = Math.abs(a[0]);
        out[1] = Math.abs(a[1]);
        return out;
    };
    /**
     * returns the absolute values for the given vector.
     * @param {v3}
     * @returns {v3}
     */
    Context.prototype.abs_v3 = function (a) {
        var out = this.memory.v3();
        out[0] = Math.abs(a[0]);
        out[1] = Math.abs(a[1]);
        out[2] = Math.abs(a[2]);
        return out;
    };
    /**
     * returns the absolute values for the given vector.
     * @param {v4}
     * @returns {v4}
     */
    Context.prototype.abs_v4 = function (a) {
        var out = this.memory.v4();
        out[0] = Math.abs(a[0]);
        out[1] = Math.abs(a[1]);
        out[2] = Math.abs(a[2]);
        out[3] = Math.abs(a[3]);
        return out;
    };
    /**
     * returns the minimum of the given two values.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {f32}
     */
    Context.prototype.min_f32_f32 = function (a, b) {
        var out = this.memory.f32();
        out[0] = (a[0] < b[0]) ? a[0] : b[0];
        return out;
    };
    /**
     * returns the minimum of the given two values.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {v2}
     */
    Context.prototype.min_v2_v2 = function (a, b) {
        var out = this.memory.v2();
        out[0] = (a[0] < b[0]) ? a[0] : b[0];
        out[1] = (a[1] < b[1]) ? a[1] : b[1];
        return out;
    };
    /**
     * returns the minimum of the given two values.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {v3}
     */
    Context.prototype.min_v3_v3 = function (a, b) {
        var out = this.memory.v3();
        out[0] = (a[0] < b[0]) ? a[0] : b[0];
        out[1] = (a[1] < b[1]) ? a[1] : b[1];
        out[2] = (a[2] < b[2]) ? a[2] : b[2];
        return out;
    };
    /**
     * returns the minimum of the given two values.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {v4}
     */
    Context.prototype.min_v4_v4 = function (a, b) {
        var out = this.memory.v4();
        out[0] = (a[0] < b[0]) ? a[0] : b[0];
        out[1] = (a[1] < b[1]) ? a[1] : b[1];
        out[2] = (a[2] < b[2]) ? a[2] : b[2];
        out[3] = (a[3] < b[3]) ? a[3] : b[3];
        return out;
    };
    /**
     * returns the maximum of the given two values.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {f32}
     */
    Context.prototype.max_f32_f32 = function (a, b) {
        var out = this.memory.f32();
        out[0] = (a[0] > b[0]) ? a[0] : b[0];
        return out;
    };
    /**
     * returns the maximum of the given two values.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {v2}
     */
    Context.prototype.max_v2_v2 = function (a, b) {
        var out = this.memory.v2();
        out[0] = (a[0] > b[0]) ? a[0] : b[0];
        out[1] = (a[1] > b[1]) ? a[1] : b[1];
        return out;
    };
    /**
     * returns the maximum of the given two values.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {v3}
     */
    Context.prototype.max_v3_v3 = function (a, b) {
        var out = this.memory.v3();
        out[0] = (a[0] > b[0]) ? a[0] : b[0];
        out[1] = (a[1] > b[1]) ? a[1] : b[1];
        out[2] = (a[2] > b[2]) ? a[2] : b[2];
        return out;
    };
    /**
     * returns the maximum of the given two values.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {v4}
     */
    Context.prototype.max_v4_v4 = function (a, b) {
        var out = this.memory.v4();
        out[0] = (a[0] > b[0]) ? a[0] : b[0];
        out[1] = (a[1] > b[1]) ? a[1] : b[1];
        out[2] = (a[2] > b[2]) ? a[2] : b[2];
        out[3] = (a[3] > b[3]) ? a[3] : b[3];
        return out;
    };
    /**
     * clamps the given value within the given min and max range.
     * @param {f32} the value.
     * @param {f32} the min value.
     * @param {f32} the max value.
     * @returns {f32}
     */
    Context.prototype.clamp_f32_f32_f32 = function (a, min, max) {
        var out = this.memory.f32();
        out[0] = a[0];
        out[0] = (out[0] > max[0]) ? max[0] : out[0];
        out[0] = (out[0] < min[0]) ? min[0] : out[0];
        return out;
    };
    /**
     * clamps the given value within the given min and max range.
     * @param {v2} the value.
     * @param {v2} the min value.
     * @param {v2} the max value.
     * @returns {v2}
     */
    Context.prototype.clamp_v2_v2_v2 = function (a, min, max) {
        var out = this.memory.v2();
        out[0] = a[0];
        out[1] = a[1];
        out[0] = (out[0] > max[0]) ? max[0] : out[0];
        out[0] = (out[0] < min[0]) ? min[0] : out[0];
        out[1] = (out[1] > max[1]) ? max[1] : out[1];
        out[1] = (out[1] < min[1]) ? min[1] : out[1];
        return out;
    };
    /**
     * clamps the given value within the given min and max range.
     * @param {v3} the value.
     * @param {v3} the min value.
     * @param {v3} the max value.
     * @returns {v3}
     */
    Context.prototype.clamp_v3_v3_v3 = function (a, min, max) {
        var out = this.memory.v3();
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[0] = (out[0] > max[0]) ? max[0] : out[0];
        out[0] = (out[0] < min[0]) ? min[0] : out[0];
        out[1] = (out[1] > max[1]) ? max[1] : out[1];
        out[1] = (out[1] < min[1]) ? min[1] : out[1];
        out[2] = (out[2] > max[2]) ? max[2] : out[2];
        out[2] = (out[2] < min[2]) ? min[2] : out[2];
        return out;
    };
    /**
     * clamps the given value within the given min and max range.
     * @param {v4} the value.
     * @param {v4} the min value.
     * @param {v4} the max value.
     * @returns {v4}
     */
    Context.prototype.clamp_v4_v4_v4 = function (a, min, max) {
        var out = this.memory.v4();
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[0] = (out[0] > max[0]) ? max[0] : out[0];
        out[0] = (out[0] < min[0]) ? min[0] : out[0];
        out[1] = (out[1] > max[1]) ? max[1] : out[1];
        out[1] = (out[1] < min[1]) ? min[1] : out[1];
        out[2] = (out[2] > max[2]) ? max[2] : out[2];
        out[2] = (out[2] < min[2]) ? min[2] : out[2];
        out[3] = (out[3] > max[3]) ? max[3] : out[3];
        out[3] = (out[3] < min[3]) ? min[3] : out[3];
        return out;
    };
    /**
     * linearly interpolates the between the source and destination values by the given amount.
     * @param {f32} the source value.
     * @param {f32} the destination value.
     * @param {f32} the amount.
     * @returns {f32}
     */
    Context.prototype.lerp_f32_f32_f32 = function (a, b, c) {
        var out = this.memory.f32();
        out[0] = a[0] + ((b[0] - a[0]) * c[0]);
        return out;
    };
    /**
     * linearly interpolates the between the source and destination values by the given amount.
     * @param {v2} the source value.
     * @param {v2} the destination value.
     * @param {f32} the amount.
     * @returns {v2}
     */
    Context.prototype.lerp_v2_v2_f32 = function (a, b, c) {
        var out = this.memory.v2();
        out[0] = a[0] + ((b[0] - a[0]) * c[0]);
        out[1] = a[1] + ((b[1] - a[1]) * c[0]);
        return out;
    };
    /**
     * linearly interpolates the between the source and destination values by the given amount.
     * @param {v3} the source value.
     * @param {v3} the destination value.
     * @param {f32} the amount.
     * @returns {v3}
     */
    Context.prototype.lerp_v3_v3_f32 = function (a, b, c) {
        var out = this.memory.v3();
        out[0] = a[0] + ((b[0] - a[0]) * c[0]);
        out[1] = a[1] + ((b[1] - a[1]) * c[0]);
        out[2] = a[2] + ((b[2] - a[2]) * c[0]);
        return out;
    };
    /**
     * linearly interpolates the between the source and destination values by the given amount.
     * @param {v4} the source value.
     * @param {v4} the destination value.
     * @param {f32} the amount.
     * @returns {v4}
     */
    Context.prototype.lerp_v4_v4_f32 = function (a, b, c) {
        var out = this.memory.v4();
        out[0] = a[0] + ((b[0] - a[0]) * c[0]);
        out[1] = a[1] + ((b[1] - a[1]) * c[0]);
        out[2] = a[2] + ((b[2] - a[2]) * c[0]);
        out[3] = a[3] + ((b[3] - a[3]) * c[0]);
        return out;
    };
    /**
     * linearly interpolates the between the source and destination values by the given amount.
     * @param {m4} the source value.
     * @param {m4} the destination value.
     * @param {f32} the amount.
     * @returns {m4}
     */
    Context.prototype.lerp_m4_m4_f32 = function (a, b, c) {
        var out = this.memory.m4();
        out[0] = a[0] + ((b[0] - a[0]) * c[0]);
        out[1] = a[1] + ((b[1] - a[1]) * c[0]);
        out[2] = a[2] + ((b[2] - a[2]) * c[0]);
        out[3] = a[3] + ((b[3] - a[3]) * c[0]);
        out[4] = a[4] + ((b[4] - a[4]) * c[0]);
        out[5] = a[5] + ((b[5] - a[5]) * c[0]);
        out[6] = a[6] + ((b[6] - a[6]) * c[0]);
        out[7] = a[7] + ((b[7] - a[7]) * c[0]);
        out[8] = a[8] + ((b[8] - a[8]) * c[0]);
        out[9] = a[9] + ((b[9] - a[9]) * c[0]);
        out[10] = a[10] + ((b[10] - a[10]) * c[0]);
        out[11] = a[11] + ((b[11] - a[11]) * c[0]);
        out[12] = a[12] + ((b[12] - a[12]) * c[0]);
        out[13] = a[13] + ((b[13] - a[13]) * c[0]);
        out[14] = a[14] + ((b[14] - a[14]) * c[0]);
        out[15] = a[15] + ((b[15] - a[15]) * c[0]);
        return out;
    };
    /**
     * transforms the given value by the given matrix.
     * @param {v2} the value to transform.
     * @param {m4} the matrix.
     * @returns {v2}
     */
    Context.prototype.transform_v2_m4 = function (a, b) {
        var out = this.memory.v2();
        out[0] = ((a[0] * b[0]) + (a[1] * b[4])) + b[12];
        out[1] = ((a[0] * b[1]) + (a[1] * b[5])) + b[13];
        return out;
    };
    /**
     * transforms the given value by the given matrix.
     * @param {v3} the value to transform.
     * @param {m4} the matrix.
     * @returns {v3}
     */
    Context.prototype.transform_v3_m4 = function (a, b) {
        var out = this.memory.v3();
        out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])) + b[12];
        out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])) + b[13];
        out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + b[14];
        return out;
    };
    /**
     * transforms the given value by the given matrix.
     * @param {v4} the value to transform.
     * @param {m4} the matrix.
     * @returns {v4}
     */
    Context.prototype.transform_v4_m4 = function (a, b) {
        var out = this.memory.v4();
        out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])) + (a[3] * b[12]);
        out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])) + (a[3] * b[13]);
        out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + (a[3] * b[14]);
        out[3] = (((a[0] * b[3]) + (a[1] * b[7])) + (a[2] * b[11])) + (a[3] * b[15]);
        return out;
    };
    /**
    * transforms the given value by the given matrix 3x3.
    * @param {v2} the value to transform.
    * @param {m4} the matrix.
    * @returns {v2}
    */
    Context.prototype.transform3_v2_m4 = function (a, b) {
        var out = this.memory.v2();
        out[0] = (a[0] * b[0]) + (a[1] * b[4]);
        out[1] = (a[0] * b[1]) + (a[1] * b[5]);
        return out;
    };
    /**
     * transforms the given value by the given matrix 3x3.
     * @param {v3} the value to transform.
     * @param {m4} the matrix.
     * @returns {v3}
     */
    Context.prototype.transform3_v3_m4 = function (a, b) {
        var out = this.memory.v3();
        out[0] = ((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8]);
        out[1] = ((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9]);
        out[2] = ((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10]);
        return out;
    };
    /**
     * transforms the given value by the given matrix 3x3.
     * @param {v4} the value to transform.
     * @param {m4} the matrix.
     * @returns {v4}
     */
    Context.prototype.transform3_v4_m4 = function (a, b) {
        var out = this.memory.v4();
        out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])) + (a[3] * b[12]);
        out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])) + (a[3] * b[13]);
        out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + (a[3] * b[14]);
        out[3] = (((a[0] * b[3]) + (a[1] * b[7])) + (a[2] * b[11])) + (a[3] * b[15]);
        return out;
    };
    /**
     * returns the inverse of the given matrix.
     * @param {m4} the matrix.
     * @returns {m4}
     */
    Context.prototype.invert_m4 = function (a) {
        var out = this.memory.m4();
        var n0 = a[0];
        var n1 = a[1];
        var n2 = a[2];
        var n3 = a[3];
        var n4 = a[4];
        var n5 = a[5];
        var n6 = a[6];
        var n7 = a[7];
        var n8 = a[8];
        var n9 = a[9];
        var n10 = a[10];
        var n11 = a[11];
        var n12 = a[12];
        var n13 = a[13];
        var n14 = a[14];
        var n15 = a[15];
        var n16 = (n10 * n15) - (n11 * n14);
        var n17 = (n9 * n15) - (n11 * n13);
        var n18 = (n9 * n14) - (n10 * n13);
        var n19 = (n8 * n15) - (n11 * n12);
        var n20 = (n8 * n14) - (n10 * n12);
        var n21 = (n8 * n13) - (n9 * n12);
        var n22 = ((n5 * n16) - (n6 * n17)) + (n7 * n18);
        var n23 = -(((n4 * n16) - (n6 * n19)) + (n7 * n20));
        var n24 = ((n4 * n17) - (n5 * n19)) + (n7 * n21);
        var n25 = -(((n4 * n18) - (n5 * n20)) + (n6 * n21));
        var n26 = 1.0 / ((((n0 * n22) + (n1 * n23)) + (n2 * n24)) + (n3 * n25));
        out[0] = n22 * n26;
        out[4] = n23 * n26;
        out[8] = n24 * n26;
        out[12] = n25 * n26;
        out[1] = -(((n1 * n16) - (n2 * n17)) + (n3 * n18)) * n26;
        out[5] = (((n0 * n16) - (n2 * n19)) + (n3 * n20)) * n26;
        out[9] = -(((n0 * n17) - (n1 * n19)) + (n3 * n21)) * n26;
        out[13] = (((n0 * n18) - (n1 * n20)) + (n2 * n21)) * n26;
        var n27 = (n6 * n15) - (n7 * n14);
        var n28 = (n5 * n15) - (n7 * n13);
        var n29 = (n5 * n14) - (n6 * n13);
        var n30 = (n4 * n15) - (n7 * n12);
        var n32 = (n4 * n14) - (n6 * n12);
        var n33 = (n4 * n13) - (n5 * n12);
        out[2] = (((n1 * n27) - (n2 * n28)) + (n3 * n29)) * n26;
        out[6] = -(((n0 * n27) - (n2 * n30)) + (n3 * n32)) * n26;
        out[10] = (((n0 * n28) - (n1 * n30)) + (n3 * n33)) * n26;
        out[14] = -(((n0 * n29) - (n1 * n32)) + (n2 * n33)) * n26;
        var n34 = (n6 * n11) - (n7 * n10);
        var n35 = (n5 * n11) - (n7 * n9);
        var n36 = (n5 * n10) - (n6 * n9);
        var n37 = (n4 * n11) - (n7 * n8);
        var n38 = (n4 * n10) - (n6 * n8);
        var n39 = (n4 * n9) - (n5 * n8);
        out[3] = -(((n1 * n34) - (n2 * n35)) + (n3 * n36)) * n26;
        out[7] = (((n0 * n34) - (n2 * n37)) + (n3 * n38)) * n26;
        out[11] = -(((n0 * n35) - (n1 * n37)) + (n3 * n39)) * n26;
        out[15] = (((n0 * n36) - (n1 * n38)) + (n2 * n39)) * n26;
        return out;
    };
    /**
     * returns the determinant of the given matrix.
     * @param {m4} the matrix.
     * @returns {f32}
     */
    Context.prototype.determinant_m4 = function (a) {
        var out = this.memory.f32();
        var n0 = a[0];
        var n1 = a[1];
        var n2 = a[2];
        var n3 = a[3];
        var n4 = a[4];
        var n5 = a[5];
        var n6 = a[6];
        var n7 = a[7];
        var n8 = a[8];
        var n9 = a[9];
        var n10 = a[10];
        var n11 = a[11];
        var n12 = a[12];
        var n13 = a[13];
        var n14 = a[14];
        var n15 = a[15];
        var n16 = (n10 * n15) - (n11 * n14);
        var n17 = (n9 * n15) - (n11 * n13);
        var n18 = (n9 * n14) - (n10 * n13);
        var n19 = (n8 * n15) - (n11 * n12);
        var n20 = (n8 * n14) - (n10 * n12);
        var n21 = (n8 * n13) - (n9 * n12);
        out[0] = ((((n0 * (((n5 * n16) - (n6 * n17)) + (n7 * n18))) -
            (n1 * (((n4 * n16) - (n6 * n19)) + (n7 * n20)))) + (n2 * (((n4 * n17) -
            (n5 * n19)) + (n7 * n21)))) - (n3 * (((n4 * n18) - (n5 * n20)) + (n6 * n21))));
        return out;
    };
    /**
     * returns the transpose of the given matrix.
     * @param {m4} the matrix.
     * @returns {m4}
     */
    Context.prototype.transpose_m4 = function (a) {
        var out = this.memory.m4();
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
        return out;
    };
    /**
     * creates an identity matrix.
     * @returns {m4}
     */
    Context.prototype.m4_identity = function () {
        var out = this.memory.m4();
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    };
    /**
     * creates an orthograpic matrix.
     * @param {number} the width.
     * @param {number} the height.
     * @param {number} the near plane.
     * @param {number} the far plane.
     * @returns {m4}
     */
    Context.prototype.m4_orthographic = function (width, height, near, far) {
        var m0 = this.m4_identity();
        m0[0] = 2.0 / width;
        m0[1] = m0[2] = m0[3] = 0.0;
        m0[5] = 2.0 / height;
        m0[4] = m0[6] = m0[7] = 0.0;
        m0[10] = 1.0 / (near - far);
        m0[8] = m0[9] = m0[11] = 0.0;
        m0[12] = m0[13] = 0.0;
        m0[14] = near / (near - far);
        m0[15] = 1.0;
        return m0;
    };
    /**
     * creates an perspective matrix.
     * @param {number} the field of view in radians.
     * @param {number} the aspect ratio.
     * @param {number} the near plane.
     * @param {number} the far plane.
     * @returns {m4}
     */
    Context.prototype.m4_perspective = function (field, aspect, near, far) {
        var n0 = 1.0 / Math.tan(field * 0.5);
        var n1 = n0 / aspect;
        var m = this.m4_identity();
        m[0] = n1;
        m[1] = m[2] = m[3] = 0.0;
        m[5] = n0;
        m[4] = m[6] = m[7] = 0.0;
        m[8] = m[9] = 0.0;
        m[10] = far / (near - far);
        m[11] = -1.0;
        m[12] = m[13] = m[15] = 0.0;
        m[14] = (near * far) / (near - far);
        return m;
    };
    /**
     * creates a X rotation matrix.
     * @param {number} the rotation in radians.
     * @returns {m4}
     */
    Context.prototype.m4_rotationx = function (radians) {
        var out = this.memory.m4();
        var t = this.memory.v2();
        t[0] = Math.cos(radians[0]);
        t[1] = Math.sin(radians[0]);
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = t[0];
        out[6] = t[1];
        out[7] = 0;
        out[8] = 0;
        out[9] = -t[1];
        out[10] = t[0];
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    };
    /**
     * creates a Y rotation matrix.
     * @param {number} the rotation in radians.
     * @returns {m4}
     */
    Context.prototype.m4_rotationy = function (radians) {
        var out = this.memory.m4();
        var t = this.memory.v2();
        t[0] = Math.cos(radians[0]);
        t[1] = Math.sin(radians[0]);
        out[0] = t[0];
        out[1] = 0.0;
        out[2] = -t[1];
        out[3] = 0.0;
        out[4] = 0.0;
        out[5] = 1.0;
        out[6] = 0.0;
        out[7] = 0.0;
        out[8] = t[1];
        out[9] = 0.0;
        out[10] = t[0];
        out[11] = 0.0;
        out[12] = 0.0;
        out[13] = 0.0;
        out[14] = 0.0;
        out[15] = 1.0;
        return out;
    };
    /**
     * creates a Z rotation matrix.
     * @param {number} the rotation in radians.
     * @returns {m4}
     */
    Context.prototype.m4_rotationz = function (radians) {
        var out = this.memory.m4();
        var t = this.memory.v2();
        t[0] = Math.cos(radians[0]);
        t[1] = Math.sin(radians[0]);
        out[0] = t[0];
        out[1] = t[1];
        out[2] = 0.0;
        out[3] = 0.0;
        out[4] = -t[1];
        out[5] = t[0];
        out[6] = 0.0;
        out[7] = 0.0;
        out[8] = 0.0;
        out[9] = 0.0;
        out[10] = 1.0;
        out[11] = 0.0;
        out[12] = 0.0;
        out[13] = 0.0;
        out[14] = 0.0;
        out[15] = 1.0;
        return out;
    };
    /**
     * creates a view matrix from the given vectors.
     * @param {v3} the position of this view matrix.
     * @param {v3} the target of this view matrix.
     * @param {v3} the up vector of this view matrix.
     * @returns {m4}
     */
    Context.prototype.m4_lookat = function (position, target, up) {
        var out = this.memory.m4();
        var d0 = this.sub_v3_v3(position, target);
        var v0 = this.norm_v3(d0);
        var d1 = this.cross_v3_v3(up, v0);
        var v1 = this.norm_v3(d1);
        var v2 = this.cross_v3_v3(v0, v1);
        out[0] = v1[0];
        out[1] = v2[0];
        out[2] = v0[0];
        out[3] = 0.0;
        out[4] = v1[1];
        out[5] = v2[1];
        out[6] = v0[1];
        out[7] = 0.0;
        out[8] = v1[2];
        out[9] = v2[2];
        out[10] = v0[2];
        out[11] = 0.0;
        out[12] = -this.dot_v3_v3(v1, position);
        out[13] = -this.dot_v3_v3(v2, position);
        out[14] = -this.dot_v3_v3(v0, position);
        out[15] = 1.0;
        return out;
    };
    /**
     * creates a scaling matrix with the given vector.
     * @param {v3} the scaling vector.
     * @returns {m4}
     */
    Context.prototype.m4_scale = function (a) {
        var out = this.memory.m4();
        out[0] = a[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = a[1];
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = a[2];
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    };
    /**
     * creates a translation matrix with the given vector.
     * @param {v3} the translation vector.
     * @returns {m4}
     */
    Context.prototype.m4_translation = function (a) {
        var out = this.memory.m4();
        out[0] = 1.0;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        out[4] = 0.0;
        out[5] = 1.0;
        out[6] = 0.0;
        out[7] = 0.0;
        out[8] = 0.0;
        out[9] = 0.0;
        out[10] = 1.0;
        out[11] = 0.0;
        out[12] = a[0];
        out[13] = a[1];
        out[14] = a[2];
        out[15] = 1.0;
        return out;
    };
    /**
     * creates a clone of the given value.
     * @param {f32} the value to clone.
     * @returns {f32}
     */
    Context.prototype.clone_f32 = function (a) {
        var out = this.memory.f32();
        out[0] = a[0];
        return out;
    };
    /**
     * creates a clone of the given value.
     * @param {v2} the value to clone.
     * @returns {v2}
     */
    Context.prototype.clone_v2 = function (a) {
        var out = this.memory.v2();
        out[0] = a[0];
        out[1] = a[1];
        return out;
    };
    /**
     * creates a clone of the given value.
     * @param {v3} the value to clone.
     * @returns {v3}
     */
    Context.prototype.clone_v3 = function (a) {
        var out = this.memory.v3();
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    };
    /**
     * creates a clone of the given value.
     * @param {v4} the value to clone.
     * @returns {v4}
     */
    Context.prototype.clone_v4 = function (a) {
        var out = this.memory.v4();
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    };
    /**
     * creates a clone of the given value.
     * @param {m4} the value to clone.
     * @returns {m4}
     */
    Context.prototype.clone_m4 = function (a) {
        var out = this.memory.m4();
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    };
    /**
     * compares the left value against the right for equality.
     * @param {f32} the left value.
     * @param {f32} the right value.
     * @returns {boolean}
     */
    Context.prototype.equals_f32_f32 = function (a, b) {
        return (a[0] === b[0]);
    };
    /**
     * compares the left value against the right for equality.
     * @param {v2} the left value.
     * @param {v2} the right value.
     * @returns {boolean}
     */
    Context.prototype.equals_v2_v2 = function (a, b) {
        return (a[0] === b[0] &&
            a[1] === b[1]);
    };
    /**
     * compares the left value against the right for equality.
     * @param {v3} the left value.
     * @param {v3} the right value.
     * @returns {boolean}
     */
    Context.prototype.equals_v3_v3 = function (a, b) {
        return (a[0] === b[0] &&
            a[1] === b[1] &&
            a[2] === b[2]);
    };
    /**
     * compares the left value against the right for equality.
     * @param {v4} the left value.
     * @param {v4} the right value.
     * @returns {boolean}
     */
    Context.prototype.equals_v4_v4 = function (a, b) {
        return (a[0] === b[0] &&
            a[1] === b[1] &&
            a[2] === b[2] &&
            a[3] === b[3]);
    };
    /**
     * compares the left value against the right for equality.
     * @param {m4} the left value.
     * @param {m4} the right value.
     * @returns {boolean}
     */
    Context.prototype.equals_m4_m4 = function (a, b) {
        return (a[0] === b[0] &&
            a[1] === b[1] &&
            a[2] === b[2] &&
            a[3] === b[3] &&
            a[4] === b[4] &&
            a[5] === b[5] &&
            a[6] === b[6] &&
            a[7] === b[7] &&
            a[8] === b[8] &&
            a[9] === b[9] &&
            a[10] === b[10] &&
            a[11] === b[11] &&
            a[12] === b[12] &&
            a[13] === b[13] &&
            a[14] === b[14] &&
            a[15] === b[15]);
    };
    /**
     * writes the given value to the given output array.
     * @param {f32} the value to store.
     * @param {Float32Array} the output value.
     * @returns {void}
     */
    Context.prototype.store_f32 = function (a, out) {
        var v = a;
        if (v.length !== out.length)
            throw Error("store_f32: buffer size mismatch");
        out.set(v);
    };
    /**
     * writes the given value to the given output array.
     * @param {v2} the value to store.
     * @param {Float32Array} the output value.
     * @returns {void}
     */
    Context.prototype.store_v2 = function (a, out) {
        var v = a;
        if (v.length !== out.length)
            throw Error("store_v2: buffer size mismatch");
        out.set(v);
    };
    /**
     * writes the given value to the given output array.
     * @param {v3} the value to store.
     * @param {Float32Array} the output value.
     * @returns {void}
     */
    Context.prototype.store_v3 = function (a, out) {
        var v = a;
        if (v.length !== out.length)
            throw Error("store_v3: buffer size mismatch");
        out.set(v);
    };
    /**
     * writes the given value to the given output array.
     * @param {v4} the value to store.
     * @param {Float32Array} the output value.
     * @returns {void}
     */
    Context.prototype.store_v4 = function (a, out) {
        var v = a;
        if (v.length !== out.length)
            throw Error("store_v4: buffer size mismatch");
        out.set(v);
    };
    /**
     * writes the given value to the given output array.
     * @param {m4} the value to store.
     * @param {Float32Array} the output value.
     * @returns {void}
     */
    Context.prototype.store_m4 = function (a, out) {
        var v = a;
        if (v.length !== out.length)
            throw Error("store_m4: buffer size mismatch");
        out.set(v);
    };
    /**
     * returns a string representation of the given value.
     * @param {f32} the value to inspect.
     * @returns {string}
     */
    Context.prototype.inspect_f32 = function (a) {
        return "[" + a[0] + "]";
    };
    /**
     * returns a string representation of the given value.
     * @param {v2} the value to inspect.
     * @returns {string}
     */
    Context.prototype.inspect_v2 = function (a) {
        return "[" + a[0] + ", " + a[1] + "]";
    };
    /**
     * returns a string representation of the given value.
     * @param {v3} the value to inspect.
     * @returns {string}
     */
    Context.prototype.inspect_v3 = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]";
    };
    /**
     * returns a string representation of the given value.
     * @param {v4} the value to inspect.
     * @returns {string}
     */
    Context.prototype.inspect_v4 = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]";
    };
    /**
     * returns a string representation of the given value.
     * @param {m4} the value to inspect.
     * @returns {string}
     */
    Context.prototype.inspect_m4 = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ",\n " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ",\n " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ",\n " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]";
    };
    return Context;
}());
exports.Context = Context;
