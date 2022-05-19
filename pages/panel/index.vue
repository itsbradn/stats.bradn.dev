<template>
	<div class="panel">
		<h2 class="[ text-primary-500 ]">Dashboard</h2>
		<div class="panel__content">
			<div>
				<div class="card">
					<div class="card__content" data-type="split">
						<div class="icon">
							<span data-bg-color="orange" class="material-symbols-rounded"
								>visibility</span
							>
						</div>
						<div>
							<h4
								class="[ subtitle text-primary-500 ]"
								data-size="small"
							>
								24,590
							</h4>
							<p class="[ text ]" data-size="M">
								Monthly Views
							</p>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card__content" data-type="split">
						<div class="icon">
							<span class="material-symbols-rounded"
								>group</span
							>
						</div>
						<div>
							<h4
								class="[ subtitle text-primary-500 ]"
								data-size="small"
							>
								9,654
							</h4>
							<p class="[ text ]" data-size="M">
								Followers
							</p>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card__content" data-type="split">
						<div class="icon">
							<span data-bg-color="red" class="material-symbols-rounded"
								>handshake</span
							>
						</div>
						<div>
							<h4
								class="[ subtitle text-primary-500 ]"
								data-size="small"
							>
								324
							</h4>
							<p class="[ text ]" data-size="M">
								Friends
							</p>
						</div>
					</div>
				</div>
			</div>
            <div>
                <div class="width-fill card">
						<div class="form-group" data-type="text">
							<h4
								class="[ text fw-500 text-primary-500 margin-bottom-16 ]"
								data-size="L"
                                data-weight="XB"
							>
								Account Details
							</h4>
							<label for="register-username"
								>Username</label
							>
							<input
                            v-model="user.username"
								minlength="4"
								required
                                disabled
								type="text"
								name="username"
								id="register-username"
								placeholder="a unique username"
							/>
						</div>
						<div class="form-group" data-type="text">
							<label for="register-username"
								>E-Mail</label
							>
							<input
                            v-model="user.email"
								minlength="4"
								required
                                disabled
								type="text"
								name="username"
								id="register-username"
								placeholder="a unique username"
							/>
						</div>
                        <button class="button" data-size="M" disabled>Save Changes</button>
                </div>
            </div>
		</div>
	</div>
</template>

<script setup>
	const user = useUser();
</script>