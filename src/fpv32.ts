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
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/

export interface f32 {
  __f32: boolean
  [index: number]: number
  add        (other: f32): f32
  sub        (other: f32): f32
  mul        (other: f32): f32
  div        (other: f32): f32
  scale      (other: f32) : f32
  negate     (): f32
  distance   (other: f32): f32
  distancesq (other: f32): f32
  abs        (): f32
  min        (other: f32): f32
  max        (other: f32): f32
  clamp      (min: f32, max: f32): f32
  lerp       (other: f32, amount: f32): f32
  clone      (): f32
  equals     (other: f32): boolean
  inspect    (): string
  store      (out: Float32Array) : void
}

export interface v2  {
  __v2: boolean
  [index: number]: number
  add       (other: v2) : v2
  sub       (other: v2) : v2
  mul       (other: v2) : v2
  div       (other: v2) : v2
  scale     (other: f32): v2
  dot       (other: v2) : f32
  normalize (): v2
  mag       (): f32
  magsq     (): f32
  reflect   (other: v2): v2
  negate    (): v2
  distance  (other: v2): f32
  distancesq(other: v2): f32
  abs       (): v2
  min       (other: v2): v2
  max       (other: v2): v2
  clamp     (min: v2, max: v2): v2
  lerp      (other: v2, amount: f32): v2
  transform (matrix: m4): v2
  transform3(matrix: m4): v2
  clone     (): v2
  equals    (other: v2): boolean
  inspect   (): string 
  store     (out: Float32Array) : void 
}

export interface v3  {
  __v3: boolean
  [index: number]: number
  add       (other: v3) : v3
  sub       (other: v3) : v3
  mul       (other: v3) : v3
  div       (other: v3) : v3
  scale     (other: f32): v3
  dot       (other: v3) : f32
  cross     (other: v3) : v3
  normalize (): v3
  mag       (): f32
  magsq     (): f32
  reflect   (other: v3): v3
  negate    (): v3
  distance  (other: v3): f32
  distancesq(other: v3): f32
  abs       (): v3
  min       (other: v3): v3
  max       (other: v3): v3
  clamp     (min: v3, max: v3): v3
  lerp      (other: v3, amount: f32): v3
  transform (matrix: m4): v3
  transform3(matrix: m4): v3
  clone     (): v3
  equals    (other: v3): boolean
  inspect   (): string  
  store     (out: Float32Array) : void
}

export interface v4 {
  __v4: boolean
  [index: number]: number
  add        (other: v4) : v4
  sub        (other: v4) : v4
  mul        (other: v4) : v4
  div        (other: v4) : v4
  scale      (other: f32): v4
  dot        (other: v4) : f32
  normalize  (): v4
  mag        (): f32
  magsq      (): f32
  negate     (): v4
  distance   (other: v4): f32
  distancesq (other: v4): f32
  abs        (): v4
  min        (other: v4): v4
  max        (other: v4): v4
  clamp      (min: v4, max: v4): v4
  lerp       (other: v4, amount: f32): v4
  transform  (matrix: m4): v4
  transform3 (matrix: m4): v4
  clone      (): v4
  equals     (other: v4): boolean
  inspect    (): string 
  store      (out: Float32Array) : void 
}

export interface m4 {
  __m4: boolean
  [index: number]: number
  add       (other:  m4) : m4
  sub       (other:  m4) : m4
  mul       (other:  m4) : m4
  div       (other:  m4) : m4
  translate (other:  v3) : m4
  scale     (other:  v3) : m4
  rotatex   (radian: f32): m4
  rotatey   (radian: f32): m4
  rotatez   (radian: f32): m4
  invert    (): m4
  transpose (): m4
  lerp      (other: m4, amount: f32): m4
  clone     (): m4
  equals    (other: m4): boolean
  inspect   (): string    
  store     (out: Float32Array) : void
}

/**
 * internal vector cache. maintains a fixed sized
 * cache of vectors which are allocated forward 
 * allocated on new math contexts. Vectors are
 * issued out on a round robin scheme. 
 * 
 * internally, a uint32 value is kept next to 
 * each vector in the cache. This implementation
 * relies on javascript "rolling over" maximum
 * uint32 values (decimal: 4294967295) back to 0.
 */
