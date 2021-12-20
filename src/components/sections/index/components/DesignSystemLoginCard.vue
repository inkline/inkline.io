<template>
    <i-card>
        <i-form>
            <p class="h2">
                Sign up
            </p>
            <i-form-group>
                <i-form-label for="email">Email</i-form-label>
                <i-input name="email" placeholder="Enter your email" />
            </i-form-group>
            <i-form-group>
                <i-form-label for="password">Password</i-form-label>
                <i-input name="password" placeholder="Enter your password" type="password" />
            </i-form-group>
            <i-form-group>
                <i-button color="primary" block>
                    Sign up
                </i-button>
            </i-form-group>
        </i-form>
    </i-card>
</template>
