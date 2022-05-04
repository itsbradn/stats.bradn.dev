<template>
	<div class="content">
		<Loading v-if="loading" />
		<section class="section">
			<div class="section-content" data-type="split" data-size="tall">
				<div class="flex-column flex-content-center max-width-500">
					<h1 class="[ text-primary-500 margin-bottom-16 ]">
						Register
					</h1>
					<h4
						class="[ text margin-bottom-20 ]"
						data-size="small"
					>
						Get started browsing our platform and customizing
						your profile by registering below!
					</h4>
					<form id="register-form" v-on:submit.prevent="submitRegister" >
						<div class="form-group" data-type="text">
							<label for="register-username"
								>Username</label
							>
							<input
								v-model="username"
								minlength="4"
								v-on:keyup="isInvalid"
								required
								type="text"
								name="username"
								id="register-username"
								placeholder="a unique username"
							/>
							<label for="register-username" class="error-label" v-if="error && errorField === 'username'">{{ error }}</label>
						</div>
						<div class="form-group" data-type="text">
							<label for="register-email"
								>Your e-mail</label
							>
							<input
								v-model="email"
								v-on:keyup="isInvalid"
								required
								type="email"
								name="email"
								id="register-email"
								placeholder="name@example.com"
							/>
							<label for="register-email" class="error-label" v-if="error && errorField === 'email'">{{ error }}</label>
						</div>
						<div class="form-group" data-type="text">
							<label for="register-password"
								>Password</label
							>
							<input
								v-model="password"
								minlength="8"
								:class="
									password && passwordConfirm
										? password === passwordConfirm
											? ''
											: 'invalid'
										: ''
								"
								v-on:keyup="isInvalid"
								required
								type="password"
								name="password"
								id="register-password"
								placeholder="minimum of 8 characters"
							/>
							<label for="register-password" class="error-label" v-if="error && errorField === 'password'">{{ error }}</label>
						</div>
						<div
							class="form-group margin-bottom-20"
							data-type="text"
						>
							<label for="register-password-confirm"
								>Confirm Password</label
							>
							<input
								v-model="passwordConfirm"
								minlength="8"
								:class="
									password && passwordConfirm
										? password === passwordConfirm
											? ''
											: 'invalid'
										: ''
								"
								v-on:keyup="isInvalid"
								required
								type="password"
								name="password-confirm"
								id="register-password-confirm"
								placeholder="must match password"
							/>
						</div>
						<button
							:disabled="invalid"
							class="button"
							data-block="true"
							type="submit"
						>
							Register
						</button>
					</form>
				</div>
				<div
					class="
						flex-column flex-content-center flex-items-center
					"
				>
					<StatDisplay />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	const user = useUser();
	let loading = ref(false);
	let invalid = ref(true);
	let error = ref("");
	let errorField = ref("");
	let username = ref("");
	let email = ref("");
	let password = ref("");
	let passwordConfirm = ref("");

	function isInvalid() {
		let valid = true;
		error.value = "";
		errorField.value = "";
		if (!username.value || username.value.length < 5) {
			valid = false;
		}
		if (
			!email.value ||
			!email.value.includes("@") ||
			!email.value.includes(".")
		) {
			valid = false;
		}
		if (
			password.value.length < 8 ||
			password.value !== passwordConfirm.value
		) {
			valid = false;
		}
		if (valid) {
			invalid.value = false;
			return;
		}
		invalid.value = true;
		return;
	}

	function insertAfter(referenceNode, newNode) {
//   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	referenceNode.parentNode.appendChild(newNode);
}

	async function submitRegister() {
		try {
			let req = await $fetch("http://localhost:5000/api/v1/auth/register", {
				method: "POST",
				body: {
					username: username.value,
					email: email.value,
					password: password.value,
					confirmPassword: passwordConfirm.value,
				},
			});
			document.getElementById("register-form").classList.add("valid");
			localStorage.setItem("auth", req.token);
			let res = await auth(req.token);
			user.value = res.data;
			return navigateTo("/panel");
		} catch (e) {
			invalid.value = true;
			error.value = e.response._data.error;
			errorField.value = e.response._data.fields;
			
		}
	}
</script>