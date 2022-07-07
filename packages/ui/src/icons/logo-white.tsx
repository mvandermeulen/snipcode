import { IconProps } from '../typings/components';

const LogoIcon = ({ height = 32, width = 160 }: IconProps) => {
  return (
    /*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 712.44 154" fill="#1a1a1a" height={height} width={width}>
      <g>
        <g>
          <path d="M73.5,75.67a7.18,7.18,0,1,1-7.18,7.18,7.19,7.19,0,0,1,7.18-7.18m0-5A12.17,12.17,0,1,0,85.67,82.85,12.15,12.15,0,0,0,73.5,70.69Z" />
          <path d="M109,60.24c-2-1.31-4-2.53-6.1-3.74-4.53-18.85-14.16-34.3-28-50C63.09,21.71,43,44.14,53,93a37.89,37.89,0,0,0,4.65-.6l-6.3,20.72q-6-9-12.08-18c1.55-.27,3.1-.45,4.63-.74-.33-3.67-1.22-8.65-1.39-12.12C40.46,46.56,53.66,20.32,74.84,0c8,7.24,24,24.71,30.33,43.87A95.34,95.34,0,0,1,109,60.24Z" />
          <path d="M35.09,66.62c-.14,2.37-.2,4.73-.19,7.16C20.84,87.13,12.28,103.19,5.64,123c19,2.61,48.52,8.82,85.79-24.29A38.57,38.57,0,0,0,88.59,95l21.09-4.9c-3.19,6.48-6.36,13-9.53,19.45-1-1.21-1.94-2.46-3-3.64-3,2.12-6.88,5.38-9.81,7.26C57.52,132.82,28.19,134.51,0,126.32c2.28-10.53,9.41-33.11,22.83-48.19A95.68,95.68,0,0,1,35.09,66.62Z" />
          <path d="M78.18,125.5c2.12-1.06,4.19-2.2,6.29-3.41,18.59,5.5,36.78,4.88,57.29.7C134.5,105,125.14,76.37,77.83,60.65A41.56,41.56,0,0,0,76,65L61.24,49.16c7.2-.48,14.42-1,21.61-1.48-.55,1.48-1.17,2.91-1.68,4.38,3.34,1.56,8.1,3.27,11.19,4.86C124.29,73,140.42,97.54,147.43,126c-10.27,3.29-33.39,8.41-53.16,4.32A94.37,94.37,0,0,1,78.18,125.5Z" />
          <path d="M100.09,24.21A65,65,0,0,1,138,92.81q2.07,3.36,3.89,6.91A70.22,70.22,0,0,0,95.1,16.83C96.8,19.15,98.47,21.62,100.09,24.21Z" />
          <path d="M112.49,135.93a65,65,0,0,1-79.2-1c-.81,0-1.62.06-2.44.06-1.81,0-3.65-.06-5.48-.16a70.12,70.12,0,0,0,95.68.57C118.29,135.69,115.42,135.86,112.49,135.93Z" />
          <path d="M8.75,91.15A65.13,65.13,0,0,1,52,22.18q1.93-3.34,4.14-6.59A70.22,70.22,0,0,0,4.88,98.87C6,96.33,7.33,93.74,8.75,91.15Z" />
          <path d="M196.82,71.54q0,3.72,10.56,6.38a50.79,50.79,0,0,1,6.73,1.92,29.69,29.69,0,0,1,6.1,3.13,14.19,14.19,0,0,1,4.81,5.4,16.66,16.66,0,0,1,1.74,7.77q0,8.94-6.73,13.81t-16.59,4.76q-17.88,0-24.38-13.81l13-7.31q2.67,7.55,11.38,7.54,8,0,8-5,0-3.7-10.56-6.38c-2.63-.7-4.87-1.39-6.73-2.09a33.81,33.81,0,0,1-6-3.08,13.57,13.57,0,0,1-4.94-5.22,15.81,15.81,0,0,1-1.68-7.48q0-8.6,6.27-13.46t15.78-5a26.25,26.25,0,0,1,12.88,3.19,23.22,23.22,0,0,1,9.17,9.11l-12.76,7a9.56,9.56,0,0,0-9.29-5.92,8.2,8.2,0,0,0-4.81,1.34A4,4,0,0,0,196.82,71.54Z" />
          <path d="M268.66,53.44q9.63,0,15.66,6.38,6.27,6.5,6.27,17.64v35.63h-15V79.31c0-3.79-1-6.73-3.07-8.82a11.31,11.31,0,0,0-8.42-3.13q-5.91,0-9.34,3.66t-3.42,10.73v31.34h-15V31.85h15V61.56Q256.7,53.43,268.66,53.44Z" />
          <path d="M347.46,61.91V55.06h15v58h-15v-6.85q-6.73,8.48-18.92,8.47a26.54,26.54,0,0,1-20-8.82,31,31,0,0,1-8.24-21.82,30.87,30.87,0,0,1,8.24-21.7q8.35-8.94,20-8.93Q340.72,53.44,347.46,61.91Zm-27.62,34a16.82,16.82,0,0,0,23,0,16,16,0,0,0,4.65-11.84,15.64,15.64,0,0,0-4.65-11.72,16.53,16.53,0,0,0-23,0,15.86,15.86,0,0,0-4.53,11.72A16.24,16.24,0,0,0,319.84,95.91Z" />
          <path d="M391,55.06V65a15.47,15.47,0,0,1,6.74-8.3,20.88,20.88,0,0,1,10.91-2.84V70.61a17.05,17.05,0,0,0-12.31,2.79c-3.55,2.4-5.34,6.38-5.34,11.95v27.74H376v-58Z" />
          <path d="M424.74,48.1a9.31,9.31,0,0,1-9.16-9.17,9,9,0,0,1,2.72-6.5,8.72,8.72,0,0,1,6.44-2.79,8.84,8.84,0,0,1,6.56,2.79,9,9,0,0,1,2.73,6.5,8.8,8.8,0,0,1-2.73,6.44A8.93,8.93,0,0,1,424.74,48.1Zm7.55,65h-15v-58h15Z" />
          <path d="M478.24,53.44q9.64,0,15.67,6.38,6.27,6.5,6.27,17.64v35.63h-15V79.31q0-5.69-3.08-8.82a11.27,11.27,0,0,0-8.41-3.13q-5.93,0-9.34,3.66T461,81.75v31.34H446v-58h15v6.5Q466.29,53.43,478.24,53.44Z" />
          <path d="M557.39,62.25V55.06H572V110.3q0,13.35-8.94,20.54t-21.35,7.08q-19.74,0-27.51-14.16L527,116.45q4.29,8.13,15.2,8.13,7.08,0,11.14-3.72t4.06-10.56V104q-6.61,8.82-18.57,8.82a27.67,27.67,0,0,1-20.65-8.58,29.84,29.84,0,0,1-8.24-21.13,29.22,29.22,0,0,1,8.35-21,27.37,27.37,0,0,1,20.54-8.7Q550.77,53.44,557.39,62.25Zm-4.58,32.33a15.3,15.3,0,0,0,4.58-11.44,14.62,14.62,0,0,0-4.64-11.25,15.72,15.72,0,0,0-11.61-4.53,16.35,16.35,0,0,0-11.72,4.53,14.81,14.81,0,0,0-4.52,11.25,15.26,15.26,0,0,0,4.58,11.44,17.48,17.48,0,0,0,23.33,0Z" />
          <path d="M629.69,61.91V55.06h15v58h-15v-6.85q-6.74,8.48-18.91,8.47a26.56,26.56,0,0,1-20-8.82,31,31,0,0,1-8.24-21.82,30.87,30.87,0,0,1,8.24-21.7q8.36-8.94,20-8.93Q623,53.44,629.69,61.91Zm-27.62,34a16.84,16.84,0,0,0,23,0,16,16,0,0,0,4.64-11.84,15.67,15.67,0,0,0-4.64-11.72,16.55,16.55,0,0,0-23,0,15.86,15.86,0,0,0-4.52,11.72A16.23,16.23,0,0,0,602.07,95.91Z" />
          <path d="M690.5,53.44q9.63,0,15.67,6.38,6.27,6.5,6.27,17.64v35.63h-15V79.31q0-5.69-3.07-8.82A11.29,11.29,0,0,0,686,67.36q-5.93,0-9.35,3.66t-3.42,10.73v31.34h-15v-58h15v6.5Q678.55,53.43,690.5,53.44Z" />
        </g>
      </g>
    </svg>*/
    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 712.44 154" height={height} width={width}>
      <g>
        <g>
          <path d="M73.5,75.67a7.18,7.18,0,1,1-7.18,7.18,7.19,7.19,0,0,1,7.18-7.18m0-5A12.17,12.17,0,1,0,85.67,82.85,12.15,12.15,0,0,0,73.5,70.69Z" />
          <path d="M109,60.24c-2-1.31-4-2.53-6.1-3.74-4.53-18.85-14.16-34.3-28-50C63.09,21.71,43,44.14,53,93a37.89,37.89,0,0,0,4.65-.6l-6.3,20.72q-6-9-12.08-18c1.55-.27,3.1-.45,4.63-.74-.33-3.67-1.22-8.65-1.39-12.12C40.46,46.56,53.66,20.32,74.84,0c8,7.24,24,24.71,30.33,43.87A95.34,95.34,0,0,1,109,60.24Z" />
          <path d="M35.09,66.62c-.14,2.37-.2,4.73-.19,7.16C20.84,87.13,12.28,103.19,5.64,123c19,2.61,48.52,8.82,85.79-24.29A38.57,38.57,0,0,0,88.59,95l21.09-4.9c-3.19,6.48-6.36,13-9.53,19.45-1-1.21-1.94-2.46-3-3.64-3,2.12-6.88,5.38-9.81,7.26C57.52,132.82,28.19,134.51,0,126.32c2.28-10.53,9.41-33.11,22.83-48.19A95.68,95.68,0,0,1,35.09,66.62Z" />
          <path d="M78.18,125.5c2.12-1.06,4.19-2.2,6.29-3.41,18.59,5.5,36.78,4.88,57.29.7C134.5,105,125.14,76.37,77.83,60.65A41.56,41.56,0,0,0,76,65L61.24,49.16c7.2-.48,14.42-1,21.61-1.48-.55,1.48-1.17,2.91-1.68,4.38,3.34,1.56,8.1,3.27,11.19,4.86C124.29,73,140.42,97.54,147.43,126c-10.27,3.29-33.39,8.41-53.16,4.32A94.37,94.37,0,0,1,78.18,125.5Z" />
          <path d="M100.09,24.21A65,65,0,0,1,138,92.81q2.07,3.36,3.89,6.91A70.22,70.22,0,0,0,95.1,16.83C96.8,19.15,98.47,21.62,100.09,24.21Z" />
          <path d="M112.49,135.93a65,65,0,0,1-79.2-1c-.81,0-1.62.06-2.44.06-1.81,0-3.65-.06-5.48-.16a70.12,70.12,0,0,0,95.68.57C118.29,135.69,115.42,135.86,112.49,135.93Z" />
          <path d="M8.75,91.15A65.13,65.13,0,0,1,52,22.18q1.93-3.34,4.14-6.59A70.22,70.22,0,0,0,4.88,98.87C6,96.33,7.33,93.74,8.75,91.15Z" />
          <path d="M196.82,71.54q0,3.72,10.56,6.38a50.79,50.79,0,0,1,6.73,1.92,29.69,29.69,0,0,1,6.1,3.13,14.19,14.19,0,0,1,4.81,5.4,16.66,16.66,0,0,1,1.74,7.77q0,8.94-6.73,13.81t-16.59,4.76q-17.88,0-24.38-13.81l13-7.31q2.67,7.55,11.38,7.54,8,0,8-5,0-3.7-10.56-6.38c-2.63-.7-4.87-1.39-6.73-2.09a33.81,33.81,0,0,1-6-3.08,13.57,13.57,0,0,1-4.94-5.22,15.81,15.81,0,0,1-1.68-7.48q0-8.6,6.27-13.46t15.78-5a26.25,26.25,0,0,1,12.88,3.19,23.22,23.22,0,0,1,9.17,9.11l-12.76,7a9.56,9.56,0,0,0-9.29-5.92,8.2,8.2,0,0,0-4.81,1.34A4,4,0,0,0,196.82,71.54Z" />
          <path d="M268.66,53.44q9.63,0,15.66,6.38,6.27,6.5,6.27,17.64v35.63h-15V79.31c0-3.79-1-6.73-3.07-8.82a11.31,11.31,0,0,0-8.42-3.13q-5.91,0-9.34,3.66t-3.42,10.73v31.34h-15V31.85h15V61.56Q256.7,53.43,268.66,53.44Z" />
          <path d="M347.46,61.91V55.06h15v58h-15v-6.85q-6.73,8.48-18.92,8.47a26.54,26.54,0,0,1-20-8.82,31,31,0,0,1-8.24-21.82,30.87,30.87,0,0,1,8.24-21.7q8.35-8.94,20-8.93Q340.72,53.44,347.46,61.91Zm-27.62,34a16.82,16.82,0,0,0,23,0,16,16,0,0,0,4.65-11.84,15.64,15.64,0,0,0-4.65-11.72,16.53,16.53,0,0,0-23,0,15.86,15.86,0,0,0-4.53,11.72A16.24,16.24,0,0,0,319.84,95.91Z" />
          <path d="M391,55.06V65a15.47,15.47,0,0,1,6.74-8.3,20.88,20.88,0,0,1,10.91-2.84V70.61a17.05,17.05,0,0,0-12.31,2.79c-3.55,2.4-5.34,6.38-5.34,11.95v27.74H376v-58Z" />
          <path d="M424.74,48.1a9.31,9.31,0,0,1-9.16-9.17,9,9,0,0,1,2.72-6.5,8.72,8.72,0,0,1,6.44-2.79,8.84,8.84,0,0,1,6.56,2.79,9,9,0,0,1,2.73,6.5,8.8,8.8,0,0,1-2.73,6.44A8.93,8.93,0,0,1,424.74,48.1Zm7.55,65h-15v-58h15Z" />
          <path d="M478.24,53.44q9.64,0,15.67,6.38,6.27,6.5,6.27,17.64v35.63h-15V79.31q0-5.69-3.08-8.82a11.27,11.27,0,0,0-8.41-3.13q-5.93,0-9.34,3.66T461,81.75v31.34H446v-58h15v6.5Q466.29,53.43,478.24,53.44Z" />
          <path d="M557.39,62.25V55.06H572V110.3q0,13.35-8.94,20.54t-21.35,7.08q-19.74,0-27.51-14.16L527,116.45q4.29,8.13,15.2,8.13,7.08,0,11.14-3.72t4.06-10.56V104q-6.61,8.82-18.57,8.82a27.67,27.67,0,0,1-20.65-8.58,29.84,29.84,0,0,1-8.24-21.13,29.22,29.22,0,0,1,8.35-21,27.37,27.37,0,0,1,20.54-8.7Q550.77,53.44,557.39,62.25Zm-4.58,32.33a15.3,15.3,0,0,0,4.58-11.44,14.62,14.62,0,0,0-4.64-11.25,15.72,15.72,0,0,0-11.61-4.53,16.35,16.35,0,0,0-11.72,4.53,14.81,14.81,0,0,0-4.52,11.25,15.26,15.26,0,0,0,4.58,11.44,17.48,17.48,0,0,0,23.33,0Z" />
          <path d="M629.69,61.91V55.06h15v58h-15v-6.85q-6.74,8.48-18.91,8.47a26.56,26.56,0,0,1-20-8.82,31,31,0,0,1-8.24-21.82,30.87,30.87,0,0,1,8.24-21.7q8.36-8.94,20-8.93Q623,53.44,629.69,61.91Zm-27.62,34a16.84,16.84,0,0,0,23,0,16,16,0,0,0,4.64-11.84,15.67,15.67,0,0,0-4.64-11.72,16.55,16.55,0,0,0-23,0,15.86,15.86,0,0,0-4.52,11.72A16.23,16.23,0,0,0,602.07,95.91Z" />
          <path d="M690.5,53.44q9.63,0,15.67,6.38,6.27,6.5,6.27,17.64v35.63h-15V79.31q0-5.69-3.07-8.82A11.29,11.29,0,0,0,686,67.36q-5.93,0-9.35,3.66t-3.42,10.73v31.34h-15v-58h15v6.5Q678.55,53.43,690.5,53.44Z" />
        </g>
      </g>
    </svg>
  );
};

export default LogoIcon;
