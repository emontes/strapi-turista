module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f34a533a0aeae33f2caa85fe4fae4649'),
  },
});
