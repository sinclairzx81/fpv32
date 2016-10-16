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
function bind_f32(context: Context, array: Float32Array): Float32Array {
  let obj = <any>array as f32
  obj.__f32 = true
  obj.add = (v) => context.add_f32_f32(obj, v)
  obj.sub = (v) => context.sub_f32_f32(obj, v)
  obj.mul = (v) => context.mul_f32_f32(obj, v)
  obj.div = (v) => context.div_f32_f32(obj, v)
  obj.negate = () => context.negate_f32(obj)
  obj.dis = (v) => context.dis_f32_f32(obj, v)
  obj.dissq = (v) => context.dissq_f32_f32(obj, v)
  obj.abs = () => context.abs_f32(obj)
  obj.min = (v) => context.min_f32_f32(obj, v)
  obj.max = (v) => context.max_f32_f32(obj, v)
  obj.clamp = (min, max) => context.clamp_f32_f32_f32(obj, min, max)
  obj.lerp = (v, a) => context.lerp_f32_f32_f32(obj, v, a)
  obj.clone = () => context.clone_f32(obj)
  obj.equals = (v) => context.equals_f32_f32(obj, v)
  obj.inspect = () => context.inspect_f32(obj)
  obj.store = (out: Float32Array) => context.store_f32(obj, out)
  return array
}

/**
 * binds the v2 api.
 * @param {Float32Array} the array to bind.
 * @returns {v2}
 */
function bind_v2(context: Context, array: Float32Array): Float32Array {
  let obj = <any>array as v2
  obj.__v2 = true
  obj.add = (v) => context.add_v2_v2(obj, v)
  obj.sub = (v) => context.sub_v2_v2(obj, v)
  obj.mul = (v) => context.mul_v2_v2(obj, v)
  obj.div = (v) => context.div_v2_v2(obj, v)
  obj.scale = (v) => context.mul_v2_f32(obj, v)
  obj.dot = (v) => context.dot_v2_v2(obj, v)
  obj.norm = () => context.norm_v2(obj)
  obj.mag = () => context.mag_v2(obj)
  obj.magsq = () => context.magsq_v2(obj)
  obj.reflect = (v) => context.reflect_v2_v2(obj, v)
  obj.negate = () => context.negate_v2(obj)
  obj.dis = (v) => context.dis_v2_v2(obj, v)
  obj.dissq = (v) => context.dissq_v2_v2(obj, v)
  obj.abs = () => context.abs_v2(obj)
  obj.min = (v) => context.min_v2_v2(obj, v)
  obj.max = (v) => context.max_v2_v2(obj, v)
  obj.clamp = (min, max) => context.clamp_v2_v2_v2(obj, min, max)
  obj.lerp = (v, a) => context.lerp_v2_v2_f32(obj, v, a)
  obj.transform = (v) => context.transform_v2_m4(obj, v)
  obj.transform3 = (v) => context.transform3_v2_m4(obj, v)
  obj.clone = () => context.clone_v2(obj)
  obj.equals = (v) => context.equals_v2_v2(obj, v)
  obj.inspect = () => context.inspect_v2(obj)
  obj.store = (out: Float32Array) => context.store_v2(obj, out)
  return array
}

/**
 * binds the v3 api.
 * @param {Float32Array} the array to bind.
 * @returns {v3}
 */
function bind_v3(context: Context, array: Float32Array): Float32Array {
  let obj = <any>array as v3
  obj.__v3 = true
  obj.add = (v) => context.add_v3_v3(obj, v)
  obj.sub = (v) => context.sub_v3_v3(obj, v)
  obj.mul = (v) => context.mul_v3_v3(obj, v)
  obj.div = (v) => context.div_v3_v3(obj, v)
  obj.scale = (v) => context.mul_v3_f32(obj, v)
  obj.dot = (v) => context.dot_v3_v3(obj, v)
  obj.cross = (v) => context.cross_v3_v3(obj, v)
  obj.norm = () => context.norm_v3(obj)
  obj.mag = () => context.mag_v3(obj)
  obj.magsq = () => context.magsq_v3(obj)
  obj.reflect = (v) => context.reflect_v3_v3(obj, v)
  obj.negate = () => context.negate_v3(obj)
  obj.dis = (v) => context.dis_v3_v3(obj, v)
  obj.dissq = (v) => context.dissq_v3_v3(obj, v)
  obj.abs = () => context.abs_v3(obj)
  obj.min = (v) => context.min_v3_v3(obj, v)
  obj.max = (v) => context.max_v3_v3(obj, v)
  obj.clamp = (min, max) => context.clamp_v3_v3_v3(obj, min, max)
  obj.lerp = (v, a) => context.lerp_v3_v3_f32(obj, v, a)
  obj.transform = (m) => context.transform_v3_m4(obj, m)
  obj.transform3 = (m) => context.transform3_v3_m4(obj, m)
  obj.clone = () => context.clone_v3(obj)
  obj.equals = (v) => context.equals_v3_v3(obj, v)
  obj.inspect = () => context.inspect_v3(obj)
  obj.store = (out: Float32Array) => context.store_v3(obj, out)
  return array
}
/**
 * binds the v4 api.
 * @param {Float32Array} the array to bind.
 * @returns {v4}
 */
function bind_v4(context: Context, array: Float32Array): Float32Array {
  let obj = <any>array as v4
  obj.__v4 = true
  obj.add = (v) => context.add_v4_v4(obj, v)
  obj.sub = (v) => context.sub_v4_v4(obj, v)
  obj.mul = (v) => context.mul_v4_v4(obj, v)
  obj.div = (v) => context.div_v4_v4(obj, v)
  obj.scale = (v) => context.mul_v4_f32(obj, v)
  obj.dot = (v) => context.dot_v4_v4(obj, v)
  obj.norm = () => context.norm_v4(obj)
  obj.mag = () => context.mag_v4(obj)
  obj.magsq = () => context.magsq_v4(obj)
  obj.negate = () => context.negate_v4(obj)
  obj.dis = (v) => context.dis_v4_v4(obj, v)
  obj.dissq = (v) => context.dissq_v4_v4(obj, v)
  obj.abs = () => context.abs_v4(obj)
  obj.min = (v) => context.min_v4_v4(obj, v)
  obj.max = (v) => context.max_v4_v4(obj, v)
  obj.clamp = (min, max) => context.clamp_v4_v4_v4(obj, min, max)
  obj.lerp = (v, amount) => context.lerp_v4_v4_f32(obj, v, amount)
  obj.transform = (matrix) => context.transform_v4_m4(obj, matrix)
  obj.transform3 = (matrix) => context.transform3_v4_m4(obj, matrix)
  obj.clone = () => context.clone_v4(obj)
  obj.equals = (v) => context.equals_v4_v4(obj, v)
  obj.inspect = () => context.inspect_v4(obj)
  obj.store = (out: Float32Array) => context.store_v4(obj, out)
  return array
}

/**
 * binds the m4 api.
 * @param {Float32Array} the array to bind.
 * @returns {m4}
 */
function bind_m4(context: Context, array: Float32Array): Float32Array {
  let obj = <any>array as m4
  obj.__m4 = true
  obj.add = (v: m4) => context.add_m4_m4(obj, v)
  obj.sub = (v: m4) => context.sub_m4_m4(obj, v)
  obj.mul = (v: m4) => context.mul_m4_m4(obj, v)
  obj.div = (v: m4) => context.div_m4_m4(obj, v)
  obj.translate = (v: v3) => context.mul_m4_m4(obj, context.m4_translation(v))
  obj.scale = (v: v3) => context.scale_m4_v3(obj, v)
  obj.rotatex = (r: f32) => context.mul_m4_m4(obj, context.m4_rotationx(r))
  obj.rotatey = (r: f32) => context.mul_m4_m4(obj, context.m4_rotationy(r))
  obj.rotatez = (r: f32) => context.mul_m4_m4(obj, context.m4_rotationz(r))
  obj.invert = () => context.invert_m4(obj)
  obj.transpose = () => context.transpose_m4(obj)
  obj.determinant = () => context.determinant_m4(obj)
  obj.lerp = (v: m4, a: f32) => context.lerp_m4_m4_f32(obj, v, a)
  obj.clone = () => context.clone_m4(obj)
  obj.equals = (v: m4) => context.equals_m4_m4(obj, v)
  obj.inspect = () => context.inspect_m4(obj)
  obj.store = (out: Float32Array) => context.store_m4(obj, out)
  return array
}

//--------------------------------------------------------------------------
//
// vector interfaces.
//
//--------------------------------------------------------------------------

/**
 * interface for a float 32 value.
 */
export interface f32 {
  /**
   * f32 indicator flag.
   */
  __f32: boolean

  /**
   * returns the element at the given index.
   */
  [index: number]: number

  /**
   * adds the given value.
   * @param {f32} the value to add.
   * @returns {f32}
   */
  add(v: f32): f32

  /**
   * subtracts the given value.
   * @param {f32} the value to subtract.
   * @returns {f32}
   */
  sub(v: f32): f32

  /**
   * multiplies by the given value.
   * @param {f32} the value to multiply.
   * @returns {f32}
   */
  mul(v: f32): f32

  /**
   * div by the given value.
   * @param {f32} the value to multiply.
   * @returns {f32}
   */
  div(v: f32): f32

  /**
   * negates this value.
   * @returns {f32}
   */
  negate(): f32

  /**
   * computes the distance between this and the given value.
   * @param {f32} the given value.
   * @returns {f32}
   */
  dis(v: f32): f32

  /**
   * computes the distance squared between this and the given value.
   * @param {f32} the given value.
   * @returns {f32}
   */
  dissq(v: f32): f32

  /**
   * returns this value absolute.
   * @returns {f32}
   */
  abs(): f32

  /**
   * returns the min of this or the given value.
   * @returns {f32}
   */
  min(v: f32): f32

