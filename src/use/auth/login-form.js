import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm () {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Обязательное поле')
      .email('Введите корректный Email')
  )

  const MIN_P_LENGTH = 6

  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Обязательное поле')
      .min(MIN_P_LENGTH, `Не менее ${MIN_P_LENGTH} символов.`)
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, val => {
    if (val) {
      setTimeout(() => (submitCount.value = 0), 4000)
    }
  })

  const onSubmit = handleSubmit(async values => {
    console.log('Form: ', values)
    try {
      await store.dispatch('auth/login', values)
      router.push('/')
    } catch (e) {
    }
  })

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts
  }
}