export class Cache {
  private array_indices: Uint32Array
  private array_f32 : Array<Float32Array>
  private array_v2  : Array<Float32Array>
  private array_v3  : Array<Float32Array>
  private array_v4  : Array<Float32Array>
  private array_m4  : Array<Float32Array>
  constructor(private cachesize: number) {
    this.array_indices = new Uint32Array([0, 0, 0, 0, 0])
    this.array_f32     = new Array<Float32Array>(cachesize)
    this.array_v2      = new Array<Float32Array>(cachesize)
    this.array_v3      = new Array<Float32Array>(cachesize)
    this.array_v4      = new Array<Float32Array>(cachesize)
    this.array_m4      = new Array<Float32Array>(cachesize)
    for (let i = 0; i < cachesize; i++) {
      this.array_f32 [i] = new Float32Array([
        0
        ])
      this.array_v2 [i] = new Float32Array([
        0, 0
        ])
      this.array_v3 [i] = new Float32Array([
        0, 0, 0
        ])
      this.array_v4 [i] = new Float32Array([
        0, 0, 0, 0
        ])
      this.array_m4[i] = new Float32Array([
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0
        ])
    }
  }
  public f32(): Float32Array {
    let array = this.array_f32[this.array_indices[0] % this.cachesize]
    this.array_indices[0] += 1
    return array
  }
  public v2(): Float32Array {
    let array = this.array_v2[this.array_indices[1] % this.cachesize]
    this.array_indices[1] += 1
    return array
  }
  public v3(): Float32Array {
    let array = this.array_v3[this.array_indices[2] % this.cachesize]
    this.array_indices[2] += 1
    return array
  }
  public v4(): Float32Array {
    let array = this.array_v4[this.array_indices[3] % this.cachesize]
    this.array_indices[3] += 1
    return array
  }
  public m4(): Float32Array {
    let array = this.array_m4[this.array_indices[4] % this.cachesize]
    this.array_indices[4]  += 1
    return array
  }
}
export class Context {
  private cache : Cache
  constructor(cachesize: number) {
    this.cache = new Cache(cachesize)
    for(let i = 0; i < cachesize; i++) {
      this.bind_f32 (this.cache.f32())
      this.bind_v2  (this.cache.v2())
      this.bind_v3  (this.cache.v3())
      this.bind_v4  (this.cache.v4())
      this.bind_m4  (this.cache.m4())
    }
  }
  private bind_f32(a: Float32Array) : f32 {
    let v = <any>a as f32
    v.__f32             = true
    v.add               = (other)         => this.add_f32_f32       (v, other)
    v.sub               = (other)         => this.sub_f32_f32       (v, other)
    v.mul               = (other)         => this.mul_f32_f32       (v, other)
    v.div               = (other)         => this.div_f32_f32       (v, other)
    v.negate            = ()              => this.negate_f32        (v)
    v.distance          = (other)         => this.distance_f32_f32  (v, other)
    v.distancesq        = (other)         => this.distancesq_f32_f32(v, other)
    v.abs               = ()              => this.abs_f32           (v)
    v.min               = (other)         => this.min_f32_f32       (v, other)
    v.max               = (other)         => this.max_f32_f32       (v, other)
    v.clamp             = (min, max)      => this.clamp_f32_f32_f32 (v, min, max)
    v.lerp              = (other, amount) => this.lerp_f32_f32_f32  (v, other, amount)
    v.clone             = ()              => this.clone_f32         (v)
    v.equals            = (other)         => this.equals_f32_f32    (v, other)
    v.inspect           = ()              => this.inspect_f32       (v)
    v.store             = (out: Float32Array) => this.store_f32(v, out)
    return v as f32
  }
  private bind_v2(a: Float32Array) : v2 {
    let v = <any>a as v2
    v.__v2              = true
    v.add               = (other)         => this.add_v2_v2             (v, other)
    v.sub               = (other)         => this.sub_v2_v2             (v, other)
    v.mul               = (other)         => this.mul_v2_v2             (v, other)
    v.div               = (other)         => this.div_v2_v2             (v, other)
    v.scale             = (other)         => this.mul_v2_f32            (v, other)
    v.dot               = (other)         => this.dot_v2_v2             (v, other)
    v.normalize         = ()              => this.normalize_v2          (v)
    v.mag               = ()              => this.mag_v2                (v)
    v.magsq             = ()              => this.magsq_v2              (v)
    v.reflect           = (other)         => this.reflect_v2_v2            (v, other)
    v.negate            = ()              => this.negate_v2             (v)
    v.distance          = (other)         => this.distance_v2_v2        (v, other)
    v.distancesq        = (other)         => this.distancesq_v2_v2      (v, other)
    v.abs               = ()              => this.abs_v2                (v)
    v.min               = (other)         => this.min_v2_v2             (v, other)
    v.max               = (other)         => this.max_v2_v2             (v, other)
    v.clamp             = (min, max)      => this.clamp_v2_v2_v2        (v, min, max)
    v.lerp              = (other, amount) => this.lerp_v2_v2_f32        (v, other, amount)
    v.transform         = (matrix)        => this.transform_v2_m4       (v, matrix)
    v.transform3        = (matrix)        => this.transform3_v2_m4(v, matrix)
    v.clone             = ()              => this.clone_v2              (v)
    v.equals            = (other)         => this.equals_v2_v2          (v, other)
    v.inspect           = ()              => this.inspect_v2            (v)
    v.store             = (out: Float32Array) => this.store_v2(v, out)
    return v as v2
  }
  private bind_v3(a: Float32Array) : v3 {
    let v = <any>a as v3
    v.__v3              = true
    v.add               = (other)         => this.add_v3_v3       (v, other)
    v.sub               = (other)         => this.sub_v3_v3       (v, other)
    v.mul               = (other)         => this.mul_v3_v3       (v, other)
    v.div               = (other)         => this.div_v3_v3       (v, other)
    v.scale             = (other)         => this.mul_v3_f32      (v, other)
    v.dot               = (other)         => this.dot_v3_v3       (v, other)
    v.cross             = (other)         => this.cross_v3_v3     (v, other)
    v.normalize         = ()              => this.normalize_v3    (v)
    v.mag               = ()              => this.mag_v3          (v)
    v.magsq             = ()              => this.magsq_v3        (v)
    v.reflect           = (other)         => this.reflect_v3_v3      (v, other)
    v.negate            = ()              => this.negate_v3       (v)
    v.distance          = (other)         => this.distance_v3_v3  (v, other)
    v.distancesq        = (other)         => this.distancesq_v3_v3(v, other)
    v.abs               = ()              => this.abs_v3          (v)
    v.min               = (other)         => this.min_v3_v3       (v, other)
    v.max               = (other)         => this.max_v3_v3       (v, other)
    v.clamp             = (min, max)      => this.clamp_v3_v3_v3  (v, min, max)
    v.lerp              = (other, amount) => this.lerp_v3_v3_f32  (v, other, amount)
    v.transform         = (matrix)        => this.transform_v3_m4 (v, matrix)
    v.transform3  = (matrix)        => this.transform3_v3_m4(v, matrix)
    v.clone             = ()              => this.clone_v3        (v)
    v.equals            = (other)         => this.equals_v3_v3    (v, other)
    v.inspect           = ()              => this.inspect_v3      (v)
    v.store             = (out: Float32Array) => this.store_v3(v, out)
    return v as v3
  }
  private bind_v4(a: Float32Array) : v4 {
    let v = <any>a as v4
    v.__v4              = true
    v.add               = (other)         => this.add_v4_v4       (v, other)
    v.sub               = (other)         => this.sub_v4_v4       (v, other)
    v.mul               = (other)         => this.mul_v4_v4       (v, other)
    v.div               = (other)         => this.div_v4_v4       (v, other)
    v.scale             = (other)         => this.mul_v4_f32      (v, other)
    v.dot               = (other)         => this.dot_v4_v4       (v, other)
    v.normalize         = ()              => this.normalize_v4    (v)
    v.mag               = ()              => this.mag_v4          (v)
    v.magsq             = ()              => this.magsq_v4        (v)
    v.negate            = ()              => this.negate_v4       (v)
    v.distance          = (other)         => this.distance_v4_v4  (v, other)
    v.distancesq        = (other)         => this.distancesq_v4_v4(v, other)
    v.abs               = ()              => this.abs_v4          (v)
    v.min               = (other)         => this.min_v4_v4       (v, other)
    v.max               = (other)         => this.max_v4_v4       (v, other)
    v.clamp             = (min, max)      => this.clamp_v4_v4_v4  (v, min, max)
    v.lerp              = (other, amount) => this.lerp_v4_v4_f32  (v, other, amount)
    v.transform         = (matrix)        => this.transform_v4_m4 (v, matrix)
    v.transform3        = (matrix)        => this.transform3_v4_m4(v, matrix)
    v.clone             = ()              => this.clone_v4        (v)
    v.equals            = (other)         => this.equals_v4_v4    (v, other)
    v.inspect           = ()              => this.inspect_v4      (v)
    v.store             = (out: Float32Array) => this.store_v4(v, out)
    return v as v4
  }
  private bind_m4(a: Float32Array) : m4 {
    let v = <any>a as m4
    v.__m4      = true
    v.add       = (other:  m4)             => this.add_m4_m4     (v, other)
    v.sub       = (other:  m4)             => this.sub_m4_m4     (v, other)
    v.mul       = (other:  m4)             => this.mul_m4_m4     (v, other)
    v.div       = (other:  m4)             => this.div_m4_m4     (v, other)
    v.translate = (other:  v3)             => this.mul_m4_m4     (v, this.m4_translation(other))
    v.scale     = (other:  v3)             => this.scale_m4_v3   (v, other)
    v.rotatex   = (radian: f32)            => this.mul_m4_m4     (v, this.m4_rotation_x(radian))
    v.rotatey   = (radian: f32)            => this.mul_m4_m4     (v, this.m4_rotation_y(radian))
    v.rotatez   = (radian: f32)            => this.mul_m4_m4     (v, this.m4_rotation_z(radian))
    v.invert    = ()                       => this.invert_m4     (v)
    v.transpose = ()                       => this.transpose_m4  (v)
    v.lerp      = (other: m4, amount: f32) => this.lerp_m4_m4_f32(v, other, amount)
    v.clone     = ()                       => this.clone_m4      (v)
    v.equals    = (other: m4)              => this.equals_m4_m4  (v, other)
    v.inspect   = ()                       => this.inspect_m4    (v)
    v.store     = (out: Float32Array)      => this.store_m4(v, out)
    return v as m4
  }
  public f32(x: number): f32 {
    let out:any = this.cache.f32()
    out[0] = x
    return out as f32
  }
  public v2(x: number, y: number): v2 {
    let out:any = this.cache.v2()
    out[0] = x
    out[1] = y
    return out as v2
  }
  public v3(x: number, y: number, z: number): v3 {
    let out:any = this.cache.v3()
    out[0] = x
    out[1] = y
    out[2] = z
    return out as v3
  }
  public v4(x: number, y: number, z: number, w: number): v4 {
    let out:any = this.cache.v4()
    out[0] = x
    out[1] = y
    out[2] = z
    out[3] = z
    return out as v4
  }
  public m4(values?: Array<number>): m4 {
    let v: any = <any>this.cache.m4()
    if(values !== undefined) v.set(values)
    return v
  }
  public add_f32_f32(a: f32, b: f32): f32 {
    let out:any = this.cache.f32()
    out[0] = a[0] + b[0]
    return out as f32
  }
  public add_v2_v2(a: v2, b: v2): v2 {
    let out:any = this.cache.v2()
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out as v2
  }
  public add_v3_v3(a: v3, b: v3): v3 {
    let out:any = this.cache.v3()
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    return out as v3
  }
  public add_v4_v4(a: v4, b: v4): v4 {
    let out:any = this.cache.v4()
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    out[3] = a[3] + b[3]
    return out as v4
  }
  public add_m4_m4(a: m4, b: m4): m4 {
    let out:any = this.cache.m4()
    out[0]  = a[0]  + b[0]
    out[1]  = a[1]  + b[1]
    out[2]  = a[2]  + b[2]
    out[3]  = a[3]  + b[3]
    out[4]  = a[4]  + b[4]
    out[5]  = a[5]  + b[5]
    out[6]  = a[6]  + b[6]
    out[7]  = a[7]  + b[7]
    out[8]  = a[8]  + b[8]
    out[9]  = a[9]  + b[9]
    out[10] = a[10] + b[10]
    out[11] = a[11] + b[11]
    out[12] = a[12] + b[12]
    out[13] = a[13] + b[13]
    out[14] = a[14] + b[14]
    out[15] = a[15] + b[15]
    return out as m4
  }
  public sub_f32_f32(a: f32, b: f32): f32 {
    let out:any = this.cache.f32()
    out[0] = a[0] - b[0]
    return out as f32
  }
  public sub_v2_v2(a: v2, b: v2): v2 {
    let out:any = this.cache.v2()
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out as v2
  }
  public sub_v3_v3(a: v3, b: v3): v3 {
    let out:any = this.cache.v3()
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    return out as v3
  }
  public sub_v4_v4(a: v4, b: v4): v4 {
    let out:any = this.cache.v4()
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    out[3] = a[3] - b[3]
    return out as v4
  }
  public sub_m4_m4(a: m4, b: m4): m4 {
    let out:any = this.cache.m4()
    out[0]  = a[0]  - b[0]
    out[1]  = a[1]  - b[1]
    out[2]  = a[2]  - b[2]
    out[3]  = a[3]  - b[3]
    out[4]  = a[4]  - b[4]
    out[5]  = a[5]  - b[5]
    out[6]  = a[6]  - b[6]
    out[7]  = a[7]  - b[7]
    out[8]  = a[8]  - b[8]
    out[9]  = a[9]  - b[9]
    out[10] = a[10] - b[10]
    out[11] = a[11] - b[11]
    out[12] = a[12] - b[12]
    out[13] = a[13] - b[13]
    out[14] = a[14] - b[14]
    out[15] = a[15] - b[15]
    return out as m4
  }
  public mul_f32_f32(a: f32, b: f32): f32 {
    let out:any = this.cache.f32()
    out[0] = a[0] * b[0]
    return out as f32
  }
  public mul_v2_f32(a: v2, b: f32): v2 {
    let out:any = this.cache.v2()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[0]
    return out as v2
  }
  public mul_v3_f32(a: v3, b: f32): v3 {
    let out:any = this.cache.v3()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[0]
    out[2] = a[2] * b[0]
    return out as v3
  }
  public mul_v4_f32(a: v4, b: f32): v4 {
    let out:any = this.cache.v4()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[0]
    out[2] = a[2] * b[0]
    out[3] = a[3] * b[0]
    return out as v4
  }
  public mul_v2_v2(a: v2, b: v2): v2 {
    let out:any = this.cache.v2()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out as v2
  }
  public mul_v3_v3(a: v3, b: v3): v3 {
    let out:any = this.cache.v3()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    out[2] = a[2] * b[2]
    return out as v3
  }
  public mul_v4_v4(a: v4, b: v4): v4 {
    let out:any = this.cache.v4()
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    out[2] = a[2] * b[2]
    out[3] = a[3] * b[3]
    return out as v4
  }
  public mul_m4_m4(a: m4, b: m4): m4 {
    let out:any = this.cache.m4()
    out[0]  = (((a[0]  * b[0]) + (a[1]  * b[4])) + (a[2]  * b[8]))  + (a[3]  * b[12])
    out[1]  = (((a[0]  * b[1]) + (a[1]  * b[5])) + (a[2]  * b[9]))  + (a[3]  * b[13])
    out[2]  = (((a[0]  * b[2]) + (a[1]  * b[6])) + (a[2]  * b[10])) + (a[3]  * b[14])
    out[3]  = (((a[0]  * b[3]) + (a[1]  * b[7])) + (a[2]  * b[11])) + (a[3]  * b[15])
    out[4]  = (((a[4]  * b[0]) + (a[5]  * b[4])) + (a[6]  * b[8]))  + (a[7]  * b[12])
    out[5]  = (((a[4]  * b[1]) + (a[5]  * b[5])) + (a[6]  * b[9]))  + (a[7]  * b[13])
    out[6]  = (((a[4]  * b[2]) + (a[5]  * b[6])) + (a[6]  * b[10])) + (a[7]  * b[14])
    out[7]  = (((a[4]  * b[3]) + (a[5]  * b[7])) + (a[6]  * b[11])) + (a[7]  * b[15])
    out[8]  = (((a[8]  * b[0]) + (a[9]  * b[4])) + (a[10] * b[8]))  + (a[11] * b[12])
    out[9]  = (((a[8]  * b[1]) + (a[9]  * b[5])) + (a[10] * b[9]))  + (a[11] * b[13])
    out[10] = (((a[8]  * b[2]) + (a[9]  * b[6])) + (a[10] * b[10])) + (a[11] * b[14])
    out[11] = (((a[8]  * b[3]) + (a[9]  * b[7])) + (a[10] * b[11])) + (a[11] * b[15])
    out[12] = (((a[12] * b[0]) + (a[13] * b[4])) + (a[14] * b[8]))  + (a[15] * b[12])
    out[13] = (((a[12] * b[1]) + (a[13] * b[5])) + (a[14] * b[9]))  + (a[15] * b[13])
    out[14] = (((a[12] * b[2]) + (a[13] * b[6])) + (a[14] * b[10])) + (a[15] * b[14])
    out[15] = (((a[12] * b[3]) + (a[13] * b[7])) + (a[14] * b[11])) + (a[15] * b[15])
    return out as m4
  }
  public div_f32_f32(a: f32, b: f32): f32 {
    let out:any = this.cache.f32()
    out[0] = a[0] / b[0]
    return out as f32
  }
  public div_v2_v2(a: v2, b: v2): v2 {
    let out:any = this.cache.v2()
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out as v2
  }
  public div_v3_v3(a: v3, b: v3): v3 {
    let out:any = this.cache.v3()
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    return out as v3
  }
  public div_v4_v4(a: v4, b: v4): v4 {
    let out:any = this.cache.v4()
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    out[3] = a[3] / b[3]
    return out as v4
  }
  public div_m4_m4(a: m4, b: m4): m4 {
    let out:any = this.cache.m4()
    out[0]  = a[0]  / b[0]
    out[1]  = a[1]  / b[1]
    out[2]  = a[2]  / b[2]
    out[3]  = a[3]  / b[3]
    out[4]  = a[4]  / b[4]
    out[5]  = a[5]  / b[5]
    out[6]  = a[6]  / b[6]
    out[7]  = a[7]  / b[7]
    out[8]  = a[8]  / b[8]
    out[9]  = a[9]  / b[9]
    out[10] = a[10] / b[10]
    out[11] = a[11] / b[11]
    out[12] = a[12] / b[12]
    out[13] = a[13] / b[13]
    out[14] = a[14] / b[14]
    out[15] = a[15] / b[15]
    return out as m4
  }
  public scale_m4_v3(m: m4, b: v3): m4 {
    let out:any = this.cache.m4()
    out[0]  = b[0]
    out[1]  = 0
    out[2]  = 0
    out[3]  = 0
    out[4]  = 0
    out[5]  = b[1]
    out[6]  = 0
    out[7]  = 0
    out[8]  = 0
    out[9]  = 0
    out[10] = b[2]
    out[11] = 0
    out[12] = 0
    out[13] = 0
    out[14] = 0
    out[15] = 1
    return out as m4
  }
  public dot_v2_v2(a: v2, b: v2): f32 {
    let out:any = this.cache.f32()
    out[0] = (a[0] * b[0]) + (a[1] * b[1])
    return out as f32
  }
  public dot_v3_v3(a: v3, b: v3): f32 {
    let out: any = this.cache.f32()
    out[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2])
    return out as f32
  }
  public dot_v4_v4(a: v4, b: v4): f32 {
    let out: any = this.cache.f32()
    out[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]) + (a[3] * b[3])
    return out as f32
  }
  public cross_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.cache.v3()
    out[0] = (a[1] * b[2]) - (a[2] * b[1])
    out[1] = (a[2] * b[0]) - (a[0] * b[2])
    out[2] = (a[0] * b[1]) - (a[1] * b[0])
    return out as v3
  }
  public normalize_v2(a: v2): v2 {
    let out: any = this.cache.v2()
    let len = this.cache.f32()
    len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]))
    out[0] = a[0] * len[0]
    out[1] = a[1] * len[0]
    return out as v2
  }
  public normalize_v3(a: v3): v3 {
    let out: any = this.cache.v3()
    let len = this.cache.f32()
    len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]))
    out[0] = a[0] * len[0]
    out[1] = a[1] * len[0]
    out[2] = a[2] * len[0]
    return out as v3
  }
  public normalize_v4(a: v4): v4 {
    let out: any = this.cache.v4()
    let len = this.cache.f32()
    len[0] = 1.0 / Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3]))
    out[0] = a[0] * len[0]
    out[1] = a[1] * len[0]
    out[2] = a[2] * len[0]
    out[3] = a[3] * len[0]
    return out as v4
  }
  public mag_v2(a: v2): f32 {
    let out: any = this.cache.f32()
    out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]))
    return out as f32
  }
  public mag_v3(a: v3): f32 {
    let out:any = this.cache.f32()
    out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]))
    return out as f32
  }
  public mag_v4(a: v4): f32 {
    let out:any = this.cache.f32()
    out[0] = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3]))
    return out as f32
  }
  public magsq_v2(a: v2): f32 {
    let out: any = this.cache.f32()
    out[0] = (a[0] * a[0]) + (a[1] * a[1])
    return out as f32
  }
  public magsq_v3(a: v3): f32 {
    let out:any = this.cache.f32()
    out[0] = (a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2])
    return out as f32
  }
  public magsq_v4(a: v4): f32 {
    let out:any = this.cache.f32()
    out[0] = (a[0] * a[0]) + (a[1] * a[1]) + (a[2] * a[2]) + (a[3] * a[3])
    return out as f32
  }
  public distance_f32_f32(a: f32, b: f32): f32 {
    let out:any = this.cache.f32()
    out[0] = Math.abs(a[0] - b[0])
    return out as f32
  }
  public distance_v2_v2(a: v2, b: v2): f32 {
    let out:any = this.cache.f32()
    let t = this.cache.v2()
    t[0]  = a[0] - b[0]
    t[1]  = a[1] - b[1]
    out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]))
    return out as f32
  }
  public distance_v3_v3(a: v3, b: v3): f32 {
    let out:any = this.cache.f32()
    let t = this.cache.v3()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    t[2] = a[2] - b[2]
    out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]))
    return out as f32
  }
  public distance_v4_v4(a: v4, b: v4): f32 {
    let out:any = this.cache.f32()
    let t = this.cache.v4()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    t[2] = a[2] - b[2]
    t[3] = a[3] - b[3] 
    out[0] = Math.sqrt((t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]) + (t[3] * t[3]))
    return out as f32
  }  
  public distancesq_f32_f32(a: f32, b: f32): f32 {
    let out:any = this.cache.f32()
    out[0] = Math.abs(a[0] - b[0])
    return out as f32
  }
  public distancesq_v2_v2(a: v2, b: v2): f32 {
    let out:any = this.cache.f32()
    let t = this.cache.v2()
    t[0]  = a[0] - b[0]
    t[1]  = a[1] - b[1]
    out[0] = (t[0] * t[0]) + (t[1] * t[1])
    return out as f32
  }
  public distancesq_v3_v3(a: v3, b: v3): f32 {
    let out:any = this.cache.f32()
    let t = this.cache.v3()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    t[2] = a[2] - b[2]
    out[0] = (t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2])
    return out as f32
  }
  public distancesq_v4_v4(a: v4, b: v4): f32 {
    let out:any = this.cache.f32()
    let t = this.cache.v4()
    t[0] = a[0] - b[0]
    t[1] = a[1] - b[1]
    t[2] = a[2] - b[2]
    t[3] = a[3] - b[3] 
    out[0] = (t[0] * t[0]) + (t[1] * t[1]) + (t[2] * t[2]) + (t[3] * t[3])
    return out as f32
  }
  public reflect_v2_v2(a: v2, b: v2): v2 {
    let out:any = this.cache.v2()
    let dot = this.cache.f32()
    dot[0] = (a[0] * b[0]) + (a[1] * b[1])
    out[0] = a[0] - ((2.0 * dot[0]) * b[0])
    out[1] = a[1] - ((2.0 * dot[0]) * b[1])
    return out as v2
  }
  public reflect_v3_v3(a: v3, b: v3): v3 {
    let out:any = this.cache.v3()
    let dot     = this.cache.f32()
    dot[0] = (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2])
    out[0] = a[0] - ((2.0 * dot[0]) * b[0])
    out[1] = a[1] - ((2.0 * dot[0]) * b[1])
    out[2] = a[2] - ((2.0 * dot[0]) * b[2])
    return out as v3
  }
  public negate_f32(a: f32): f32 {
    let out: any = this.cache.f32()
    out[0] = -a[0]
    return out as f32
  }
  public negate_v2(a: v2): v2 {
    let out: any = this.cache.v2()
    out[0] = -a[0]
    out[1] = -a[1]
    return out as v2
  }
  public negate_v3(a: v3): v3 {
    let out: any = this.cache.v3()
    out[0] = -a[0]
    out[1] = -a[1]
    out[2] = -a[2]
    return out as v3
  }
  public negate_v4(a: v4): v4 {
    let out: any = this.cache.v4()
    out[0] = -a[0]
    out[1] = -a[1]
    out[2] = -a[2]
    out[3] = -a[3]
    return out as v4
  }
  public abs_f32(a: f32): f32 {
    let out: any = this.cache.f32()
    out[0] = Math.abs(a[0])
    return out as f32
  }
  public abs_v2(a: v2): v2 {
    let out: any = this.cache.v2()
    out[0] = Math.abs(a[0])
    out[1] = Math.abs(a[1])
    return out as v2
  }
  public abs_v3(a: v3): v3 {
    let out: any = this.cache.v3()
    out[0] = Math.abs(a[0])
    out[1] = Math.abs(a[1])
    out[2] = Math.abs(a[2])
    return out as v3
  }
  public abs_v4(a: v4): v4 {
    let out: any = this.cache.v4()
    out[0] = Math.abs(a[0])
    out[1] = Math.abs(a[1])
    out[2] = Math.abs(a[2])
    out[3] = Math.abs(a[3])
    return out as v4
  }
  public min_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.cache.f32()
    out[0] = (a[0] < b[0]) ? a[0] : b[0]
    return out as f32
  }
  public min_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.cache.v2()
    out[0] = (a[0] < b[0]) ? a[0] : b[0]
    out[1] = (a[1] < b[1]) ? a[1] : b[1]
    return out as v2
  }
  public min_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.cache.v3()
    out[0] = (a[0] < b[0]) ? a[0] : b[0]
    out[1] = (a[1] < b[1]) ? a[1] : b[1]
    out[2] = (a[2] < b[2]) ? a[2] : b[2]
    return out as v3
  }
  public min_v4_v4(a: v4, b: v4): v4 {
    let out: any = this.cache.v4()
    out[0] = (a[0] < b[0]) ? a[0] : b[0]
    out[1] = (a[1] < b[1]) ? a[1] : b[1]
    out[2] = (a[2] < b[2]) ? a[2] : b[2]
    out[3] = (a[3] < b[3]) ? a[3] : b[3]
    return out as v4
  }
  public max_f32_f32(a: f32, b: f32): f32 {
    let out: any = this.cache.f32()
    out[0] = (a[0] > b[0]) ? a[0] : b[0]
    return out as f32
  }
  public max_v2_v2(a: v2, b: v2): v2 {
    let out: any = this.cache.v2()
    out[0] = (a[0] > b[0]) ? a[0] : b[0]
    out[1] = (a[1] > b[1]) ? a[1] : b[1]
    return out as v2
  }
  public max_v3_v3(a: v3, b: v3): v3 {
    let out: any = this.cache.v3()
    out[0] = (a[0] > b[0]) ? a[0] : b[0]
    out[1] = (a[1] > b[1]) ? a[1] : b[1]
    out[2] = (a[2] > b[2]) ? a[2] : b[2]
    return out as v3
  }
  public max_v4_v4(a: v4, b: v4): v4 {
    let out: any = this.cache.v4()
    out[0] = (a[0] > b[0]) ? a[0] : b[0]
    out[1] = (a[1] > b[1]) ? a[1] : b[1]
    out[2] = (a[2] > b[2]) ? a[2] : b[2]
    out[3] = (a[3] > b[3]) ? a[3] : b[3]
    return out as v4
  }
  public clamp_f32_f32_f32(a: f32, min: f32, max: f32): f32 {
    let out: any = this.cache.f32()
    out[0] = a[0]
    out[0] = (out[0] > max[0]) ? max[0] : out[0]
    out[0] = (out[0] < min[0]) ? min[0] : out[0]
    return out as f32
  }
  public clamp_v2_v2_v2(a: v2, min: v2, max: v2): v2 {
    let out: any = this.cache.v2()
    out[0] = a[0]
    out[1] = a[1]
    out[0] = (out[0] > max[0]) ? max[0] : out[0]
    out[0] = (out[0] < min[0]) ? min[0] : out[0]
    out[1] = (out[1] > max[1]) ? max[1] : out[1]
    out[1] = (out[1] < min[1]) ? min[1] : out[1]
    return out as v2
  }
  public clamp_v3_v3_v3(a: v3, min: v3, max: v3): v3 {
    let out: any = this.cache.v3()
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
  public clamp_v4_v4_v4(a: v4, min: v4, max: v4): v4 {
    let out: any = this.cache.v4()
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
  public lerp_f32_f32_f32(a: f32, b: f32, c: f32): f32 {
    let out: any = this.cache.f32()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    return out as f32
  }
  public lerp_v2_v2_f32(a: v2, b: v2, c: f32): v2 {
    let out: any = this.cache.v2()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    out[1] = a[1] + ((b[1] - a[1]) * c[0])
    return out as v2
  }
  public lerp_v3_v3_f32(a: v3, b: v3, c: f32): v3 {
    let out: any = this.cache.v3()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    out[1] = a[1] + ((b[1] - a[1]) * c[0])
    out[2] = a[2] + ((b[2] - a[2]) * c[0])
    return out as v3
  }
  public lerp_v4_v4_f32(a: v4, b: v4, c: f32): v4 {
    let out: any = this.cache.v4()
    out[0] = a[0] + ((b[0] - a[0]) * c[0])
    out[1] = a[1] + ((b[1] - a[1]) * c[0])
    out[2] = a[2] + ((b[2] - a[2]) * c[0])
    out[3] = a[3] + ((b[3] - a[3]) * c[0])
    return out as v4
  }
  public lerp_m4_m4_f32(a: m4, b: m4, c: f32): m4 {
    let out: any = this.cache.m4()
    out[0]  = a[0]  + ((b[0]  - a[0])  * c[0])
    out[1]  = a[1]  + ((b[1]  - a[1])  * c[0])
    out[2]  = a[2]  + ((b[2]  - a[2])  * c[0])
    out[3]  = a[3]  + ((b[3]  - a[3])  * c[0])
    out[4]  = a[4]  + ((b[4]  - a[4])  * c[0])
    out[5]  = a[5]  + ((b[5]  - a[5])  * c[0])
    out[6]  = a[6]  + ((b[6]  - a[6])  * c[0])
    out[7]  = a[7]  + ((b[7]  - a[7])  * c[0])
    out[8]  = a[8]  + ((b[8]  - a[8])  * c[0])
    out[9]  = a[9]  + ((b[9]  - a[9])  * c[0])
    out[10] = a[10] + ((b[10] - a[10]) * c[0])
    out[11] = a[11] + ((b[11] - a[11]) * c[0])
    out[12] = a[12] + ((b[12] - a[12]) * c[0])
    out[13] = a[13] + ((b[13] - a[13]) * c[0])
    out[14] = a[14] + ((b[14] - a[14]) * c[0])
    out[15] = a[15] + ((b[15] - a[15]) * c[0])
    return out as m4
  }
  public transform_v2_m4(a: v2, b: m4): v2 {
    let out: any = this.cache.v2()
    out[0] = ((a[0] * b[0]) + (a[1] * b[4])) + b[12]
    out[1] = ((a[0] * b[1]) + (a[1] * b[5])) + b[13]
    return out as v2
  }
  public transform_v3_m4(a: v3, b: m4): v3 {
    let out: any = this.cache.v3()
    out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8]))  + b[12]
    out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9]))  + b[13]
    out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + b[14]
    return out as v3
  }
  public transform_v4_m4(a: v4, b: m4): v4 {
    let out: any = this.cache.v4()
    out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8]))  + (a[3] * b[12])
    out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9]))  + (a[3] * b[13])
    out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + (a[3] * b[14])
    out[3] = (((a[0] * b[3]) + (a[1] * b[7])) + (a[2] * b[11])) + (a[3] * b[15])
    return out as v4
  }
  public transform3_v2_m4(a: v2, b: m4): v2 {
    let out: any = this.cache.v2()
    out[0] = (a[0] * b[0]) + (a[1] * b[4])
    out[1] = (a[0] * b[1]) + (a[1] * b[5])
    return out as v2
  }
  public transform3_v3_m4(a: v3, b: m4): v3 {
    let out: any = this.cache.v3()
    out[0] = ((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8])
    out[1] = ((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9])
    out[2] = ((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])
    return out as v3
  }
  public transform3_v4_m4(a: v4, b: m4): v4 {
    let out: any = this.cache.v4()
    out[0] = (((a[0] * b[0]) + (a[1] * b[4])) + (a[2] * b[8]))  + (a[3] * b[12])
    out[1] = (((a[0] * b[1]) + (a[1] * b[5])) + (a[2] * b[9]))  + (a[3] * b[13])
    out[2] = (((a[0] * b[2]) + (a[1] * b[6])) + (a[2] * b[10])) + (a[3] * b[14])
    out[3] = (((a[0] * b[3]) + (a[1] * b[7])) + (a[2] * b[11])) + (a[3] * b[15])
    return out as v4
  }
  public invert_m4(a: m4): m4 {
    let out:any = this.cache.m4()
    let n0  = a[0]
    let n1  = a[1]
    let n2  = a[2]
    let n3  = a[3]
    let n4  = a[4]
    let n5  = a[5]
    let n6  = a[6]
    let n7  = a[7]
    let n8  = a[8]
    let n9  = a[9]
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
  public determinant_m4(a: m4): f32 {
    let out: any = this.cache.f32()
    let n0  = a[0]
    let n1  = a[1]
    let n2  = a[2]
    let n3  = a[3]
    let n4  = a[4]
    let n5  = a[5]
    let n6  = a[6]
    let n7  = a[7]
    let n8  = a[8]
    let n9  = a[9]
    let n10 = a[10]
    let n11 = a[11]
    let n12 = a[12]
    let n13 = a[13]
    let n14 = a[14]
    let n15 = a[15]
    let n16 = (n10 * n15) - (n11 * n14)
    let n17 = (n9 * n15)  - (n11 * n13)
    let n18 = (n9 * n14)  - (n10 * n13)
    let n19 = (n8 * n15)  - (n11 * n12)
    let n20 = (n8 * n14)  - (n10 * n12)
    let n21 = (n8 * n13)  - (n9 * n12)
    out[0] = ((((n0 * (((n5 * n16) - (n6 * n17)) + (n7 * n18))) -
      (n1 * (((n4 * n16) - (n6 * n19)) + (n7 * n20)))) + (n2 * (((n4 * n17) -
        (n5 * n19)) + (n7 * n21)))) - (n3 * (((n4 * n18) - (n5 * n20)) + (n6 * n21))))
    return out as f32
  }
  public transpose_m4(a: m4): m4 {
    let out:any = this.cache.m4()
    out[0]  = a[0]
    out[1]  = a[4]
    out[2]  = a[8]
    out[3]  = a[12]
    out[4]  = a[1]
    out[5]  = a[5]
    out[6]  = a[9]
    out[7]  = a[13]
    out[8]  = a[2]
    out[9]  = a[6]
    out[10] = a[10]
    out[11] = a[14]
    out[12] = a[3]
    out[13] = a[7]
    out[14] = a[11]
    out[15] = a[15]
    return out
  }
  public m4_identity(): m4 {
    let out:any = this.cache.m4()
    out[0]  = 1
    out[1]  = 0
    out[2]  = 0
    out[3]  = 0
    out[4]  = 0
    out[5]  = 1
    out[6]  = 0
    out[7]  = 0
    out[8]  = 0
    out[9]  = 0
    out[10] = 1
    out[11] = 0
    out[12] = 0
    out[13] = 0
    out[14] = 0
    out[15] = 1
    return out as m4
  }
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
  public m4_perspective(fov: number, aspect: number, near: number, far: number): m4 {
    let n0 = 1.0 / Math.tan(fov * 0.5)
    let n1 = n0 / aspect
    let m  = this.m4_identity()
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
  public m4_rotation_x (radians: f32) : m4 {
    let out: any = this.cache.m4()
    let t = this.cache.v2()
    t[0] = Math.cos(radians[0])
    t[1] = Math.sin(radians[0])
    out[0]  = 1  
    out[1]  = 0    
    out[2]  = 0    
    out[3]  = 0
    out[4]  = 0  
    out[5]  = t[0] 
    out[6]  = t[1] 
    out[7]  = 0
    out[8]  = 0 
    out[9]  = -t[1] 
    out[10] = t[0] 
    out[11] = 0
    out[12] = 0  
    out[13] = 0    
    out[14] = 0    
    out[15] = 1
    return out as m4
  }
  public m4_rotation_y(radians: f32): m4 {
    let out: any = this.cache.m4()
    let t = this.cache.v2()
    t[0] = Math.cos(radians[0])
    t[1] = Math.sin(radians[0])
    out[0]  = t[0]
    out[1]  = 0.0
    out[2]  = -t[1]
    out[3]  = 0.0
    out[4]  = 0.0   
    out[5]  = 1.0
    out[6]  = 0.0   
    out[7]  = 0.0
    out[8]  = t[1] 
    out[9]  = 0.0 
    out[10] = t[0]
    out[11] = 0.0
    out[12] = 0.0   
    out[13] = 0.0 
    out[14] = 0.0   
    out[15] = 1.0
    return out as m4
  }
  public m4_rotation_z(radians: f32): m4 {
    let out: any = this.cache.m4()
    let t = this.cache.v2()
    t[0] = Math.cos(radians[0])
    t[1] = Math.sin(radians[0])
    out[0]  = t[0] 
    out[1]  = t[1] 
    out[2]  = 0.0 
    out[3]  = 0.0
    out[4]  =-t[1]
    out[5]  = t[0] 
    out[6]  = 0.0
    out[7]  = 0.0
    out[8]  = 0.0  
    out[9]  = 0.0  
    out[10] = 1.0
    out[11] = 0.0
    out[12] = 0.0   
    out[13] = 0.0 
    out[14] = 0.0 
    out[15] = 1.0
    return out as m4
  }
  public m4_lookat(position: v3, target: v3, up: v3): m4 {
    let out: any = this.cache.m4()
    let d0  = this.sub_v3_v3(position, target) 
    let v0  = this.normalize_v3(d0)
    let d1  = this.cross_v3_v3(up, v0)
    let v1  = this.normalize_v3(d1)
    let v2  = this.cross_v3_v3(v0, v1)
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
  public m4_scale(a: v3): m4 {
    let out: any = this.cache.m4()
    out[0]  = a[0]
    out[1]  = 0
    out[2]  = 0
    out[3]  = 0
    out[4]  = 0
    out[5]  = a[1]
    out[6]  = 0
    out[7]  = 0
    out[8]  = 0
    out[9]  = 0
    out[10] = a[2]
    out[11] = 0
    out[12] = 0
    out[13] = 0
    out[14] = 0
    out[15] = 1
    return out as m4
  }
  public m4_translation(a: v3) : m4 {
    let out: any = this.cache.m4()
    out[0]  = 1.0       
    out[1]  = 0.0       
    out[2]  = 0.0       
    out[3]  = 0.0
    out[4]  = 0.0       
    out[5]  = 1.0       
    out[6]  = 0.0       
    out[7]  = 0.0
    out[8]  = 0.0       
    out[9]  = 0.0       
    out[10] = 1.0       
    out[11] = 0.0
    out[12] = a[0]
    out[13] = a[1]
    out[14] = a[2]
    out[15] = 1.0
    return out as m4
  }
  public clone_f32(a: f32): f32 {
    let out: any = this.cache.f32()
    out[0] = a[0]
    return out as f32
  }
  public clone_v2(a: v2): v2 {
    let out: any = this.cache.v2()
    out[0] = a[0]
    out[1] = a[1]
    return out as v2
  }
  public clone_v3(a: v3): v3 {
    let out: any = this.cache.v3()
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out as v3
  }
  public clone_v4(a: v4): v4 {
    let out: any = this.cache.v4()
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    out[3] = a[3]
    return out as v4
  }
  public clone_m4(a: m4): m4 {
    let out: any = this.cache.m4()
    out[0]  = a[0]
    out[1]  = a[1]
    out[2]  = a[2]
    out[3]  = a[3]
    out[4]  = a[4]
    out[5]  = a[5]
    out[6]  = a[6]
    out[7]  = a[7]
    out[8]  = a[8]
    out[9]  = a[9]
    out[10] = a[10]
    out[11] = a[11]
    out[12] = a[12]
    out[13] = a[13]
    out[14] = a[14]
    out[15] = a[15]
    return out as m4
  }
  public equals_f32_f32(a: f32, b: f32): boolean {
    return (
      a[0] === b[0]
    )
  }
  public equals_v2_v2(a: v2, b: v2): boolean {
   return (
      a[0] === b[0] &&
      a[1] === b[1]
    )
  }
  public equals_v3_v3(a: v3, b: v3): boolean {
   return (
      a[0] === b[0] &&
      a[1] === b[1] &&
      a[2] === b[2]
    )
  }
  public equals_v4_v4(a: v4, b: v4): boolean {
   return (
      a[0] === b[0] &&
      a[1] === b[1] &&
      a[2] === b[2] &&
      a[3] === b[3]
    )
  }
  public equals_m4_m4(a: m4, b: m4): boolean {
   return (
      a[0]  === b[0]  &&
      a[1]  === b[1]  &&
      a[2]  === b[2]  &&
      a[3]  === b[3]  &&
      a[4]  === b[4]  &&
      a[5]  === b[5]  &&
      a[6]  === b[6]  &&
      a[7]  === b[7]  &&
      a[8]  === b[8]  &&
      a[9]  === b[9]  &&
      a[10] === b[10] &&
      a[11] === b[11] &&
      a[12] === b[12] &&
      a[13] === b[13] &&
      a[14] === b[14] &&
      a[15] === b[15] 
    )
  }
  public store_f32(a: f32, out: Float32Array): void {
    let v = <any>a as Float32Array
    if(v.length !== out.length) throw Error("store_f32: buffer size mismatch")
    out.set(v)
  }
  public store_v2(a: v2, out: Float32Array): void {
    let v = <any>a as Float32Array
    if(v.length !== out.length) throw Error("store_v2: buffer size mismatch")
    out.set(v)
  }
  public store_v3(a: v3, out: Float32Array): void {
    let v = <any>a as Float32Array
    if(v.length !== out.length) throw Error("store_v3: buffer size mismatch")
    out.set(v)
  }
  public store_v4(a: v4, out: Float32Array): void {
    let v = <any>a as Float32Array
    if(v.length !== out.length) throw Error("store_v4: buffer size mismatch")
    out.set(v)
  }
  public store_m4(a: m4, out: Float32Array): void {
    let v = <any>a as Float32Array
    if(v.length !== out.length) throw Error("store_m4: buffer size mismatch")
    out.set(v)
  }
  public inspect_f32(a: f32): string {
     return `[${a[0]}]`
  }
  public inspect_v2(a: v2): string {
     return `[${a[0]}, ${a[1]}]`
  }
  public inspect_v3(a: v3): string {
     return `[${a[0]}, ${a[1]}, ${a[2]}]`
  }
  public inspect_v4(a: v4): string {
     return `[${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}]`
  }
  public inspect_m4(a: m4): string {
     return `[${a[0]}, ${a[1]}, ${a[2]}, ${a[3]},\n ${a[4]}, ${a[5]}, ${a[6]}, ${a[7]},\n ${a[8]}, ${a[9]}, ${a[10]}, ${a[11]},\n ${a[12]}, ${a[13]}, ${a[14]}, ${a[15]}]`
  }
}