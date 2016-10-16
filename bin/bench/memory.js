"use strict";
var fpv32 = require("../src/fpv32");
var stopwatch_1 = require("./stopwatch");
var memory = new fpv32.Memory();
var context = new fpv32.Context(memory);
function run(iterations) {
    console.log("benchmark : Memory");
    console.log("iterations: " + iterations);
    stopwatch_1.stopwatch("f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(0);
        }
    });
    stopwatch_1.stopwatch("v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(0, 0);
        }
    });
    stopwatch_1.stopwatch("v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(0, 0, 0);
        }
    });
    stopwatch_1.stopwatch("v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(0, 0, 0, 1);
        }
    });
    stopwatch_1.stopwatch("m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(0, 0, 0, 1);
        }
    });
    stopwatch_1.stopwatch("add_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(1);
            var c = context.add_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("add_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.add_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("add_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.add_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("add_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.add_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("add_m4_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var b = context.m4();
            var c = context.add_m4_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("sub_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(1);
            var c = context.sub_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("sub_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.sub_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("sub_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.sub_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("sub_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.sub_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("sub_m4_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var b = context.m4();
            var c = context.sub_m4_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("mul_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(1);
            var c = context.mul_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("mul_v2_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.f32(1);
            var c = context.mul_v2_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("mul_v3_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.f32(1);
            var c = context.mul_v3_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("mul_v4_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.f32(1);
            var c = context.mul_v4_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("mul_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.mul_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("mul_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.mul_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("mul_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.mul_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("mul_m4_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var b = context.m4();
            var c = context.mul_m4_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("div_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(1);
            var c = context.div_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("div_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.div_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("div_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.div_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("div_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.div_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("div_m4_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var b = context.m4();
            var c = context.div_m4_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("scale_m4_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var b = context.v3(1, 1, 1);
            var c = context.scale_m4_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("dot_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.dot_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("dot_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.dot_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("dot_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.dot_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("cross_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.cross_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("normalize_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var c = context.norm_v2(a);
        }
    });
    stopwatch_1.stopwatch("normalize_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var c = context.norm_v3(a);
        }
    });
    stopwatch_1.stopwatch("normalize_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var c = context.norm_v4(a);
        }
    });
    stopwatch_1.stopwatch("mag_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var c = context.mag_v2(a);
        }
    });
    stopwatch_1.stopwatch("mag_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var c = context.mag_v3(a);
        }
    });
    stopwatch_1.stopwatch("mag_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var c = context.mag_v4(a);
        }
    });
    stopwatch_1.stopwatch("magsq_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var c = context.magsq_v2(a);
        }
    });
    stopwatch_1.stopwatch("magsq_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var c = context.magsq_v3(a);
        }
    });
    stopwatch_1.stopwatch("magsq_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var c = context.magsq_v4(a);
        }
    });
    stopwatch_1.stopwatch("dis_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(1);
            var c = context.dis_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("dis_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.dis_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("dis_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.dis_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("dis_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.dis_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("dissq_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(1);
            var c = context.dissq_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("dissq_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.dissq_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("dissq_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.dissq_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("dissq_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.dissq_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("reflect_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(0, 1);
            var c = context.reflect_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("reflect_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(0, 1, 0);
            var c = context.reflect_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("negate_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var c = context.negate_f32(a);
        }
    });
    stopwatch_1.stopwatch("negate_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var c = context.negate_v2(a);
        }
    });
    stopwatch_1.stopwatch("negate_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var c = context.negate_v3(a);
        }
    });
    stopwatch_1.stopwatch("negate_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var c = context.negate_v4(a);
        }
    });
    stopwatch_1.stopwatch("abs_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var c = context.abs_f32(a);
        }
    });
    stopwatch_1.stopwatch("abs_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var c = context.abs_v2(a);
        }
    });
    stopwatch_1.stopwatch("abs_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var c = context.abs_v3(a);
        }
    });
    stopwatch_1.stopwatch("abs_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var c = context.abs_v4(a);
        }
    });
    stopwatch_1.stopwatch("min_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(1);
            var c = context.min_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("min_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.min_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("min_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.min_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("min_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.min_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("max_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(1);
            var c = context.max_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("max_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(1, 1);
            var c = context.max_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("max_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(1, 1, 1);
            var c = context.max_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("max_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(1, 1, 1, 1);
            var c = context.max_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("clamp_f32_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(0);
            var c = context.f32(1);
            var d = context.clamp_f32_f32_f32(a, b, c);
        }
    });
    stopwatch_1.stopwatch("clamp_v2_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(0, 0);
            var c = context.v2(1, 1);
            var d = context.clamp_v2_v2_v2(a, b, c);
        }
    });
    stopwatch_1.stopwatch("clamp_v3_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(0, 0, 0);
            var c = context.v3(1, 1, 1);
            var d = context.clamp_v3_v3_v3(a, b, c);
        }
    });
    stopwatch_1.stopwatch("clamp_v4_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(0, 0, 0, 0);
            var c = context.v4(1, 1, 1, 1);
            var d = context.clamp_v4_v4_v4(a, b, c);
        }
    });
    stopwatch_1.stopwatch("lerp_f32_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(1);
            var b = context.f32(0);
            var c = context.f32(0.5);
            var d = context.lerp_f32_f32_f32(a, b, c);
        }
    });
    stopwatch_1.stopwatch("lerp_v2_v2_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.v2(0, 0);
            var c = context.f32(0.5);
            var d = context.lerp_v2_v2_f32(a, b, c);
        }
    });
    stopwatch_1.stopwatch("lerp_v3_v3_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.v3(0, 0, 0);
            var c = context.f32(0.5);
            var d = context.lerp_v3_v3_f32(a, b, c);
        }
    });
    stopwatch_1.stopwatch("lerp_v4_v4_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.v4(0, 0, 0, 0);
            var c = context.f32(0.5);
            var d = context.lerp_v4_v4_f32(a, b, c);
        }
    });
    stopwatch_1.stopwatch("lerp_m4_m4_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var b = context.m4();
            var c = context.f32(0.5);
            var d = context.lerp_m4_m4_f32(a, b, c);
        }
    });
    stopwatch_1.stopwatch("transform_v2_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.m4();
            var c = context.transform_v2_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("transform_v3_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.m4();
            var c = context.transform_v3_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("transform_v4_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.m4();
            var c = context.transform_v4_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("transform3_v2_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(1, 1);
            var b = context.m4();
            var c = context.transform3_v2_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("transform3_v3_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(1, 1, 1);
            var b = context.m4();
            var c = context.transform3_v3_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("transform3_v4_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(1, 1, 1, 1);
            var b = context.m4();
            var c = context.transform3_v4_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("invert_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var c = context.invert_m4(a);
        }
    });
    stopwatch_1.stopwatch("determinant_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var c = context.determinant_m4(a);
        }
    });
    stopwatch_1.stopwatch("transpose_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var c = context.transpose_m4(a);
        }
    });
    stopwatch_1.stopwatch("m4_identity()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4_identity();
        }
    });
    stopwatch_1.stopwatch("m4_orthographic()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4_orthographic(100, 100, 0.1, 1000);
        }
    });
    stopwatch_1.stopwatch("m4_perspective()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4_perspective(45, 1, 0.1, 1000);
        }
    });
    stopwatch_1.stopwatch("m4_rotation_x()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(0);
            var c = context.m4_rotationx(a);
        }
    });
    stopwatch_1.stopwatch("m4_rotation_y()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(0);
            var c = context.m4_rotationy(a);
        }
    });
    stopwatch_1.stopwatch("m4_rotation_z()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(0);
            var c = context.m4_rotationz(a);
        }
    });
    // stopwatch("m4_lookat()", () => {
    //   for(let i = 0; i < iterations; i++) {
    //     let a = context.v3(0, 0, -10)
    //     let b = context.v3(0, 0, 0)
    //     let c = context.v3(0, 1, 0)
    //     let d = context.m4_lookat(a, b, c)
    //   }
    // })
    stopwatch_1.stopwatch("m4_scale()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(2, 2, 2);
            var c = context.m4_scale(a);
        }
    });
    stopwatch_1.stopwatch("m4_translation()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(0, 0, -10);
            var c = context.m4_translation(a);
        }
    });
    stopwatch_1.stopwatch("clone_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(0);
            var c = context.clone_f32(a);
        }
    });
    stopwatch_1.stopwatch("clone_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(0, 0);
            var c = context.clone_v2(a);
        }
    });
    stopwatch_1.stopwatch("clone_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(0, 0, 0);
            var c = context.clone_v3(a);
        }
    });
    stopwatch_1.stopwatch("clone_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(0, 0, 0, 0);
            var c = context.clone_v4(a);
        }
    });
    stopwatch_1.stopwatch("clone_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var c = context.clone_m4(a);
        }
    });
    stopwatch_1.stopwatch("equals_f32_f32()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(0);
            var b = context.f32(0);
            var c = context.equals_f32_f32(a, b);
        }
    });
    stopwatch_1.stopwatch("equals_v2_v2()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(0, 0);
            var b = context.v2(0, 0);
            var c = context.equals_v2_v2(a, b);
        }
    });
    stopwatch_1.stopwatch("equals_v3_v3()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(0, 0, 0);
            var b = context.v3(0, 0, 0);
            var c = context.equals_v3_v3(a, b);
        }
    });
    stopwatch_1.stopwatch("equals_v4_v4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(0, 0, 0, 0);
            var b = context.v4(0, 0, 0, 0);
            var c = context.equals_v4_v4(a, b);
        }
    });
    stopwatch_1.stopwatch("equals_m4_m4()", function () {
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            var b = context.m4();
            var c = context.equals_m4_m4(a, b);
        }
    });
    stopwatch_1.stopwatch("store_f32()", function () {
        var out = new Float32Array([0]);
        for (var i = 0; i < iterations; i++) {
            var a = context.f32(0);
            context.store_f32(a, out);
        }
    });
    stopwatch_1.stopwatch("equals_v2()", function () {
        var out = new Float32Array([0, 0]);
        for (var i = 0; i < iterations; i++) {
            var a = context.v2(0, 0);
            context.store_v2(a, out);
        }
    });
    stopwatch_1.stopwatch("store_v3()", function () {
        var out = new Float32Array([0, 0, 0]);
        for (var i = 0; i < iterations; i++) {
            var a = context.v3(0, 0, 0);
            context.store_v3(a, out);
        }
    });
    stopwatch_1.stopwatch("store_v4()", function () {
        var out = new Float32Array([0, 0, 0, 0]);
        for (var i = 0; i < iterations; i++) {
            var a = context.v4(0, 0, 0, 0);
            context.store_v4(a, out);
        }
    });
    stopwatch_1.stopwatch("store_m4()", function () {
        var out = new Float32Array(16);
        for (var i = 0; i < iterations; i++) {
            var a = context.m4();
            context.store_m4(a, out);
        }
    });
}
exports.run = run;
