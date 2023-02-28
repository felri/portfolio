#ifdef GL_ES
precision mediump float;
#endif

#define NUM_OCTAVES 3

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


mat3 rotX(float a){
  float c=cos(a);
  float s=sin(a);
  return mat3(
    1,0,0,
    0,c,-s,
    0,s,c
  );
}
mat3 rotY(float a){
  float c=cos(a);
  float s=sin(a);
  return mat3(
    c,0,-s,
    0,1,0,
    s,0,c
  );
}

float hash(vec2 pos){
  return fract(sin(dot(pos,vec2(12.9898,78.233)))*43758.5453);
}

float noise(vec2 pos){
  vec2 i=floor(pos);
  vec2 f=fract(pos);
  
  vec2 u=f*f*(3.-2.*f);
  
  float a=hash(i+vec2(0.,0.));
  float b=hash(i+vec2(1.,0.));
  float c=hash(i+vec2(0.,1.));
  float d=hash(i+vec2(1.,1.));
  
  return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}

float fbm(vec2 position) {
  float value = 0.0;
  float amplitude = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rotation = mat2(cos(0.4), sin(0.4), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; i++) {

    value += amplitude * noise(position);
    position = rotation * position * 2.0 + shift;
    amplitude *= 0.75;
  }
  
  float sinVal = sin(value * 4.0 + u_time * 0.1) * 0.3;
  float cosVal = cos(value * 8.0 + u_time * 0.2) * 0.2;
  
  return 0.5 + sinVal + cosVal;
}

void main(void){
  vec2 p=(gl_FragCoord.xy*2.-u_resolution.xy)/min(u_resolution.x,u_resolution.y);
  
  float t=u_time*.02;
  
  float time2=3.*t/2.;
  
  vec2 q=vec2(0.);
  q.x=fbm(p+0.*time2);
  q.y=fbm(p+vec2(1.));
  vec2 r=vec2(0.);
  r.x=fbm(p+1.*q+vec2(1.7,9.2)+.17*time2);
  r.y=fbm(p+1.*q+vec2(1.3,2.8)+.126*time2);
  float f=fbm(p+r);
  vec3 color=mix(
    vec3(0.),
    vec3(.6,.6,.8),
    clamp(f*f*f*f+.4*f*f*f+.2*f*f+.2*cos(u_time * .5),0.,1.)
  );
  
  color=mix(
    color,
    vec3(0.),
    clamp(length(q),0.,1.)
  );
  
  color=mix(
    color,
    vec3(.1),
    clamp(length(r.x),0.,-2.)
  );
  
  // vec3 waveColor=mix(
  //   vec3(.43,.43,.59),
  //   vec3(0.),
  //   1.-f*f*f*f*f*f*f*f
  // );
  
  vec3 oceanColor=mix(
    vec3(.5,.5,.6),
    vec3(.1,.5,.5),
    clamp(f*f*f*f+.4*f*f*f+.2*f*f+.2*sin(u_time*.2),0.,1.)
  );
  
  gl_FragColor=vec4(color,1.);
}