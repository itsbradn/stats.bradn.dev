<template>
    <div class="content">
        <section class="section">
            <div data-type="center" class="section-content padding-56">
                        <img src="~assets/svgs/mailbox-art.svg?data" class="max-width-350 margin-bottom-32" />
                        <h2 class="text-primary-500 margin-bottom-8">Email Sent!</h2>
                        <p class="text max-width-550 margin-bottom-24 text-align-center" data-size="M">Please verify the email you entered during registration by entering the code below or clicking on the link in your email.</p>
                        <form class="width-550 margin-bottom-16" v-on:submit.prevent="submitCode">
						<div
							class="form-group margin-bottom-20"
							data-type="text"
						>
							<label for="submit-code"
								>Verification Code</label
							>
							<input
                                v-model="code"
								minlength="6"
								maxlength="6"
								required
								type="text"
								name="code"
								id="submit-code"
								placeholder="6 digit code"
							/>
							<label for="submit-code" class="error-label" v-if="error">{{ error }}</label>
						</div>
						<button
							class="button"
							data-block="true"
							type="submit"
								:class="
										code.length === 6
											? ''
											: 'disabled'
								"
						>
							Submit
						</button>
                        </form>
                        <p class="text margin-bottom-16" data-size="M">Didn't get the code? <a @click="refreshCode">Resend</a></p>
                        <p class="text" data-size="M"><a href="">Contact Support</a></p>
            </div>
        </section>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ["auth"],
    });

    let code = ref("");
    let error = ref("");

    async function refreshCode() {
        const req = await $fetch('http://localhost:5000/api/v1/account/resend', {
				method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        });

        if (req.success === false) {
            error.value = "Something went wrong refreshing your code."
            code.value = "";
            return;
        }
    }

    async function submitCode() {
        const req = await $fetch('http://localhost:5000/api/v1/account/verify', {
				method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: {
                code: code.value,
            }
        });

        if (req.success === false) {
            error.value = "Code was incorrect or something went wrong"
            code.value = "";
            return;
        }

        code.value = "";
        navigateTo("/panel");
    }
</script>