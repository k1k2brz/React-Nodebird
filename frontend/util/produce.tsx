// Next사용이 익스11에서 동작하기 위한 immer설정
// ts해결 안됨
import { enableES5, produce } from 'immer';

export default (...args) => {
    enableES5();
    // return produce(...args);
};