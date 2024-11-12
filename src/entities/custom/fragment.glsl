uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform vec2 pixels;
uniform vec2 uvRate1;
uniform vec2 accel;
uniform vec4 vPosition;

vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b*cos(6.28318*(c*t+d));
}

vec3 mpalette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263, 0.416, 0.557);
  return a + b*cos(6.28318*(c*t+d));
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2. - pixels.xy) / pixels.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for (float i=0.0; i < 4.0; i++){
      uv = fract(uv * 1.5) - 0.5;
      float d = length(uv) * exp(-length(uv0));

      vec3 col = mpalette(length(uv0) + i*4. + time);

      d = sin(d*8. + time)/8.;
      d = abs(d);
      d = pow(0.01 / d, 1.2);
      finalColor  += col * d;
    }


    gl_FragColor = vec4(finalColor, 1.);
}