  /**
   * returns the max of this or the given value.
   * @returns {f32}
   */
  max(v: f32): f32

  /**
   * clamps this value within the given min max range.
   * @returns {f32}
   */
  clamp(min: f32, max: f32): f32

  /**
   * linearly interpolates this value to the given value with the given amount.
   * @param {f32} the destination value.
   * @param {f32} the amount.
   * @returns {f32}
   */
  lerp(v: f32, amount: f32): f32

  /**
   * returns a clone of this.
   * @returns {f32}
   */
  clone(): f32

  /**
   * tests for equality.
   * @param {f32} the value to test.
   * @returns {boolean}
   */
  equals(v: f32): boolean

  /**
   * returns a string representation of this.
   * @returns {string}
   */
  inspect(): string

  /**
   * copies this value into the given array.
   * @param {Float32Array} the output.
   * @returns {void}
   */
  store(out: Float32Array): void
}

/**
 * interface for a floating point vector 2 value.
 */
export interface v2 {
  /**
   * v2 indicator flag
   */
  __v2: boolean

  /**
   * returns the value at the given index.
   */
  [index: number]: number

  /**
   * adds the given value.
   * @param {v2} the value to add.
   * @returns {v2}
   */
  add(v: v2): v2

  /**
   * subtracts the given value.
   * @param {v2} the value to add.
   * @returns {v2}
   */
  sub(v: v2): v2

  /**
   * multiplies the given value.
   * @param {v2} the value to add.
   * @returns {v2}
   */
  mul(v: v2): v2

  /**
   * divides the given value.
   * @param {v2} the value to add.
   * @returns {v2}
   */
  div(v: v2): v2

  /**
   * scales by the given value.
   * @param {f32} the value to add.
   * @returns {v2}
   */
  scale(v: f32): v2

  /**
   * returns the dot product of this and the given value.
   * @param {v2} the vector to dot.
   * @returns {v2}
   */
  dot(v: v2): f32

  /**
   * returns this vector normalized.
   * @returns {v2}
   */
  norm(): v2

  /**
   * returns the magnitude / length of this vector.
   * @returns {f32}
   */
  mag(): f32

  /**
   * returns the magnitude squared of this vector.
   * @returns {f32}
   */
  magsq(): f32

  /**
   * reflects the vector about the give vector.
   * @param {v2} the normal vector.
   * @returns {v2}
   */
  reflect(v: v2): v2

  /**
   * negates the values in this vector.
   * @returns {v2}
   */
  negate(): v2

  /**
   * computes the distance between this and the given vector.
   * @param {v2} the other vector.
   * @returns {f32}
   */
  dis(v: v2): f32

  /**
   * computes the distance squared between this and the given vector.
   * @param {v2} the other vector.
   * @returns {f32}
   */
  dissq(v: v2): f32

  /**
   * returns a new vector with each element absoluted.
   * @returns {v2}
   */
  abs(): v2

  /**
   * returns the min of this and the given vector.
   * @param {v2} the other vector.
   * @returns {v2}
   */
  min(v: v2): v2

  /**
   * returns the max of this and the given vector.
   * @param {v2} the other vector.
   * @returns {v2}
   */
  max(v: v2): v2

  /**
   * clamps this vector with the given min and max ranges.
   * @param {v2} the min vector.
   * @param {v2} the max vector.
   * @returns {v2}
   */
  clamp(min: v2, max: v2): v2

  /**
   * linearly interpalates this vector to the given vector and amount.
   * @param {v2} the vector.
   * @param {f32} the amount.
   * @returns {v2}
   */
  lerp(v: v2, amount: f32): v2

  /**
   * transforms this vector by the given matrix.
   * @param {m4} the transform matrix.
   * @returns {v2}
   */
  transform(matrix: m4): v2

  /**
   * transforms this vector by the given matrix.
   * @param {m4} the transform matrix.
   * @returns {v2}
   */
  transform3(matrix: m4): v2

  /**
   * returns a clone of this vector.
   * @returns {v2}
   */
  clone(): v2

  /**
   * tests the given vector for equality.
   * @param {v2} the vector to test.
   * @returns {boolean}
   */
  equals(v: v2): boolean

  /**
   * returns a string representation of this vector.
   * @returns {string}
   */
  inspect(): string

  /**
   * copies this vector to the given float32array.
   * @param {Float32Array} the output array.
   * @returns {void}
   */
  store(out: Float32Array): void
}

/**
 * interface for a floating point vector 3 value.
 */
export interface v3 {
  /**
   * v3 indicator flag.
   */
  __v3: boolean

  /**
   * returns the value at the given index.
   */
  [index: number]: number

  /**
   * adds the given value.
   * @param {v3} the value to add.
   * @returns {v3}
   */
  add(v: v3): v3

  /**
   * subtracts the given value.
   * @param {v3} the value to add.
   * @returns {v3}
   */
  sub(v: v3): v3

  /**
   * multiplies the given value.
   * @param {v3} the value to add.
   * @returns {v3}
   */
  mul(v: v3): v3

  /**
   * divides the given value.
   * @param {v3} the value to add.
   * @returns {v3}
   */
  div(v: v3): v3

  /**
   * scales by the given value.
   * @param {f32} the value to add.
   * @returns {v3}
   */
  scale(v: f32): v3

  /**
   * returns the dot product of this and the given value.
   * @param {v3} the vector to dot.
   * @returns {v3}
   */
  dot(v: v3): f32

  /**
   * returns the cross product of this and the given value.
   * @param {v3} the value to cross.
   * @returns {v3}
   */
  cross(v: v3): v3

  /**
   * returns this vector normalized.
   * @returns {v3}
   */
  norm(): v3

  /**
   * returns the magnitude / length of this vector.
   * @returns {f32}
   */
  mag(): f32

  /**
   * returns the magnitude squared of this vector.
   * @returns {f32}
   */
  magsq(): f32

  /**
   * reflects the vector about the give vector.
   * @param {v3} the normal vector.
   * @returns {v3}
   */
  reflect(v: v3): v3

  /**
   * negates the values in this vector.
   * @returns {v3}
   */
  negate(): v3

  /**
   * computes the distance between this and the given vector.
   * @param {v3} the other vector.
   * @returns {f32}
   */
  dis(v: v3): f32

  /**
   * computes the distance squared between this and the given vector.
   * @param {v3} the other vector.
   * @returns {f32}
   */
  dissq(v: v3): f32

  /**
   * returns a new vector with each element absoluted.
   * @returns {v3}
   */
  abs(): v3

  /**
   * returns the min of this and the given vector.
   * @param {v3} the other vector.
   * @returns {v3}
   */
  min(v: v3): v3

  /**
   * returns the max of this and the given vector.
   * @param {v3} the other vector.
   * @returns {v3}
   */
  max(v: v3): v3

  /**
   * clamps this vector with the given min and max ranges.
   * @param {v3} the min vector.
   * @param {v3} the max vector.
   * @returns {v3}
   */
  clamp(min: v3, max: v3): v3

  /**
   * linearly interpalates this vector to the given vector and amount.
   * @param {v3} the vector.
   * @param {f32} the amount.
   * @returns {v3}
   */
  lerp(v: v3, amount: f32): v3

  /**
   * transforms this vector by the given matrix.
   * @param {m4} the transform matrix.
   * @returns {v3}
   */
  transform(matrix: m4): v3

  /**
   * transforms this vector by the given matrix.
   * @param {m4} the transform matrix.
   * @returns {v3}
   */
  transform3(matrix: m4): v3

  /**
   * returns a clone of this vector.
   * @returns {v3}
   */
  clone(): v3

  /**
   * tests the given vector for equality.
   * @param {v3} the vector to test.
   * @returns {boolean}
   */
  equals(v: v3): boolean

  /**
   * returns a string representation of this vector.
   * @returns {string}
   */
  inspect(): string

  /**
   * copies this vector to the given float32array.
   * @param {Float32Array} the output array.
   * @returns {void}
   */
  store(out: Float32Array): void
}

/**
 * interface for a floating point vector 4 value.
 */
export interface v4 {

  /**
   * v4 indicator flag.
   */
  __v4: boolean

  /**
   * returns the value at the given index.
   */
  [index: number]: number

  /**
   * adds the given value.
   * @param {v4} the value to add.
   * @returns {v4}
   */
  add(v: v4): v4

  /**
   * subtracts the given value.
   * @param {v4} the value to add.
   * @returns {v4}
   */
  sub(v: v4): v4

  /**
   * multiplies the given value.
   * @param {v4} the value to add.
   * @returns {v4}
   */
  mul(v: v4): v4

  /**
   * divides the given value.
   * @param {v4} the value to add.
   * @returns {v4}
   */
  div(v: v4): v4

  /**
   * scales by the given value.
   * @param {f32} the value to add.
   * @returns {v4}
   */
  scale(v: f32): v4

  /**
   * returns the dot product of this and the given value.
   * @param {v4} the vector to dot.
   * @returns {v4}
   */
  dot(v: v4): f32

  /**
   * returns this vector normalized.
   * @returns {v4}
   */
  norm(): v4

  /**
   * returns the magnitude / length of this vector.
   * @returns {f32}
   */
  mag(): f32

  /**
   * returns the magnitude squared of this vector.
   * @returns {f32}
   */
  magsq(): f32

  /**
   * negates the values in this vector.
   * @returns {v4}
   */
  negate(): v4

  /**
   * computes the distance between this and the given vector.
   * @param {v4} the other vector.
   * @returns {f32}
   */
  dis(v: v4): f32

  /**
   * computes the distance squared between this and the given vector.
   * @param {v4} the other vector.
   * @returns {f32}
   */
  dissq(v: v4): f32

  /**
   * returns a new vector with each element absoluted.
   * @returns {v4}
   */
  abs(): v4

