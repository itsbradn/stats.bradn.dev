<template>
	<div class="content">
		<Loading v-if="loading" />
		<section class="section">
			<div class="section-content" data-type="split" data-size="tall">
				<div class="flex-column flex-content-center max-width-500">
					<h1 class="[ text-primary-500 margin-bottom-16 ]">
						Log In
					</h1>
					<h4
						class="[ text margin-bottom-20 ]"
						data-size="small"
					>
						Enter the details you used to make your account.
					</h4>
					<form id="login-form" v-on:submit.prevent="submitLogin" >
						<div class="form-group" data-type="text">
							<label for="login-username"
								>account username</label
							>
							<input
								v-model="username"
								minlength="4"
								v-on:keyup="isInvalid"
								required
								type="text"
								name="username"
								id="login-username"
								placeholder="a unique username"
							/>
							<label for="login-username" class="error-label" v-if="error && errorField === 'username'">{{ error }}</label>
						</div>
						<div class="form-group" data-type="text">
							<label for="login-password"
								>Password</label
							>
							<input
								v-model="password"
								minlength="8"
								v-on:keyup="isInvalid"
								required
								type="password"
								name="password"
								id="login-password"
								placeholder="account password"
							/>
							<label for="login-password" class="error-label" v-if="error && errorField === 'password'">{{ error }}</label>
						</div>
						<button
							:disabled="invalid"
							class="button"
							data-block="true"
							type="submit"
						>
							Log in
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
	let password = ref("");

	function isInvalid() {
		let valid = true;
		error.value = "";
		errorField.value = "";
		if (!username.value || username.value.length < 5) {
			valid = false;
		}
		if (
			password.value.length < 8
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

	async function submitLogin() {
		try {
			let req = await $fetch("http://localhost:5000/api/v1/auth/login", {
				method: "POST",
				body: {
					username: username.value,
					password: password.value,
				},
			});
			document.getElementById("login-form").classList.add("valid");
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