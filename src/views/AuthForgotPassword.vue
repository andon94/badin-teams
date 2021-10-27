<template>
	<div class="reset-password">
		<div class="form-wrap">
		<ValidationObserver ref="resetForm"
							v-slot="{ invalid }">
			<form class="reset">
				<h4>Forgot your password? Enter your email to reset it</h4>
				<BaseInput :placeholder="'Email'"
									v-model="email"
									rules="required|email"/>
				<BaseButton text="Reset"
										type="submit"
										:disabled="invalid"
										@click="handleReset"/>
				<div class="angle"></div>
			</form>
    </ValidationObserver>
		<div class="background"></div>
		</div>
	</div>
</template>

<script>
import BaseInput from "../components/BaseComponents/BaseInput";
import BaseButton from "../components/BaseComponents/BaseButton";

export default {
	name: "ForgtoPassword",
	data() {
		return {
			email: null
		}
	},
	components: {
			BaseButton,
			BaseInput
	},
	methods: {
		handleReset () {
      this.$refs.resetForm.validate().then(success => {
        if (!success) {
          return
        } else {
          this.reset()
        }
			})
		},
		reset () {
			console.log('ayy')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/auth.scss';
</style>