  /**
   * returns the min of this and the given vector.
   * @param {v4} the other vector.
   * @returns {v4}
   */
  min(v: v4): v4

  /**
   * returns the max of this and the given vector.
   * @param {v4} the other vector.
   * @returns {v4}
   */
  max(v: v4): v4

  /**
   * clamps this vector with the given min and max ranges.
   * @param {v4} the min vector.
   * @param {v4} the max vector.
   * @returns {v4}
   */
  clamp(min: v4, max: v4): v4

  /**
   * linearly interpalates this vector to the given vector and amount.
   * @param {v4} the vector.
   * @param {f32} the amount.
   * @returns {v4}
   */
  lerp(v: v4, amount: f32): v4

  /**
   * transforms this vector by the given matrix.
   * @param {m4} the transform matrix.
   * @returns {v4}
   */
  transform(matrix: m4): v4

  /**
   * transforms this vector by the given matrix.
   * @param {m4} the transform matrix.
   * @returns {v4}
   */
  transform3(matrix: m4): v4

  /**
   * returns a clone of this vector.
   * @returns {v4}
   */
  clone(): v4

  /**
   * tests the given vector for equality.
   * @param {v4} the vector to test.
   * @returns {boolean}
   */
  equals(v: v4): boolean

  /**
   * returns a string representation of this vector.
   * @returns {string}
   */
  inspect(): string

  /**
   * copies this vector to the given float32array.
   * @param {Float32Array} the output array.
   * @returns {void}
   */
  store(out: Float32Array): void
}

/**
 * interface for a floating point matrix 4 value.
 */
export interface m4 {

  /**
   * m4 indicator flag.
   */
  __m4: boolean

  /**
   * returns the value at the given index.
   */
  [index: number]: number

  /**
   * adds the given value.
   * @param {v4} the value to add.
   * @returns {v4}
   */
  add(v: m4): m4

  /**
   * subtracts the given value.
   * @param {v4} the value to add.
   * @returns {v4}
   */
  sub(v: m4): m4

  /**
   * multiplies the given value.
   * @param {v4} the value to add.
   * @returns {v4}
   */
  mul(v: m4): m4

  /**
   * divides the given value.
   * @param {v4} the value to add.
   * @returns {v4}
   */
  div(v: m4): m4

  /**
   * translates by the given vector.
   * @param {v3} the vector to translate with.
   * @returns {m4}
   */
  translate(v: v3): m4

  /**
   * scales by the given value.
   * @param {v3} the value to add.
   * @returns {v4}
   */
  scale(v: v3): m4

  /**
   * rotates this matrix by the given radian.
   * @param {f32} the radian.
   * @returns {m4}
   */
  rotatex(radian: f32): m4

  /**
   * rotates this matrix by the given radian.
   * @param {f32} the radian.
   * @returns {m4}
   */
  rotatey(radian: f32): m4

  /**
   * rotates this matrix by the given radian.
   * @param {f32} the radian.
   * @returns {m4}
   */
  rotatez(radian: f32): m4

  /**
   * returns the inverse of this matrix.
   * @returns {m4}
   */
  invert(): m4

  /**
   * returns the transpose of this matrix.
   * @returns {m4}
   */
  transpose(): m4

  /**
   * returns the determinant of this matrix.
   * @returns {f32}
   */
  determinant(): f32

  /**
   * linearly interpalates this matrix to the given matrix and amount.
   * @param {m4} the matrix.
   * @param {f32} the amount.
   * @returns {m4}
   */
  lerp(v: m4, amount: f32): m4

  /**
   * returns a clone of this matrix.
   * @returns {m4}
   */
  clone(): m4

  /**
   * tests the given matrix for equality.
   * @param {m4} the vector to test.
   * @returns {boolean}
   */
  equals(v: m4): boolean

  /**
   * returns a string representation of this matrix.
   * @returns {string}
   */
  inspect(): string

  /**
   * copies this matrix to the given float32array.
   * @param {Float32Array} the output array.
   * @returns {void}
   */
  store(out: Float32Array): void
}

//--------------------------------------------------------------------------
//
// memory interfaces.
//
//--------------------------------------------------------------------------

/**
 * memory allocation interface.
 */
export interface IMemory {

  /** 
   * reverse binds the vector api from the given context.
   * @param {Context} the math context to bind.
   * @return {void}
   */
  bind(context: Context): void

  /**
   * returns a f32 value.
   * @returns {Float32Array}
   */

  f32(): Float32Array
  /**
   * returns a v2 value.
   * @returns {Float32Array}
   */

  v2(): Float32Array
  /**
   * returns a v3 value.
   * @returns {Float32Array}
   */

  v3(): Float32Array

  /**
   * returns a v4 value.
   * @returns {Float32Array}
   */
  v4(): Float32Array

  /**
   * returns a m4 value.
   * @returns {Float32Array}
   */
  m4(): Float32Array
}

/**
 * standard float32 memory allocator.
 */
export class Memory implements IMemory {
  private context: Context

  /**
   * creates a new float 32 allocator.
   */
  constructor() { }

  /** 
   * reverse binds the vector api from the given context.
   * @param {Context} the math context to bind.
   * @return {void}
   */
  public bind(context: Context): void {
    this.context = context
  }

  /**
   * returns a f32 value.
   * @returns {Float32Array}
   */
  public f32(): Float32Array {
    return bind_f32(this.context, new Float32Array([0]))
  }

  /**
   * returns a v2 value.
   * @returns {Float32Array}
   */
  public v2(): Float32Array {
    return bind_v2(this.context, new Float32Array([0, 0]))
  }

  /**
   * returns a v3 value.
   * @returns {Float32Array}
   */
  public v3(): Float32Array {
    return bind_v3(this.context, new Float32Array([0, 0, 0]))
  }

  /**
   * returns a v4 value.
   * @returns {Float32Array}
   */
  public v4(): Float32Array {
    return bind_v4(this.context, new Float32Array([0, 0, 0, 0]))
  }

  /**
   * returns a m4 value.
   * @returns {Float32Array}
   */
  public m4(): Float32Array {
    return bind_m4(this.context, new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
  }
}

/**
 * A float32 array turbo allocator. 
 */
export class MemoryCache implements IMemory {
  private indices: Uint32Array
  private array_f32: Array<Float32Array>
  private array_v2: Array<Float32Array>
  private array_v3: Array<Float32Array>
  private array_v4: Array<Float32Array>
  private array_m4: Array<Float32Array>

  /**
   * creates a volatile memory set with the given size.
   * @param {number} the number of registers in this memory set.
   * @returns {Memory}
   */
  constructor(private size: number) {
    this.indices = new Uint32Array([0, 0, 0, 0, 0])
    this.array_f32 = new Array<Float32Array>(size)
    this.array_v2 = new Array<Float32Array>(size)
    this.array_v3 = new Array<Float32Array>(size)
    this.array_v4 = new Array<Float32Array>(size)
    this.array_m4 = new Array<Float32Array>(size)
    for (let i = 0; i < this.size; i++) {
      this.array_f32[i] = new Float32Array([0])
      this.array_v2[i] = new Float32Array([0, 0])
      this.array_v3[i] = new Float32Array([0, 0, 0])
      this.array_v4[i] = new Float32Array([0, 0, 0, 0])
      this.array_m4[i] = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
  }

  /** 
   * reverse binds the vector api from the given context.
   * @param {Context} the math context to bind.
   * @return {void}
   */
  public bind(context: Context): void {
    for (let i = 0; i < this.size; i++) {
      this.array_f32[i] = bind_f32(context, this.array_f32[i])
      this.array_v2[i] = bind_v2(context, this.array_v2[i])
      this.array_v3[i] = bind_v3(context, this.array_v3[i])
      this.array_v4[i] = bind_v4(context, this.array_v4[i])
      this.array_m4[i] = bind_m4(context, this.array_m4[i])
    }
  }

  /**
   * returns a f32 value.
   * @returns {Float32Array}
   */
  public f32(): Float32Array {
    let array = this.array_f32[this.indices[0] % this.size]
    this.indices[0] += 1 | 0
    return array
  }

  /**
   * returns a v2 value.
   * @returns {Float32Array}
   */
  public v2(): Float32Array {
    let array = this.array_v2[this.indices[1] % this.size]
    this.indices[1] += 1 | 0
    return array
  }

  /**
   * returns a v3 value.
   * @returns {Float32Array}
   */
  public v3(): Float32Array {
    let array = this.array_v3[this.indices[2] % this.size]
    this.indices[2] += 1 | 0
    return array
  }

  /**
   * returns a v4 value.
   * @returns {Float32Array}
   */
  public v4(): Float32Array {
    let array = this.array_v4[this.indices[3] % this.size]
    this.indices[3] += 1 | 0
    return array
  }

  /**
   * returns a m4 value.
   * @returns {Float32Array}
   */
  public m4(): Float32Array {
    let array = this.array_m4[this.indices[4] % this.size]
    this.indices[4] += 1 | 0
    return array
  }
}

//--------------------------------------------------------------------------
//
// memory interfaces.
//
//--------------------------------------------------------------------------

/**
 * fpv32 mathematics context.
 */
export class Context {

  /**
   * creates a new fpv32 math context.
   * @param {Memory} the memory allocator for this context.
   * @returns{Context}
   */
  constructor(private memory: IMemory) {
    this.memory.bind(this)
  }

  /**
   * creates a new f32 value.
   * @param {number} the value for this f32.
   * @returns {f32}
   */
  public f32(x: number): f32 {
    let out: any = this.memory.f32()
    out[0] = x
    return out as f32
  }

  /**
   * creates a new v2 value.
   * @param {number} the x value for this v2.
   * @param {number} the y value for this v2.
   * @returns {v2}
   */
  public v2(x: number, y: number): v2 {
    let out: any = this.memory.v2()
    out[0] = x
    out[1] = y
    return out as v2
  }

