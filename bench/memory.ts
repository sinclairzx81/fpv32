import * as fpv32 from "../src/fpv32"
import {stopwatch} from "./stopwatch"

let memory  = new fpv32.Memory()
let context = new fpv32.Context(memory)
export function run(iterations: number) {
  console.log(`benchmark : Memory`)
  console.log(`iterations: ` + iterations)
  stopwatch("f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(0)
    }
  })
  stopwatch("v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(0, 0)
    }
  })
  stopwatch("v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(0, 0, 0)
    }
  })
  stopwatch("v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(0, 0, 0, 1)
    }
  })
  stopwatch("m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(0, 0, 0, 1)
    }
  })
  stopwatch("add_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(1)
      let c = context.add_f32_f32(a, b)
    }
  })
  stopwatch("add_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.add_v2_v2(a, b)
    }
  })
  stopwatch("add_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.add_v3_v3(a, b)
    }
  })
  stopwatch("add_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.add_v4_v4(a, b)
    }
  })
  stopwatch("add_m4_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let b = context.m4()
      let c = context.add_m4_m4(a, b)
    }
  })
  stopwatch("sub_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(1)
      let c = context.sub_f32_f32(a, b)
    }
  })
  stopwatch("sub_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.sub_v2_v2(a, b)
    }
  })
  stopwatch("sub_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.sub_v3_v3(a, b)
    }
  })
  stopwatch("sub_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.sub_v4_v4(a, b)
    }
  })
  stopwatch("sub_m4_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let b = context.m4()
      let c = context.sub_m4_m4(a, b)
    }
  })
  stopwatch("mul_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(1)
      let c = context.mul_f32_f32(a, b)
    }
  })
  stopwatch("mul_v2_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.f32(1)
      let c = context.mul_v2_f32(a, b)
    }
  })
  stopwatch("mul_v3_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.f32(1)
      let c = context.mul_v3_f32(a, b)
    }
  })
  stopwatch("mul_v4_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.f32(1)
      let c = context.mul_v4_f32(a, b)
    }
  })
  stopwatch("mul_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.mul_v2_v2(a, b)
    }
  })
  stopwatch("mul_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.mul_v3_v3(a, b)
    }
  })
  stopwatch("mul_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.mul_v4_v4(a, b)
    }
  })
  stopwatch("mul_m4_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let b = context.m4()
      let c = context.mul_m4_m4(a, b)
    }
  })
  stopwatch("div_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(1)
      let c = context.div_f32_f32(a, b)
    }
  })
  stopwatch("div_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.div_v2_v2(a, b)
    }
  })
  stopwatch("div_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.div_v3_v3(a, b)
    }
  })
  stopwatch("div_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.div_v4_v4(a, b)
    }
  })
  stopwatch("div_m4_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let b = context.m4()
      let c = context.div_m4_m4(a, b)
    }
  })
  stopwatch("scale_m4_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let b = context.v3(1, 1, 1)
      let c = context.scale_m4_v3(a, b)
    }
  })
  stopwatch("dot_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.dot_v2_v2(a, b)
    }
  })
  stopwatch("dot_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.dot_v3_v3(a, b)
    }
  })
  stopwatch("dot_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.dot_v4_v4(a, b)
    }
  })
  stopwatch("cross_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.cross_v3_v3(a, b)
    }
  })
  stopwatch("normalize_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let c = context.norm_v2(a)
    }
  })
  stopwatch("normalize_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let c = context.norm_v3(a)
    }
  })
  stopwatch("normalize_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let c = context.norm_v4(a)
    }
  })
  stopwatch("mag_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let c = context.mag_v2(a)
    }
  })
  stopwatch("mag_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let c = context.mag_v3(a)
    }
  })
  stopwatch("mag_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let c = context.mag_v4(a)
    }
  })
  stopwatch("magsq_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let c = context.magsq_v2(a)
    }
  })
  stopwatch("magsq_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let c = context.magsq_v3(a)
    }
  })
  stopwatch("magsq_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let c = context.magsq_v4(a)
    }
  })
  stopwatch("dis_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(1)
      let c = context.dis_f32_f32(a, b)
    }
  })
  stopwatch("dis_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.dis_v2_v2(a, b)
    }
  })
  stopwatch("dis_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.dis_v3_v3(a, b)
    }
  })
  stopwatch("dis_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.dis_v4_v4(a, b)
    }
  })
  stopwatch("dissq_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(1)
      let c = context.dissq_f32_f32(a, b)
    }
  })
  stopwatch("dissq_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.dissq_v2_v2(a, b)
    }
  })
  stopwatch("dissq_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.dissq_v3_v3(a, b)
    }
  })
  stopwatch("dissq_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.dissq_v4_v4(a, b)
    }
  })
  stopwatch("reflect_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(0, 1)
      let c = context.reflect_v2_v2(a, b)
    }
  })
  stopwatch("reflect_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(0, 1, 0)
      let c = context.reflect_v3_v3(a, b)
    }
  })
  stopwatch("negate_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let c = context.negate_f32(a)
    }
  })
  stopwatch("negate_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let c = context.negate_v2(a)
    }
  })
  stopwatch("negate_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let c = context.negate_v3(a)
    }
  })
  stopwatch("negate_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let c = context.negate_v4(a)
    }
  })
  stopwatch("abs_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let c = context.abs_f32(a)
    }
  })
  stopwatch("abs_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let c = context.abs_v2(a)
    }
  })
  stopwatch("abs_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let c = context.abs_v3(a)
    }
  })
  stopwatch("abs_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let c = context.abs_v4(a)
    }
  })
  stopwatch("min_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(1)
      let c = context.min_f32_f32(a, b)
    }
  })
  stopwatch("min_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.min_v2_v2(a, b)
    }
  })
  stopwatch("min_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.min_v3_v3(a, b)
    }
  })
  stopwatch("min_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.min_v4_v4(a, b)
    }
  })
  stopwatch("max_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(1)
      let c = context.max_f32_f32(a, b)
    }
  })
  stopwatch("max_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(1, 1)
      let c = context.max_v2_v2(a, b)
    }
  })
  stopwatch("max_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(1, 1, 1)
      let c = context.max_v3_v3(a, b)
    }
  })
  stopwatch("max_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(1, 1, 1, 1)
      let c = context.max_v4_v4(a, b)
    }
  })
  stopwatch("clamp_f32_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(0)
      let c = context.f32(1)
      let d = context.clamp_f32_f32_f32(a, b, c)
    }
  })
  stopwatch("clamp_v2_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(0, 0)
      let c = context.v2(1, 1)
      let d = context.clamp_v2_v2_v2(a, b, c)
    }
  })
  stopwatch("clamp_v3_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(0, 0, 0)
      let c = context.v3(1, 1, 1)
      let d = context.clamp_v3_v3_v3(a, b, c)
    }
  })
  stopwatch("clamp_v4_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(0, 0, 0, 0)
      let c = context.v4(1, 1, 1, 1)
      let d = context.clamp_v4_v4_v4(a, b, c)
    }
  })
  stopwatch("lerp_f32_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(1)
      let b = context.f32(0)
      let c = context.f32(0.5)
      let d = context.lerp_f32_f32_f32(a, b, c)
    }
  })
  stopwatch("lerp_v2_v2_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.v2(0, 0)
      let c = context.f32(0.5)
      let d = context.lerp_v2_v2_f32(a, b, c)
    }
  })
  stopwatch("lerp_v3_v3_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.v3(0, 0, 0)
      let c = context.f32(0.5)
      let d = context.lerp_v3_v3_f32(a, b, c)
    }
  })
  stopwatch("lerp_v4_v4_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.v4(0, 0, 0, 0)
      let c = context.f32(0.5)
      let d = context.lerp_v4_v4_f32(a, b, c)
    }
  })
  stopwatch("lerp_m4_m4_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let b = context.m4()
      let c = context.f32(0.5)
      let d = context.lerp_m4_m4_f32(a, b, c)
    }
  })
  stopwatch("transform_v2_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.m4()
      let c = context.transform_v2_m4(a, b)
    }
  })
  stopwatch("transform_v3_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.m4()
      let c = context.transform_v3_m4(a, b)
    }
  })
  stopwatch("transform_v4_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.m4()
      let c = context.transform_v4_m4(a, b)
    }
  })
  stopwatch("transform3_v2_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(1, 1)
      let b = context.m4()
      let c = context.transform3_v2_m4(a, b)
    }
  })
  stopwatch("transform3_v3_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(1, 1, 1)
      let b = context.m4()
      let c = context.transform3_v3_m4(a, b)
    }
  })
  stopwatch("transform3_v4_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(1, 1, 1, 1)
      let b = context.m4()
      let c = context.transform3_v4_m4(a, b)
    }
  })
  stopwatch("invert_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let c = context.invert_m4(a)
    }
  })
  stopwatch("determinant_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let c = context.determinant_m4(a)
    }
  })
  stopwatch("transpose_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let c = context.transpose_m4(a)
    }
  })
  stopwatch("m4_identity()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4_identity()
      
    }
  })
  stopwatch("m4_orthographic()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4_orthographic(100, 100, 0.1, 1000)  
    }
  })
  stopwatch("m4_perspective()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4_perspective(45, 1, 0.1, 1000)  
    }
  })
  stopwatch("m4_rotation_x()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(0)
      let c = context.m4_rotationx(a)  
    }
  })
  stopwatch("m4_rotation_y()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(0)
      let c = context.m4_rotationy(a)  
    }
  })
  stopwatch("m4_rotation_z()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(0)
      let c = context.m4_rotationz(a)  
    }
  })
  // stopwatch("m4_lookat()", () => {
  //   for(let i = 0; i < iterations; i++) {
  //     let a = context.v3(0, 0, -10)
  //     let b = context.v3(0, 0, 0)
  //     let c = context.v3(0, 1, 0)
  //     let d = context.m4_lookat(a, b, c)
  //   }
  // })
  stopwatch("m4_scale()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(2, 2, 2)
      let c = context.m4_scale(a)
    }
  })
  stopwatch("m4_translation()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(0, 0, -10)
      let c = context.m4_translation(a)
    }
  })
  stopwatch("clone_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(0)
      let c = context.clone_f32(a)
    }
  })
  stopwatch("clone_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(0, 0)
      let c = context.clone_v2(a)
    }
  })
  stopwatch("clone_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(0, 0, 0)
      let c = context.clone_v3(a)
    }
  })
  stopwatch("clone_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(0, 0, 0, 0)
      let c = context.clone_v4(a)
    }
  })
  stopwatch("clone_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let c = context.clone_m4(a)
    }
  })
  stopwatch("equals_f32_f32()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(0)
      let b = context.f32(0)
      let c = context.equals_f32_f32(a, b)
    }
  })
  stopwatch("equals_v2_v2()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(0, 0)
      let b = context.v2(0, 0)
      let c = context.equals_v2_v2(a, b)
    }
  })
  stopwatch("equals_v3_v3()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(0, 0, 0)
      let b = context.v3(0, 0, 0)
      let c = context.equals_v3_v3(a, b)
    }
  })
  stopwatch("equals_v4_v4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(0, 0, 0, 0)
      let b = context.v4(0, 0, 0, 0)
      let c = context.equals_v4_v4(a, b)
    }
  })
  stopwatch("equals_m4_m4()", () => {
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      let b = context.m4()
      let c = context.equals_m4_m4(a, b)
    }
  })

  stopwatch("store_f32()", () => {
    let out = new Float32Array([0])
    for(let i = 0; i < iterations; i++) {
      let a = context.f32(0)
      context.store_f32(a, out)
    }
  })
  stopwatch("equals_v2()", () => {
    let out = new Float32Array([0, 0])
    for(let i = 0; i < iterations; i++) {
      let a = context.v2(0, 0)
      context.store_v2(a, out)
    }
  })
  stopwatch("store_v3()", () => {
    let out = new Float32Array([0, 0, 0])
    for(let i = 0; i < iterations; i++) {
      let a = context.v3(0, 0, 0)
      context.store_v3(a, out)
    }
  })
  stopwatch("store_v4()", () => {
    let out = new Float32Array([0, 0, 0, 0])
    for(let i = 0; i < iterations; i++) {
      let a = context.v4(0, 0, 0, 0)
      context.store_v4(a, out)
    }
  })
  stopwatch("store_m4()", () => {
    let out = new Float32Array(16)
    for(let i = 0; i < iterations; i++) {
      let a = context.m4()
      context.store_m4(a, out)
    }
  })
}