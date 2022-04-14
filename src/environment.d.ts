declare namespace NodeJS {
    interface ProcessEnvironment {
        readonly NODE_ENV?: 'development' | 'production';
        readonly EXAMPLE_VAR?: 'EXAMPLE_VALUE';
    }
}