  /**
   * creates a new v3 value.
   * @param {number} the x value for this v3.
   * @param {number} the y value for this v3.
   * @param {number} the z value for this v3.
   * @returns {v3}
   */
  public v3(x: number, y: number, z: number): v3 {
    let out: any = this.memory.v3()
    out[0] = x
    out[1] = y
    out[2] = z
    return out as v3
  }

  /**
   * creates a new v4 value.
   * @param {number} the x value for this v4.
   * @param {number} the y value for this v4.
   * @param {number} the z value for this v4.
   * @param {number} the w value for this v4.
   * @returns {v4}
   */
  public v4(x: number, y: number, z: number, w: number): v4 {
    let out: any = this.memory.v4()
    out[0] = x
    out[1] = y
    out[2] = z
    out[3] = z
    return out as v4
  }

  /**
   * creates a new m4 value.
   * @param {Array<number>} optional array of values to create this m4.
   * @returns {m4}
   */
  public m4(values?: Array<number>): m4 {
    let v: any = <any>this.memory.m4()
    if (values !== undefined) v.set(values)
    return v
  }

  /**
   * adds the left f32 value with the right.
   * @param {f32} the left value.
   * @param {f32} the right value.
   * @returns {f32}
   */
  public add_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = a[0] + b[0]
    return out as f32
  }

  /**
   * adds the left v2 value with the right.
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {v2}
   */
  public add_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out as v2
  }

