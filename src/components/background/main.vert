uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}