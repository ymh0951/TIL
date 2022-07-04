// 테스트 유틸 라이브러리 로딩
import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';
// 컴포넌트 로딩
describe('SignupForm.vue', () => {
  test('ID와 PW가 입력되지 않으면 회원가입버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
          password: '',
          nickname: '',
        };
      },
    });
    const warningText = wrapper.find('.btn');
    expect(warningText.exists()).toBeTruthy();
  });
});