  /**
   * adds the left v3 value with the right.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {v3}
   */
  public add_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    return out as v3
  }

  /**
   * adds the left v4 value with the right.
   * @param {v4} the left value.
   * @param {v4} the right value.
   * @returns {v4}
   */
  public add_v4_v4(a: v4, b: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    out[3] = a[3] + b[3]
    return out as v4
  }

  /**
   * adds the left m4 value with the right.
   * @param {m4} the left value.
   * @param {m4} the right value.
   * @returns {m4}
   */
  public add_m4_m4(a: m4, b: m4): m4 {
    let out: any = this.memory.m4()
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    out[3] = a[3] + b[3]
    out[4] = a[4] + b[4]
    out[5] = a[5] + b[5]
    out[6] = a[6] + b[6]
    out[7] = a[7] + b[7]
    out[8] = a[8] + b[8]
    out[9] = a[9] + b[9]
    out[10] = a[10] + b[10]
    out[11] = a[11] + b[11]
    out[12] = a[12] + b[12]
    out[13] = a[13] + b[13]
    out[14] = a[14] + b[14]
    out[15] = a[15] + b[15]
    return out as m4
  }

  /**
   * subtracts the left f32 value with the right.
   * @param {f32} the left value.
   * @param {f32} the right value.
   * @returns {f32}
   */
  public sub_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = a[0] - b[0]
    return out as f32
  }

  /**
   * subtracts the left v2 value with the right.
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {v2}
   */
  public sub_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out as v2
  }

  /**
   * subtracts the left v3 value with the right.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {v3}
   */
  public sub_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    return out as v3
  }

  /**
   * subtracts the left v4 value with the right.
   * @param {v4} the left value.
   * @param {v4} the right value.
   * @returns {v4}
   */
  public sub_v4_v4(a: v4, b: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    out[3] = a[3] - b[3]
    return out as v4
  }

  /**
   * subtracts the left m4 value with the right.
   * @param {m4} the left value.
   * @param {m4} the right value.
   * @returns {m4}
   */
  public sub_m4_m4(a: m4, b: m4): m4 {
    let out: any = this.memory.m4()
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    out[3] = a[3] - b[3]
    out[4] = a[4] - b[4]
    out[5] = a[5] - b[5]
    out[6] = a[6] - b[6]
    out[7] = a[7] - b[7]
    out[8] = a[8] - b[8]
    out[9] = a[9] - b[9]
    out[10] = a[10] - b[10]
    out[11] = a[11] - b[11]
    out[12] = a[12] - b[12]
    out[13] = a[13] - b[13]
    out[14] = a[14] - b[14]
    out[15] = a[15] - b[15]
    return out as m4
  }

  /**
   * multiplies the left f32 value with the right f32 value.
   * @param {f32} the left value.
   * @param {f32} the right value.
   * @returns {f32}
   */
  public mul_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = a[0] * b[0]
    return out as f32
  }

  /**
   * multiplies the left v2 value with the right f32 value.
   * @param {v2} the left value.
   * @param {f32} the right value.
   * @returns {v2}
   */
  public mul_v2_f32(a: v2, b: f32): v2 {
    let out: any = this.memory.v2()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[0]
    return out as v2
  }

  /**
   * multiplies the left v3 value with the right f32 value.
   * @param {v3} the left value.
   * @param {f32} the right value.
   * @returns {v3}
   */
  public mul_v3_f32(a: v3, b: f32): v3 {
    let out: any = this.memory.v3()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[0]
    out[2] = a[2] * b[0]
    return out as v3
  }

  /**
   * multiplies the left v4 value with the right f32 value.
   * @param {v4} the left value.
   * @param {f32} the right value.
   * @returns {v4}
   */
  public mul_v4_f32(a: v4, b: f32): v4 {
    let out: any = this.memory.v4()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[0]
    out[2] = a[2] * b[0]
    out[3] = a[3] * b[0]
    return out as v4
  }

  /**
   * multiplies the left v2 value with the right.
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {v2}
   */
  public mul_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out as v2
  }

  /**
   * multiplies the left v3 value with the right.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {v3}
   */
  public mul_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    out[2] = a[2] * b[2]
    return out as v3
  }

  /**
   * multiplies the left v3 value with the right.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {v3}
   */
  public mul_v4_v4(a: v4, b: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    out[2] = a[2] * b[2]
    out[3] = a[3] * b[3]
    return out as v4
  }

  /**
   * multiplies the left m4 value with the right.
   * @param {m4} the left value.
   * @param {m4} the right value.
   * @returns {m4}
   */
  public mul_m4_m4(a: m4, b: m4): m4 {
    let out: any = this.memory.m4()
    out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])) + (a[3] * b[12])
    out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])) + (a[3] * b[13])
    out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + (a[3] * b[14])
    out[3] = (((a[0] * b[3]) + (a[1] * b[7])) + (a[2] * b[11])) + (a[3] * b[15])
    out[4] = (((a[4] * b[0]) + (a[5] * b[4])) + (a[6] * b[8])) + (a[7] * b[12])
    out[5] = (((a[4] * b[1]) + (a[5] * b[5])) + (a[6] * b[9])) + (a[7] * b[13])
    out[6] = (((a[4] * b[2]) + (a[5] * b[6])) + (a[6] * b[10])) + (a[7] * b[14])
    out[7] = (((a[4] * b[3]) + (a[5] * b[7])) + (a[6] * b[11])) + (a[7] * b[15])
    out[8] = (((a[8] * b[0]) + (a[9] * b[4])) + (a[10] * b[8])) + (a[11] * b[12])
    out[9] = (((a[8] * b[1]) + (a[9] * b[5])) + (a[10] * b[9])) + (a[11] * b[13])
    out[10] = (((a[8] * b[2]) + (a[9] * b[6])) + (a[10] * b[10])) + (a[11] * b[14])
    out[11] = (((a[8] * b[3]) + (a[9] * b[7])) + (a[10] * b[11])) + (a[11] * b[15])
    out[12] = (((a[12] * b[0]) + (a[13] * b[4])) + (a[14] * b[8])) + (a[15] * b[12])
    out[13] = (((a[12] * b[1]) + (a[13] * b[5])) + (a[14] * b[9])) + (a[15] * b[13])
    out[14] = (((a[12] * b[2]) + (a[13] * b[6])) + (a[14] * b[10])) + (a[15] * b[14])
    out[15] = (((a[12] * b[3]) + (a[13] * b[7])) + (a[14] * b[11])) + (a[15] * b[15])
    return out as m4
  }

  /**
   * divides the left f32 value with the right.
   * @param {f32} the left value.
   * @param {f32} the right value.
   * @returns {f32}
   */
  public div_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = a[0] / b[0]
    return out as f32
  }

  /**
   * divides the left v2 value with the right.
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {v2}
   */
  public div_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out as v2
  }

  /**
   * divides the left v3 value with the right.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {v3}
   */
  public div_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    return out as v3
  }

  /**
   * divides the left v4 value with the right.
   * @param {v4} the left value.
   * @param {v4} the right value.
   * @returns {v4}
   */
  public div_v4_v4(a: v4, b: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    out[3] = a[3] / b[3]
    return out as v4
  }

  /**
   * divides the left m4 value with the right.
   * @param {m4} the left value.
   * @param {m4} the right value.
   * @returns {m4}
   */
  public div_m4_m4(a: m4, b: m4): m4 {
    let out: any = this.memory.m4()
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    out[3] = a[3] / b[3]
    out[4] = a[4] / b[4]
    out[5] = a[5] / b[5]
    out[6] = a[6] / b[6]
    out[7] = a[7] / b[7]
    out[8] = a[8] / b[8]
    out[9] = a[9] / b[9]
    out[10] = a[10] / b[10]
    out[11] = a[11] / b[11]
    out[12] = a[12] / b[12]
    out[13] = a[13] / b[13]
    out[14] = a[14] / b[14]
    out[15] = a[15] / b[15]
    return out as m4
  }

  /**
   * scales the left m4 by the given v3. 
   * @param {m4} the left value.
   * @param {v4} the right value.
   * @returns {m4}
   */
  public scale_m4_v3(m: m4, b: v3): m4 {
    let out: any = this.memory.m4()
    out[0] = b[0]
    out[1] = 0
    out[2] = 0
    out[3] = 0
    out[4] = 0
    out[5] = b[1]
    out[6] = 0
    out[7] = 0
    out[8] = 0
    out[9] = 0
    out[10] = b[2]
    out[11] = 0
    out[12] = 0
    out[13] = 0
    out[14] = 0
    out[15] = 1
    return out as m4
  }
  /**
   * computes the dot product between the given two vectors. 
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {f32}
   */
  public dot_v2_v2(a: v2, b: v2): f32 {
    let out: any = this.memory.f32()
    out[0] = (a[0] * b[0]) + (a[1] * b[1])
    return out as f32
  }

  /**
   * computes the dot product between the given two vectors. 
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {f32}
   */
  public dot_v3_v3(a: v3, b: v3): f32 {
    let out: any = this.memory.f32()
    out[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2])
    return out as f32
  }

  /**
   * computes the dot product between the given two vectors. 
   * @param {v4} the left value.
   * @param {v4} the right value.
   * @returns {f32}
   */
  public dot_v4_v4(a: v4, b: v4): f32 {
    let out: any = this.memory.f32()
    out[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]) + (a[3] * b[3])
    return out as f32
  }

  /**
   * computes the cross product for the given two vectors. 
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {f32}
   */
  public cross_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = (a[1] * b[2]) - (a[2] * b[1])
    out[1] = (a[2] * b[0]) - (a[0] * b[2])
    out[2] = (a[0] * b[1]) - (a[1] * b[0])
    return out as v3
  }

  /**
   * normalizes the given vector. 
   * @param {v2} the vector to normalize.
   * @returns {v2}
   */
  public norm_v2(a: v2): v2 {
    let out: any = this.memory.v2()
    let len = this.memory.f32()
    len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]))
    out[0] = a[0] * len[0]
    out[1] = a[1] * len[0]
    return out as v2
  }

  /**
   * normalizes the given vector. 
   * @param {v3} the vector to normalize.
   * @returns {v3}
   */
  public norm_v3(a: v3): v3 {
    let out: any = this.memory.v3()
    let len = this.memory.f32()
    len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]))
    out[0] = a[0] * len[0]
    out[1] = a[1] * len[0]
    out[2] = a[2] * len[0]
    return out as v3
  }

  /**
   * normalizes the given vector. 
   * @param {v4} the vector to normalize.
   * @returns {v4}
   */
  public norm_v4(a: v4): v4 {
    let out: any = this.memory.v4()
    let len = this.memory.f32()
    len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3]))
    out[0] = a[0] * len[0]
    out[1] = a[1] * len[0]
    out[2] = a[2] * len[0]
    out[3] = a[3] * len[0]
    return out as v4
  }

  /**
   * computes the magnitude of the given vector.
   * @param {v2} the vector.
   * @returns {f32}
   */
  public mag_v2(a: v2): f32 {
    let out: any = this.memory.f32()
    out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]))
    return out as f32
  }

  /**
   * computes the magnitude of the given vector.
   * @param {v3} the vector.
   * @returns {f32}
   */
  public mag_v3(a: v3): f32 {
    let out: any = this.memory.f32()
    out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]))
    return out as f32
  }

  /**
   * computes the magnitude of the given vector.
   * @param {v4} the vector.
   * @returns {f32}
   */
  public mag_v4(a: v4): f32 {
    let out: any = this.memory.f32()
    out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3]))
    return out as f32
  }

  /**
   * computes the magnitude squared of the given vector.
   * @param {v2} the vector.
   * @returns {f32}
   */
  public magsq_v2(a: v2): f32 {
    let out: any = this.memory.f32()
    out[0] = (a[0] * a[0]) + (a[1] * a[1])
    return out as f32
  }

  /**
   * computes the magnitude squared of the given vector.
   * @param {v3} the vector.
   * @returns {f32}
   */
  public magsq_v3(a: v3): f32 {
    let out: any = this.memory.f32()
    out[0] = (a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2])
    return out as f32
  }

  /**
   * computes the magnitude squared of the given vector.
   * @param {v4} the vector.
   * @returns {f32}
   */
  public magsq_v4(a: v4): f32 {
    let out: any = this.memory.f32()
    out[0] = (a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3])
    return out as f32
  }

  /**
   * computes the distance betwen the given values.
   * @param {f32} the left value.
   * @param {f32} the right value.
   * @returns {f32}
   */
  public dis_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = Math.abs(a[0] - b[0])
    return out as f32
  }

  /**
   * computes the distance betwen the given values.
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {f32}
   */
  public dis_v2_v2(a: v2, b: v2): f32 {
    let out: any = this.memory.f32()
    let t = this.memory.v2()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]))
    return out as f32
  }

  /**
   * computes the distance betwen the given values.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {f32}
   */
  public dis_v3_v3(a: v3, b: v3): f32 {
    let out: any = this.memory.f32()
    let t = this.memory.v3()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    t[2] = a[2] - b[2]
    out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]))
    return out as f32
  }

  /**
   * computes the distance betwen the given values.
   * @param {v4} the left value.
   * @param {v4} the right value.
   * @returns {f32}
   */
  public dis_v4_v4(a: v4, b: v4): f32 {
    let out: any = this.memory.f32()
    let t = this.memory.v4()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    t[2] = a[2] - b[2]
    t[3] = a[3] - b[3]
    out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]) + (t[3] * t[3]))
    return out as f32
  }

  /**
   * computes the distance squared betwen the given values.
   * @param {f32} the left value.
   * @param {f32} the right value.
   * @returns {f32}
   */
  public dissq_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = Math.abs(a[0] - b[0])
    return out as f32
  }

  /**
   * computes the distance squared betwen the given values.
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {f32}
   */
  public dissq_v2_v2(a: v2, b: v2): f32 {
    let out: any = this.memory.f32()
    let t = this.memory.v2()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    out[0] = (t[0] * t[0]) + (t[1] * t[1])
    return out as f32
  }

  /**
   * computes the distance squared betwen the given values.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {f32}
   */
  public dissq_v3_v3(a: v3, b: v3): f32 {
    let out: any = this.memory.f32()
    let t = this.memory.v3()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    t[2] = a[2] - b[2]
    out[0] = (t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2])
    return out as f32
  }

  /**
   * computes the distance squared betwen the given values.
   * @param {v4} the left value.
   * @param {v4} the right value.
   * @returns {f32}
   */
  public dissq_v4_v4(a: v4, b: v4): f32 {
    let out: any = this.memory.f32()
    let t = this.memory.v4()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    t[2] = a[2] - b[2]
    t[3] = a[3] - b[3]
    out[0] = (t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]) + (t[3] * t[3])
    return out as f32
  }

  /**
   * reflects the left vector about the right.
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {v2}
   */
  public reflect_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.memory.v2()
    let dot = this.memory.f32()
    dot[0] = (a[0] * b[0]) + (a[1] * b[1])
    out[0] = a[0] - ((2.0 * dot[0]) * b[0])
    out[1] = a[1] - ((2.0 * dot[0]) * b[1])
    return out as v2
  }

  /**
   * reflects the left vector about the right.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {v3}
   */
  public reflect_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.memory.v3()
    let dot = this.memory.f32()
    dot[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2])
    out[0] = a[0] - ((2.0 * dot[0]) * b[0])
    out[1] = a[1] - ((2.0 * dot[0]) * b[1])
    out[2] = a[2] - ((2.0 * dot[0]) * b[2])
    return out as v3
  }

  /**
   * negates the given value.
   * @param {f32} the value to negate.
   * @returns {f32}
   */
  public negate_f32(a: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = -a[0]
    return out as f32
  }

  /**
   * negates the given value.
   * @param {v2} the value to negate.
   * @returns {v2}
   */
  public negate_v2(a: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = -a[0]
    out[1] = -a[1]
    return out as v2
  }

  /**
   * negates the given value.
   * @param {v3} the value to negate.
   * @returns {v3}
   */
  public negate_v3(a: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = -a[0]
    out[1] = -a[1]
    out[2] = -a[2]
    return out as v3
  }

  /**
   * negates the given value.
   * @param {v4} the value to negate.
   * @returns {v4}
   */
  public negate_v4(a: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = -a[0]
    out[1] = -a[1]
    out[2] = -a[2]
    out[3] = -a[3]
    return out as v4
  }

  /**
   * returns the absolute values for the given value.
   * @param {f32} 
   * @returns {f32}
   */
  public abs_f32(a: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = Math.abs(a[0])
    return out as f32
  }

  /**
   * returns the absolute values for the given vector.
   * @param {v2} 
   * @returns {v2}
   */
  public abs_v2(a: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = Math.abs(a[0])
    out[1] = Math.abs(a[1])
    return out as v2
  }

  /**
   * returns the absolute values for the given vector.
   * @param {v3} 
   * @returns {v3}
   */
  public abs_v3(a: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = Math.abs(a[0])
    out[1] = Math.abs(a[1])
    out[2] = Math.abs(a[2])
    return out as v3
  }

  /**
   * returns the absolute values for the given vector.
   * @param {v4} 
   * @returns {v4}
   */
  public abs_v4(a: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = Math.abs(a[0])
    out[1] = Math.abs(a[1])
    out[2] = Math.abs(a[2])
    out[3] = Math.abs(a[3])
    return out as v4
  }

  /**
   * returns the minimum of the given two values.
   * @param {f32} the left value.
   * @param {f32} the right value. 
   * @returns {f32}
   */
  public min_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = (a[0] < b[0]) ? a[0] : b[0]
    return out as f32
  }

  /**
   * returns the minimum of the given two values.
   * @param {v2} the left value.
   * @param {v2} the right value. 
   * @returns {v2}
   */
  public min_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = (a[0] < b[0]) ? a[0] : b[0]
    out[1] = (a[1] < b[1]) ? a[1] : b[1]
    return out as v2
  }

  /**
   * returns the minimum of the given two values.
   * @param {v3} the left value.
   * @param {v3} the right value. 
   * @returns {v3}
   */
  public min_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = (a[0] < b[0]) ? a[0] : b[0]
    out[1] = (a[1] < b[1]) ? a[1] : b[1]
    out[2] = (a[2] < b[2]) ? a[2] : b[2]
    return out as v3
  }

  /**
   * returns the minimum of the given two values.
   * @param {v4} the left value.
   * @param {v4} the right value. 
   * @returns {v4}
   */
  public min_v4_v4(a: v4, b: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = (a[0] < b[0]) ? a[0] : b[0]
    out[1] = (a[1] < b[1]) ? a[1] : b[1]
    out[2] = (a[2] < b[2]) ? a[2] : b[2]
    out[3] = (a[3] < b[3]) ? a[3] : b[3]
    return out as v4
  }

  /**
   * returns the maximum of the given two values.
   * @param {f32} the left value.
   * @param {f32} the right value. 
   * @returns {f32}
   */
  public max_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = (a[0] > b[0]) ? a[0] : b[0]
    return out as f32
  }

  /**
   * returns the maximum of the given two values.
   * @param {v2} the left value.
   * @param {v2} the right value. 
   * @returns {v2}
   */
  public max_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = (a[0] > b[0]) ? a[0] : b[0]
    out[1] = (a[1] > b[1]) ? a[1] : b[1]
    return out as v2
  }

  /**
   * returns the maximum of the given two values.
   * @param {v3} the left value.
   * @param {v3} the right value. 
   * @returns {v3}
   */
  public max_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = (a[0] > b[0]) ? a[0] : b[0]
    out[1] = (a[1] > b[1]) ? a[1] : b[1]
    out[2] = (a[2] > b[2]) ? a[2] : b[2]
    return out as v3
  }

  /**
   * returns the maximum of the given two values.
   * @param {v4} the left value.
   * @param {v4} the right value. 
   * @returns {v4}
   */
  public max_v4_v4(a: v4, b: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = (a[0] > b[0]) ? a[0] : b[0]
    out[1] = (a[1] > b[1]) ? a[1] : b[1]
    out[2] = (a[2] > b[2]) ? a[2] : b[2]
    out[3] = (a[3] > b[3]) ? a[3] : b[3]
    return out as v4
  }

  /**
   * clamps the given value within the given min and max range.
   * @param {f32} the value.
   * @param {f32} the min value. 
   * @param {f32} the max value. 
   * @returns {f32}
   */
  public clamp_f32_f32_f32(a: f32, min: f32, max: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = a[0]
    out[0] = (out[0] > max[0]) ? max[0] : out[0]
    out[0] = (out[0] < min[0]) ? min[0] : out[0]
    return out as f32
  }

  /**
   * clamps the given value within the given min and max range.
   * @param {v2} the value.
   * @param {v2} the min value. 
   * @param {v2} the max value. 
   * @returns {v2}
   */
  public clamp_v2_v2_v2(a: v2, min: v2, max: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = a[0]
    out[1] = a[1]
    out[0] = (out[0] > max[0]) ? max[0] : out[0]
    out[0] = (out[0] < min[0]) ? min[0] : out[0]
    out[1] = (out[1] > max[1]) ? max[1] : out[1]
    out[1] = (out[1] < min[1]) ? min[1] : out[1]
    return out as v2
  }

  /**
   * clamps the given value within the given min and max range.
   * @param {v3} the value.
   * @param {v3} the min value. 
   * @param {v3} the max value. 
   * @returns {v3}
   */
  public clamp_v3_v3_v3(a: v3, min: v3, max: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    out[0] = (out[0] > max[0]) ? max[0] : out[0]
    out[0] = (out[0] < min[0]) ? min[0] : out[0]
    out[1] = (out[1] > max[1]) ? max[1] : out[1]
    out[1] = (out[1] < min[1]) ? min[1] : out[1]
    out[2] = (out[2] > max[2]) ? max[2] : out[2]
    out[2] = (out[2] < min[2]) ? min[2] : out[2]
    return out as v3
  }

  /**
   * clamps the given value within the given min and max range.
   * @param {v4} the value.
   * @param {v4} the min value. 
   * @param {v4} the max value. 
   * @returns {v4}
   */
  public clamp_v4_v4_v4(a: v4, min: v4, max: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    out[3] = a[3]
    out[0] = (out[0] > max[0]) ? max[0] : out[0]
    out[0] = (out[0] < min[0]) ? min[0] : out[0]
    out[1] = (out[1] > max[1]) ? max[1] : out[1]
    out[1] = (out[1] < min[1]) ? min[1] : out[1]
    out[2] = (out[2] > max[2]) ? max[2] : out[2]
    out[2] = (out[2] < min[2]) ? min[2] : out[2]
    out[3] = (out[3] > max[3]) ? max[3] : out[3]
    out[3] = (out[3] < min[3]) ? min[3] : out[3]
    return out as v4
  }

  /**
   * linearly interpolates the between the source and destination values by the given amount.
   * @param {f32} the source value.
   * @param {f32} the destination value.
   * @param {f32} the amount.
   * @returns {f32}
   */
  public lerp_f32_f32_f32(a: f32, b: f32, c: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    return out as f32
  }

  /**
   * linearly interpolates the between the source and destination values by the given amount.
   * @param {v2} the source value.
   * @param {v2} the destination value.
   * @param {f32} the amount.
   * @returns {v2}
   */
  public lerp_v2_v2_f32(a: v2, b: v2, c: f32): v2 {
    let out: any = this.memory.v2()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    out[1] = a[1] + ((b[1] - a[1]) * c[0])
    return out as v2
  }

  /**
   * linearly interpolates the between the source and destination values by the given amount.
   * @param {v3} the source value.
   * @param {v3} the destination value.
   * @param {f32} the amount.
   * @returns {v3}
   */
  public lerp_v3_v3_f32(a: v3, b: v3, c: f32): v3 {
    let out: any = this.memory.v3()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    out[1] = a[1] + ((b[1] - a[1]) * c[0])
    out[2] = a[2] + ((b[2] - a[2]) * c[0])
    return out as v3
  }

  /**
   * linearly interpolates the between the source and destination values by the given amount.
   * @param {v4} the source value.
   * @param {v4} the destination value.
   * @param {f32} the amount.
   * @returns {v4}
   */
  public lerp_v4_v4_f32(a: v4, b: v4, c: f32): v4 {
    let out: any = this.memory.v4()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    out[1] = a[1] + ((b[1] - a[1]) * c[0])
    out[2] = a[2] + ((b[2] - a[2]) * c[0])
    out[3] = a[3] + ((b[3] - a[3]) * c[0])
    return out as v4
  }

  /**
   * linearly interpolates the between the source and destination values by the given amount.
   * @param {m4} the source value.
   * @param {m4} the destination value.
   * @param {f32} the amount.
   * @returns {m4}
   */
  public lerp_m4_m4_f32(a: m4, b: m4, c: f32): m4 {
    let out: any = this.memory.m4()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    out[1] = a[1] + ((b[1] - a[1]) * c[0])
    out[2] = a[2] + ((b[2] - a[2]) * c[0])
    out[3] = a[3] + ((b[3] - a[3]) * c[0])
    out[4] = a[4] + ((b[4] - a[4]) * c[0])
    out[5] = a[5] + ((b[5] - a[5]) * c[0])
    out[6] = a[6] + ((b[6] - a[6]) * c[0])
    out[7] = a[7] + ((b[7] - a[7]) * c[0])
    out[8] = a[8] + ((b[8] - a[8]) * c[0])
    out[9] = a[9] + ((b[9] - a[9]) * c[0])
    out[10] = a[10] + ((b[10] - a[10]) * c[0])
    out[11] = a[11] + ((b[11] - a[11]) * c[0])
    out[12] = a[12] + ((b[12] - a[12]) * c[0])
    out[13] = a[13] + ((b[13] - a[13]) * c[0])
    out[14] = a[14] + ((b[14] - a[14]) * c[0])
    out[15] = a[15] + ((b[15] - a[15]) * c[0])
    return out as m4
  }

  /**
   * transforms the given value by the given matrix.
   * @param {v2} the value to transform.
   * @param {m4} the matrix.
   * @returns {v2}
   */
  public transform_v2_m4(a: v2, b: m4): v2 {
    let out: any = this.memory.v2()
    out[0] = ((a[0] * b[0]) + (a[1] * b[4])) + b[12]
    out[1] = ((a[0] * b[1]) + (a[1] * b[5])) + b[13]
    return out as v2
  }

  /**
   * transforms the given value by the given matrix.
   * @param {v3} the value to transform.
   * @param {m4} the matrix.
   * @returns {v3}
   */
  public transform_v3_m4(a: v3, b: m4): v3 {
    let out: any = this.memory.v3()
    out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])) + b[12]
    out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])) + b[13]
    out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + b[14]
    return out as v3
  }

  /**
   * transforms the given value by the given matrix.
   * @param {v4} the value to transform.
   * @param {m4} the matrix.
   * @returns {v4}
   */
  public transform_v4_m4(a: v4, b: m4): v4 {
    let out: any = this.memory.v4()
    out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])) + (a[3] * b[12])
    out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])) + (a[3] * b[13])
    out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + (a[3] * b[14])
    out[3] = (((a[0] * b[3]) + (a[1] * b[7])) + (a[2] * b[11])) + (a[3] * b[15])
    return out as v4
  }

  /**
  * transforms the given value by the given matrix 3x3.
  * @param {v2} the value to transform.
  * @param {m4} the matrix.
  * @returns {v2}
  */
  public transform3_v2_m4(a: v2, b: m4): v2 {
    let out: any = this.memory.v2()
    out[0] = (a[0] * b[0]) + (a[1] * b[4])
    out[1] = (a[0] * b[1]) + (a[1] * b[5])
    return out as v2
  }

  /**
   * transforms the given value by the given matrix 3x3.
   * @param {v3} the value to transform.
   * @param {m4} the matrix.
   * @returns {v3}
   */
  public transform3_v3_m4(a: v3, b: m4): v3 {
    let out: any = this.memory.v3()
    out[0] = ((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])
    out[1] = ((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])
    out[2] = ((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])
    return out as v3
  }

  /**
   * transforms the given value by the given matrix 3x3.
   * @param {v4} the value to transform.
   * @param {m4} the matrix.
   * @returns {v4}
   */
  public transform3_v4_m4(a: v4, b: m4): v4 {
    let out: any = this.memory.v4()
    out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])) + (a[3] * b[12])
    out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])) + (a[3] * b[13])
    out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + (a[3] * b[14])
    out[3] = (((a[0] * b[3]) + (a[1] * b[7])) + (a[2] * b[11])) + (a[3] * b[15])
    return out as v4
  }

  /**
   * returns the inverse of the given matrix.
   * @param {m4} the matrix.
   * @returns {m4}
   */
  public invert_m4(a: m4): m4 {
    let out: any = this.memory.m4()
    let n0 = a[0]
    let n1 = a[1]
    let n2 = a[2]
    let n3 = a[3]
    let n4 = a[4]
    let n5 = a[5]
    let n6 = a[6]
    let n7 = a[7]
    let n8 = a[8]
    let n9 = a[9]
    let n10 = a[10]
    let n11 = a[11]
    let n12 = a[12]
    let n13 = a[13]
    let n14 = a[14]
    let n15 = a[15]
    let n16 = (n10 * n15) - (n11 * n14);
    let n17 = (n9 * n15) - (n11 * n13);
    let n18 = (n9 * n14) - (n10 * n13);
    let n19 = (n8 * n15) - (n11 * n12);
    let n20 = (n8 * n14) - (n10 * n12);
    let n21 = (n8 * n13) - (n9 * n12);
    let n22 = ((n5 * n16) - (n6 * n17)) + (n7 * n18)
    let n23 = -(((n4 * n16) - (n6 * n19)) + (n7 * n20))
    let n24 = ((n4 * n17) - (n5 * n19)) + (n7 * n21)
    let n25 = -(((n4 * n18) - (n5 * n20)) + (n6 * n21))
    let n26 = 1.0 / ((((n0 * n22) + (n1 * n23)) + (n2 * n24)) + (n3 * n25))
    out[0] = n22 * n26
    out[4] = n23 * n26
    out[8] = n24 * n26
    out[12] = n25 * n26
    out[1] = -(((n1 * n16) - (n2 * n17)) + (n3 * n18)) * n26
    out[5] = (((n0 * n16) - (n2 * n19)) + (n3 * n20)) * n26
    out[9] = -(((n0 * n17) - (n1 * n19)) + (n3 * n21)) * n26
    out[13] = (((n0 * n18) - (n1 * n20)) + (n2 * n21)) * n26
    let n27 = (n6 * n15) - (n7 * n14)
    let n28 = (n5 * n15) - (n7 * n13)
    let n29 = (n5 * n14) - (n6 * n13)
    let n30 = (n4 * n15) - (n7 * n12)
    let n32 = (n4 * n14) - (n6 * n12)
    let n33 = (n4 * n13) - (n5 * n12)
    out[2] = (((n1 * n27) - (n2 * n28)) + (n3 * n29)) * n26
    out[6] = -(((n0 * n27) - (n2 * n30)) + (n3 * n32)) * n26
    out[10] = (((n0 * n28) - (n1 * n30)) + (n3 * n33)) * n26
    out[14] = -(((n0 * n29) - (n1 * n32)) + (n2 * n33)) * n26
    let n34 = (n6 * n11) - (n7 * n10)
    let n35 = (n5 * n11) - (n7 * n9)
    let n36 = (n5 * n10) - (n6 * n9)
    let n37 = (n4 * n11) - (n7 * n8)
    let n38 = (n4 * n10) - (n6 * n8)
    let n39 = (n4 * n9) - (n5 * n8)
    out[3] = -(((n1 * n34) - (n2 * n35)) + (n3 * n36)) * n26
    out[7] = (((n0 * n34) - (n2 * n37)) + (n3 * n38)) * n26
    out[11] = -(((n0 * n35) - (n1 * n37)) + (n3 * n39)) * n26
    out[15] = (((n0 * n36) - (n1 * n38)) + (n2 * n39)) * n26
    return out as m4
  }

  /**
   * returns the determinant of the given matrix.
   * @param {m4} the matrix.
   * @returns {f32}
   */
  public determinant_m4(a: m4): f32 {
    let out: any = this.memory.f32()
    let n0 = a[0]
    let n1 = a[1]
    let n2 = a[2]
    let n3 = a[3]
    let n4 = a[4]
    let n5 = a[5]
    let n6 = a[6]
    let n7 = a[7]
    let n8 = a[8]
    let n9 = a[9]
    let n10 = a[10]
    let n11 = a[11]
    let n12 = a[12]
    let n13 = a[13]
    let n14 = a[14]
    let n15 = a[15]
    let n16 = (n10 * n15) - (n11 * n14)
    let n17 = (n9 * n15) - (n11 * n13)
    let n18 = (n9 * n14) - (n10 * n13)
    let n19 = (n8 * n15) - (n11 * n12)
    let n20 = (n8 * n14) - (n10 * n12)
    let n21 = (n8 * n13) - (n9 * n12)
    out[0] = ((((n0 * (((n5 * n16) - (n6 * n17)) + (n7 * n18))) -
      (n1 * (((n4 * n16) - (n6 * n19)) + (n7 * n20)))) + (n2 * (((n4 * n17) -
        (n5 * n19)) + (n7 * n21)))) - (n3 * (((n4 * n18) - (n5 * n20)) + (n6 * n21))))
    return out as f32
  }

  /**
   * returns the transpose of the given matrix.
   * @param {m4} the matrix.
   * @returns {m4}
   */
  public transpose_m4(a: m4): m4 {
    let out: any = this.memory.m4()
    out[0] = a[0]
    out[1] = a[4]
    out[2] = a[8]
    out[3] = a[12]
    out[4] = a[1]
    out[5] = a[5]
    out[6] = a[9]
    out[7] = a[13]
    out[8] = a[2]
    out[9] = a[6]
    out[10] = a[10]
    out[11] = a[14]
    out[12] = a[3]
    out[13] = a[7]
    out[14] = a[11]
    out[15] = a[15]
    return out
  }

  /**
   * creates an identity matrix.
   * @returns {m4}
   */
  public m4_identity(): m4 {
    let out: any = this.memory.m4()
    out[0] = 1
    out[1] = 0
    out[2] = 0
    out[3] = 0
    out[4] = 0
    out[5] = 1
    out[6] = 0
    out[7] = 0
    out[8] = 0
    out[9] = 0
    out[10] = 1
    out[11] = 0
    out[12] = 0
    out[13] = 0
    out[14] = 0
    out[15] = 1
    return out as m4
  }

  /**
   * creates an orthograpic matrix.
   * @param {number} the width.
   * @param {number} the height.
   * @param {number} the near plane.
   * @param {number} the far plane.
   * @returns {m4}
   */
  public m4_orthographic(width: number, height: number, near: number, far: number): m4 {
    let m0 = this.m4_identity()
    m0[0] = 2.0 / width
    m0[1] = m0[2] = m0[3] = 0.0
    m0[5] = 2.0 / height
    m0[4] = m0[6] = m0[7] = 0.0
    m0[10] = 1.0 / (near - far)
    m0[8] = m0[9] = m0[11] = 0.0
    m0[12] = m0[13] = 0.0
    m0[14] = near / (near - far)
    m0[15] = 1.0
    return m0
  }

  /**
   * creates an perspective matrix.
   * @param {number} the field of view in radians.
   * @param {number} the aspect ratio.
   * @param {number} the near plane.
   * @param {number} the far plane.
   * @returns {m4}
   */
  public m4_perspective(field: number, aspect: number, near: number, far: number): m4 {
    let n0 = 1.0 / Math.tan(field * 0.5)
    let n1 = n0 / aspect
    let m = this.m4_identity()
    m[0] = n1
    m[1] = m[2] = m[3] = 0.0
    m[5] = n0
    m[4] = m[6] = m[7] = 0.0
    m[8] = m[9] = 0.0
    m[10] = far / (near - far)
    m[11] = -1.0
    m[12] = m[13] = m[15] = 0.0
    m[14] = (near * far) / (near - far)
    return m
  }

  /**
   * creates a X rotation matrix.
   * @param {number} the rotation in radians.
   * @returns {m4}
   */
  public m4_rotationx(radians: f32): m4 {
    let out: any = this.memory.m4()
    let t = this.memory.v2()
    t[0] = Math.cos(radians[0])
    t[1] = Math.sin(radians[0])
    out[0] = 1
    out[1] = 0
    out[2] = 0
    out[3] = 0
    out[4] = 0
    out[5] = t[0]
    out[6] = t[1]
    out[7] = 0
    out[8] = 0
    out[9] = -t[1]
    out[10] = t[0]
    out[11] = 0
    out[12] = 0
    out[13] = 0
    out[14] = 0
    out[15] = 1
    return out as m4
  }

  /**
   * creates a Y rotation matrix.
   * @param {number} the rotation in radians.
   * @returns {m4}
   */
  public m4_rotationy(radians: f32): m4 {
    let out: any = this.memory.m4()
    let t = this.memory.v2()
    t[0] = Math.cos(radians[0])
    t[1] = Math.sin(radians[0])
    out[0] = t[0]
    out[1] = 0.0
    out[2] = -t[1]
    out[3] = 0.0
    out[4] = 0.0
    out[5] = 1.0
    out[6] = 0.0
    out[7] = 0.0
    out[8] = t[1]
    out[9] = 0.0
    out[10] = t[0]
    out[11] = 0.0
    out[12] = 0.0
    out[13] = 0.0
    out[14] = 0.0
    out[15] = 1.0
    return out as m4
  }

  /**
   * creates a Z rotation matrix.
   * @param {number} the rotation in radians.
   * @returns {m4}
   */
  public m4_rotationz(radians: f32): m4 {
    let out: any = this.memory.m4()
    let t = this.memory.v2()
    t[0] = Math.cos(radians[0])
    t[1] = Math.sin(radians[0])
    out[0] = t[0]
    out[1] = t[1]
    out[2] = 0.0
    out[3] = 0.0
    out[4] = -t[1]
    out[5] = t[0]
    out[6] = 0.0
    out[7] = 0.0
    out[8] = 0.0
    out[9] = 0.0
    out[10] = 1.0
    out[11] = 0.0
    out[12] = 0.0
    out[13] = 0.0
    out[14] = 0.0
    out[15] = 1.0
    return out as m4
  }

  /**
   * creates a view matrix from the given vectors.
   * @param {v3} the position of this view matrix.
   * @param {v3} the target of this view matrix.
   * @param {v3} the up vector of this view matrix.
   * @returns {m4}
   */
  public m4_lookat(position: v3, target: v3, up: v3): m4 {
    let out: any = this.memory.m4()
    let d0 = this.sub_v3_v3(position, target)
    let v0 = this.norm_v3(d0)
    let d1 = this.cross_v3_v3(up, v0)
    let v1 = this.norm_v3(d1)
    let v2 = this.cross_v3_v3(v0, v1)
    out[0] = v1[0]
    out[1] = v2[0]
    out[2] = v0[0]
    out[3] = 0.0
    out[4] = v1[1]
    out[5] = v2[1]
    out[6] = v0[1]
    out[7] = 0.0
    out[8] = v1[2]
    out[9] = v2[2]
    out[10] = v0[2]
    out[11] = 0.0
    out[12] = -this.dot_v3_v3(v1, position)
    out[13] = -this.dot_v3_v3(v2, position)
    out[14] = -this.dot_v3_v3(v0, position)
    out[15] = 1.0
    return out as m4
  }

  /**
   * creates a scaling matrix with the given vector.
   * @param {v3} the scaling vector.
   * @returns {m4}
   */
  public m4_scale(a: v3): m4 {
    let out: any = this.memory.m4()
    out[0] = a[0]
    out[1] = 0
    out[2] = 0
    out[3] = 0
    out[4] = 0
    out[5] = a[1]
    out[6] = 0
    out[7] = 0
    out[8] = 0
    out[9] = 0
    out[10] = a[2]
    out[11] = 0
    out[12] = 0
    out[13] = 0
    out[14] = 0
    out[15] = 1
    return out as m4
  }

  /**
   * creates a translation matrix with the given vector.
   * @param {v3} the translation vector.
   * @returns {m4}
   */
  public m4_translation(a: v3): m4 {
    let out: any = this.memory.m4()
    out[0] = 1.0
    out[1] = 0.0
    out[2] = 0.0
    out[3] = 0.0
    out[4] = 0.0
    out[5] = 1.0
    out[6] = 0.0
    out[7] = 0.0
    out[8] = 0.0
    out[9] = 0.0
    out[10] = 1.0
    out[11] = 0.0
    out[12] = a[0]
    out[13] = a[1]
    out[14] = a[2]
    out[15] = 1.0
    return out as m4
  }

  /**
   * creates a clone of the given value.
   * @param {f32} the value to clone.
   * @returns {f32}
   */
  public clone_f32(a: f32): f32 {
    let out: any = this.memory.f32()
    out[0] = a[0]
    return out as f32
  }

  /**
   * creates a clone of the given value.
   * @param {v2} the value to clone.
   * @returns {v2}
   */
  public clone_v2(a: v2): v2 {
    let out: any = this.memory.v2()
    out[0] = a[0]
    out[1] = a[1]
    return out as v2
  }

  /**
   * creates a clone of the given value.
   * @param {v3} the value to clone.
   * @returns {v3}
   */
  public clone_v3(a: v3): v3 {
    let out: any = this.memory.v3()
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out as v3
  }

  /**
   * creates a clone of the given value.
   * @param {v4} the value to clone.
   * @returns {v4}
   */
  public clone_v4(a: v4): v4 {
    let out: any = this.memory.v4()
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    out[3] = a[3]
    return out as v4
  }

  /**
   * creates a clone of the given value.
   * @param {m4} the value to clone.
   * @returns {m4}
   */
  public clone_m4(a: m4): m4 {
    let out: any = this.memory.m4()
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    out[3] = a[3]
    out[4] = a[4]
    out[5] = a[5]
    out[6] = a[6]
    out[7] = a[7]
    out[8] = a[8]
    out[9] = a[9]
    out[10] = a[10]
    out[11] = a[11]
    out[12] = a[12]
    out[13] = a[13]
    out[14] = a[14]
    out[15] = a[15]
    return out as m4
  }

  /**
   * compares the left value against the right for equality.
   * @param {f32} the left value.
   * @param {f32} the right value.
   * @returns {boolean}
   */
  public equals_f32_f32(a: f32, b: f32): boolean {
    return (
      a[0] === b[0]
    )
  }

  /**
   * compares the left value against the right for equality.
   * @param {v2} the left value.
   * @param {v2} the right value.
   * @returns {boolean}
   */
  public equals_v2_v2(a: v2, b: v2): boolean {
    return (
      a[0] === b[0] &&
      a[1] === b[1]
    )
  }

  /**
   * compares the left value against the right for equality.
   * @param {v3} the left value.
   * @param {v3} the right value.
   * @returns {boolean}
   */
  public equals_v3_v3(a: v3, b: v3): boolean {
    return (
      a[0] === b[0] &&
      a[1] === b[1] &&
      a[2] === b[2]
    )
  }

  /**
   * compares the left value against the right for equality.
   * @param {v4} the left value.
   * @param {v4} the right value.
   * @returns {boolean}
   */
  public equals_v4_v4(a: v4, b: v4): boolean {
    return (
      a[0] === b[0] &&
      a[1] === b[1] &&
      a[2] === b[2] &&
      a[3] === b[3]
    )
  }

  /**
   * compares the left value against the right for equality.
   * @param {m4} the left value.
   * @param {m4} the right value.
   * @returns {boolean}
   */
  public equals_m4_m4(a: m4, b: m4): boolean {
    return (
      a[0] === b[0] &&
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
      a[15] === b[15]
    )
  }

  /**
   * writes the given value to the given output array.
   * @param {f32} the value to store.
   * @param {Float32Array} the output value.
   * @returns {void}
   */
  public store_f32(a: f32, out: Float32Array): void {
    let v = <any>a as Float32Array
    if (v.length !== out.length) throw Error("store_f32: buffer size mismatch")
    out.set(v)
  }

  /**
   * writes the given value to the given output array.
   * @param {v2} the value to store.
   * @param {Float32Array} the output value.
   * @returns {void}
   */
  public store_v2(a: v2, out: Float32Array): void {
    let v = <any>a as Float32Array
    if (v.length !== out.length) throw Error("store_v2: buffer size mismatch")
    out.set(v)
  }

  /**
   * writes the given value to the given output array.
   * @param {v3} the value to store.
   * @param {Float32Array} the output value.
   * @returns {void}
   */
  public store_v3(a: v3, out: Float32Array): void {
    let v = <any>a as Float32Array
    if (v.length !== out.length) throw Error("store_v3: buffer size mismatch")
    out.set(v)
  }

  /**
   * writes the given value to the given output array.
   * @param {v4} the value to store.
   * @param {Float32Array} the output value.
   * @returns {void}
   */
  public store_v4(a: v4, out: Float32Array): void {
    let v = <any>a as Float32Array
    if (v.length !== out.length) throw Error("store_v4: buffer size mismatch")
    out.set(v)
  }

  /**
   * writes the given value to the given output array.
   * @param {m4} the value to store.
   * @param {Float32Array} the output value.
   * @returns {void}
   */
  public store_m4(a: m4, out: Float32Array): void {
    let v = <any>a as Float32Array
    if (v.length !== out.length) throw Error("store_m4: buffer size mismatch")
    out.set(v)
  }

  /**
   * returns a string representation of the given value.
   * @param {f32} the value to inspect.
   * @returns {string}
   */
  public inspect_f32(a: f32): string {
    return `[${a[0]}]`
  }

  /**
   * returns a string representation of the given value.
   * @param {v2} the value to inspect.
   * @returns {string}
   */
  public inspect_v2(a: v2): string {
    return `[${a[0]}, ${a[1]}]`
  }

  /**
   * returns a string representation of the given value.
   * @param {v3} the value to inspect.
   * @returns {string}
   */
  public inspect_v3(a: v3): string {
    return `[${a[0]}, ${a[1]}, ${a[2]}]`
  }

  /**
   * returns a string representation of the given value.
   * @param {v4} the value to inspect.
   * @returns {string}
   */
  public inspect_v4(a: v4): string {
    return `[${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}]`
  }

  /**
   * returns a string representation of the given value.
   * @param {m4} the value to inspect.
   * @returns {string}
   */
  public inspect_m4(a: m4): string {
    return `[${a[0]}, ${a[1]}, ${a[2]}, ${a[3]},\n ${a[4]}, ${a[5]}, ${a[6]}, ${a[7]},\n ${a[8]}, ${a[9]}, ${a[10]}, ${a[11]},\n ${a[12]}, ${a[13]}, ${a[14]}, ${a[15]}]`
  }
}
